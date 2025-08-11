import fs from 'node:fs';
import path from 'node:path';

const rootDir = path.resolve(process.cwd());
const tokensDir = path.join(rootDir, 'tokens');
const outCss = path.join(rootDir, 'src', 'styles', 'tokens.css');

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function toCssVariables(vars) {
  return Object.entries(vars)
    .map(([key, value]) => `  --${key}: ${value};`)
    .join('\n');
}

function flattenTokens(obj, prefix = []) {
  const out = {};
  for (const [k, v] of Object.entries(obj)) {
    if (v && typeof v === 'object' && 'value' in v && Object.keys(v).length === 1) {
      const name = [...prefix, k].join('-');
      out[name] = v.value;
    } else if (v && typeof v === 'object') {
      Object.assign(out, flattenTokens(v, [...prefix, k]));
    }
  }
  return out;
}

function build() {
  const primitives = readJson(path.join(tokensDir, 'primitives.json'));
  const semantic = readJson(path.join(tokensDir, 'semantic.json'));
  const components = readJson(path.join(tokensDir, 'components.json'));

  const flatPrim = flattenTokens(primitives);
  const flatSem = flattenTokens(semantic);
  const flatComp = flattenTokens(components);
  const all = { ...flatPrim, ...flatSem, ...flatComp };

  const refRegex = /^\{(.+?)\}$/;
  const normalizeKey = (keyPath) => keyPath.replace(/\.value$/u, '').replaceAll('.', '-');
  const resolveValue = (val, depth = 0) => {
    if (depth > 10) return val; // prevenir ciclos
    if (typeof val === 'string') {
      const m = val.match(refRegex);
      if (m) {
        const refKey = normalizeKey(m[1]);
        const looked = all[refKey];
        if (looked !== undefined) {
          return resolveValue(looked, depth + 1);
        }
      }
    }
    return val;
  };

  // Map manual -> semántico/comp, para exponer nombres amigables que ya usamos
  const mapped = {
    // Tipografía
    'font-sans': resolveValue(flatPrim['typography-fontFamily-sans']),
    'text-body-size': resolveValue(flatPrim['typography-fontSize-md']),
    'text-body-line': resolveValue(flatPrim['typography-lineHeight-normal']),
    'label-weight': resolveValue(flatPrim['typography-fontWeight-semibold']),

    // Colores base/semánticos
    white: resolveValue(flatPrim['colors-base-white']),
    black: resolveValue(flatPrim['colors-base-black']),
    'neutral-50': resolveValue(flatPrim['colors-neutral-50']),
    'neutral-100': resolveValue(flatPrim['colors-neutral-100']),
    'neutral-200': resolveValue(flatPrim['colors-neutral-200']),
    'neutral-900': resolveValue(flatPrim['colors-neutral-900']),
    'primary-600': resolveValue(flatPrim['colors-primary-600']),
    'primary-700': resolveValue(flatPrim['colors-primary-700']),

    'color-bg': resolveValue(flatSem['color-bg']),
    'color-fg': resolveValue(flatSem['color-fg']),
    'color-muted': resolveValue(flatSem['color-muted']),
    'color-border': resolveValue(flatSem['color-border']),
    'color-brand': resolveValue(flatSem['color-brand-default']),
    'color-brand-hover': resolveValue(flatSem['color-brand-hover']),
    'color-brand-fg': resolveValue(flatSem['color-brand-fg']),

    // Spacing / radius / shadow
    'space-3': resolveValue(flatPrim['spacing-3']),
    'space-4': resolveValue(flatPrim['spacing-4']),
    'radius-md': resolveValue(flatPrim['radii-md']),
    'shadow-sm': resolveValue(flatPrim['shadows-sm']),

    // Component: Button
    'button-radius': resolveValue(flatSem['radius-control']),
    'button-py': resolveValue(flatSem['space-controlY']),
    'button-px': resolveValue(flatSem['space-controlX']),
    'button-weight': resolveValue(flatSem['text-label-fontWeight']),
    'button-size-sm': resolveValue(flatPrim['typography-fontSize-sm']),
    'button-size-md': resolveValue(flatPrim['typography-fontSize-md']),
    'button-size-lg': resolveValue(flatPrim['typography-fontSize-lg']),

    'button-primary-bg': resolveValue(flatComp['button-variant-primary-bg']),
    'button-primary-bg-hover': resolveValue(flatComp['button-variant-primary-bgHover']),
    'button-primary-fg': resolveValue(flatComp['button-variant-primary-fg']),

    'button-secondary-bg': resolveValue(flatComp['button-variant-secondary-bg']),
    'button-secondary-fg': resolveValue(flatComp['button-variant-secondary-fg']),
    'button-secondary-border': resolveValue(flatComp['button-variant-secondary-border']),
    'button-secondary-bg-hover': resolveValue(flatComp['button-variant-secondary-bgHover']),

    'button-ghost-bg': resolveValue(flatComp['button-variant-ghost-bg']),
    'button-ghost-fg': resolveValue(flatComp['button-variant-ghost-fg']),
    'button-ghost-bg-hover': resolveValue(flatComp['button-variant-ghost-bgHover']),

    // Paletas para variantes de color
    'palette-default': resolveValue(flatPrim['colors-neutral-900']),
    'palette-primary': resolveValue(flatPrim['colors-primary-600']),
    'palette-secondary': resolveValue(flatPrim['colors-secondary-600']),
    'palette-tertiary': resolveValue(flatPrim['colors-tertiary-600']),
    'palette-success': resolveValue(flatPrim['colors-success-500']),
    'palette-warning': resolveValue(flatPrim['colors-warning-500']),
    'palette-danger': resolveValue(flatPrim['colors-error-500']),

    // Radios extra para variantes
    'radius-none': '0px',
    'radius-sm': resolveValue(flatPrim['radii-sm']),
    'radius-md': resolveValue(flatPrim['radii-md']),
    'radius-lg': resolveValue(flatPrim['radii-lg']),
    'radius-full': resolveValue(flatPrim['radii-full']),

    // Hovers por paleta
    'palette-primary-hover': resolveValue(flatPrim['colors-primary-700']),
    'palette-secondary-hover': resolveValue(flatPrim['colors-secondary-700']),
    'palette-tertiary-hover': resolveValue(flatPrim['colors-tertiary-700']),
    'palette-default-hover': resolveValue(flatPrim['colors-neutral-800']),
    'palette-success-hover': resolveValue(flatPrim['colors-success-500']),
    'palette-warning-hover': resolveValue(flatPrim['colors-warning-500']),
    'palette-danger-hover': resolveValue(flatPrim['colors-error-500'])
  };

  // Derivados por variante+color para Button
  const colorKeys = ['default', 'primary', 'secondary', 'tertiary', 'success', 'warning', 'danger'];
  const neutral50 = resolveValue(flatPrim['colors-neutral-50']);
  const neutral100 = resolveValue(flatPrim['colors-neutral-100']);
  const white = resolveValue(flatPrim['colors-base-white']);
  const black = resolveValue(flatPrim['colors-base-black']);

  for (const color of colorKeys) {
    const base = mapped[`palette-${color}`];
    const hover = mapped[`palette-${color}-hover`] ?? base;
    const fgOnSolid = color === 'default' ? white : white;
    const fgOnLight = base; // text in light/flat/ghost

    // solid
    mapped[`btn-solid-${color}-bg`] = base;
    mapped[`btn-solid-${color}-fg`] = fgOnSolid;
    mapped[`btn-solid-${color}-border`] = base;
    mapped[`btn-solid-${color}-bg-hover`] = hover;

    // bordered
    mapped[`btn-bordered-${color}-bg`] = 'transparent';
    mapped[`btn-bordered-${color}-fg`] = base;
    mapped[`btn-bordered-${color}-border`] = base;
    mapped[`btn-bordered-${color}-bg-hover`] = neutral50;

    // light
    mapped[`btn-light-${color}-bg`] = neutral50;
    mapped[`btn-light-${color}-fg`] = fgOnLight;
    mapped[`btn-light-${color}-border`] = 'transparent';
    mapped[`btn-light-${color}-bg-hover`] = neutral100;

    // flat
    mapped[`btn-flat-${color}-bg`] = 'transparent';
    mapped[`btn-flat-${color}-fg`] = fgOnLight;
    mapped[`btn-flat-${color}-border`] = 'transparent';
    mapped[`btn-flat-${color}-bg-hover`] = neutral100;

    // faded
    mapped[`btn-faded-${color}-bg`] = `color-mix(in srgb, ${base} 12%, transparent)`;
    mapped[`btn-faded-${color}-fg`] = base;
    mapped[`btn-faded-${color}-border`] = `color-mix(in srgb, ${base} 25%, transparent)`;
    mapped[`btn-faded-${color}-bg-hover`] = `color-mix(in srgb, ${base} 18%, transparent)`;

    // shadow
    mapped[`btn-shadow-${color}-bg`] = base;
    mapped[`btn-shadow-${color}-fg`] = fgOnSolid;
    mapped[`btn-shadow-${color}-border`] = base;
    mapped[`btn-shadow-${color}-bg-hover`] = hover;

    // ghost
    mapped[`btn-ghost-${color}-bg`] = 'transparent';
    mapped[`btn-ghost-${color}-fg`] = fgOnLight;
    mapped[`btn-ghost-${color}-border`] = 'transparent';
    mapped[`btn-ghost-${color}-bg-hover`] = neutral100;
  }

  const css = `/* Archivo generado automáticamente a partir de tokens JSON. No editar a mano. */\n:root {\n${toCssVariables(mapped)}\n}\n\nhtml, body, #root {\n  font-family: var(--font-sans);\n  font-size: var(--text-body-size);\n  line-height: var(--text-body-line);\n  color: var(--color-fg);\n  background-color: var(--color-bg);\n}`;

  ensureDir(outCss);
  fs.writeFileSync(outCss, css, 'utf8');
  console.log(`Generado ${path.relative(rootDir, outCss)}`);
}

build();


