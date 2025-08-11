import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  typescript: {
    check: false,
    reactDocgen: "react-docgen-typescript",
  },
  // Configuración para build estático
  staticDirs: ["../public"],
  // Configuración para GitHub Pages - CORREGIDO
  managerHead: (entry) =>
    typeof entry === "string"
      ? entry + '<meta name="robots" content="noindex">'
      : '<meta name="robots" content="noindex">',
};

export default config;
