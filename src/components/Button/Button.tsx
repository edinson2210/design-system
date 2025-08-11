import React, { type ElementType, type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';
import './button.css';

export type ButtonVariant = 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost';
export type ButtonColor = 'default' | 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonRadius = 'none' | 'sm' | 'md' | 'lg' | 'full';
export type SpinnerPlacement = 'start' | 'end';

const buttonStyles = cva('ds-btn', {
  variants: {
    variant: {
      solid: 'ds-btn--variant-solid',
      bordered: 'ds-btn--variant-bordered',
      light: 'ds-btn--variant-light',
      flat: 'ds-btn--variant-flat',
      faded: 'ds-btn--variant-faded',
      shadow: 'ds-btn--variant-shadow',
      ghost: 'ds-btn--variant-ghost',
    },
    color: {
      default: 'ds-btn--color-default',
      primary: 'ds-btn--color-primary',
      secondary: 'ds-btn--color-secondary',
      success: 'ds-btn--color-success',
      warning: 'ds-btn--color-warning',
      danger: 'ds-btn--color-danger',
    },
    size: {
      sm: 'ds-btn--sm',
      md: 'ds-btn--md',
      lg: 'ds-btn--lg',
    },
    radius: {
      none: 'ds-btn--radius-none',
      sm: 'ds-btn--radius-sm',
      md: 'ds-btn--radius-md',
      lg: 'ds-btn--radius-lg',
      full: 'ds-btn--radius-full',
    },
    fullWidth: { true: 'ds-btn--full', false: '' },
    isIconOnly: { true: 'ds-btn--icon-only', false: '' },
    disableAnimation: { true: 'ds-btn--no-anim', false: '' },
  },
  compoundVariants: [
    { variant: 'shadow', class: 'ds-btn--with-shadow' },
  ],
  defaultVariants: {
    variant: 'solid',
    color: 'primary',
    size: 'md',
    radius: 'md',
    fullWidth: false,
    isIconOnly: false,
  },
});

// Polymorphic types
type AsProp<C extends ElementType> = { as?: C };
type PropsToOmit<C extends ElementType, P> = keyof (AsProp<C> & P);
export type PolymorphicComponentProps<C extends ElementType, Props = {}> = Props &
  AsProp<C> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

export interface CommonButtonProps extends VariantProps<typeof buttonStyles> {
  children?: ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
  disableRipple?: boolean;
  disableAnimation?: boolean;
  spinner?: ReactNode;
  spinnerPlacement?: SpinnerPlacement;
}

export type ButtonProps<C extends ElementType = 'button'> = PolymorphicComponentProps<C, CommonButtonProps>;

type PolymorphicRef<C extends ElementType> = React.ComponentPropsWithRef<C>['ref'];

export type ButtonComponent = <C extends ElementType = 'button'>(
  props: ButtonProps<C> & { ref?: PolymorphicRef<C> }
) => React.ReactElement | null;

function DefaultSpinner() {
  return <span className="ds-spinner" aria-hidden />;
}

const ButtonInner = <C extends ElementType = 'button'>(
  props: ButtonProps<C>,
  ref: PolymorphicRef<C>,
) => {
  const {
    as,
    children,
    className,
    variant = 'solid',
    color = 'primary',
    size = 'md',
    radius = 'md',
    fullWidth = false,
    isIconOnly = false,
    isDisabled = false,
    isLoading = false,
    disableRipple = false,
    disableAnimation = false,
    spinner,
    spinnerPlacement = 'start',
    ...rest
  } = props as ButtonProps;

  const Component: ElementType = (as || 'button') as ElementType;

  const classes = buttonStyles({
    variant,
    color,
    size,
    radius,
    fullWidth,
    isIconOnly,
    disableAnimation,
  });

  const isDisabledComputed = isDisabled || isLoading;
  const spinnerNode = isLoading ? spinner || <DefaultSpinner /> : null;

  const content = (
    <>
      {spinnerNode && spinnerPlacement === 'start' ? (
        <span className="ds-btn__spinner ds-btn__spinner--start">{spinnerNode}</span>
      ) : null}
      <span className="ds-btn__content">{children}</span>
      {spinnerNode && spinnerPlacement === 'end' ? (
        <span className="ds-btn__spinner ds-btn__spinner--end">{spinnerNode}</span>
      ) : null}
    </>
  );

  // Manejo de click: bloquear navegación/acciones cuando está deshabilitado o cargando
  const { onClick, ...otherProps } = rest as any;
  const onClickHandler = (event: React.MouseEvent) => {
    if (isDisabledComputed) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    if (typeof onClick === 'function') {
      onClick(event);
    }
  };

  const commonProps = {
    ref,
    className: clsx(classes, className, disableRipple && 'ds-btn--no-ripple'),
    'data-loading': isLoading ? 'true' : undefined,
    'data-disabled': isDisabledComputed ? 'true' : undefined,
    onClick: onClickHandler,
  } as const;

  if (Component === 'button') {
    return (
      <button
        {...(otherProps as React.ButtonHTMLAttributes<HTMLButtonElement>)}
        {...(commonProps as Omit<typeof commonProps, 'ref'> & { ref?: React.Ref<HTMLButtonElement> })}
        disabled={isDisabledComputed}
      >
        {content}
      </button>
    );
  }

  return (
    <Component
      {...(otherProps as any)}
      {...(commonProps as any)}
      ref={ref as any}
      aria-disabled={isDisabledComputed || undefined}
      role={Component === 'a' ? 'button' : undefined}
      tabIndex={isDisabledComputed ? -1 : (rest as any)?.tabIndex}
    >
      {content}
    </Component>
  );
};

export const Button = React.forwardRef<any, any>(ButtonInner as any) as ButtonComponent;


