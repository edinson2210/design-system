import React, { ElementType, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import "./input.css";

export type InputSize = "sm" | "md" | "lg";
export type InputRadius = "none" | "sm" | "md" | "lg" | "full";
type AsProp<C extends ElementType> = { as?: C };

type PropsToOmit<C extends ElementType, P> = keyof (AsProp<C> & P);
export type PolymorphicComponentProps<
  C extends ElementType,
  Props = {}
> = Props &
  AsProp<C> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

const inputStyles = cva("ds-input", {
  variants: {
    size: { sm: "ds-input--sm", md: "ds-input--md", lg: "ds-input--lg" },
    radius: {
      none: "ds-input--radius-none",
      sm: "ds-input--radius-sm",
      md: "ds-input--radius-md",
      lg: "ds-input--radius-lg",
      full: "ds-input--radius-full",
    },
    fullWidth: { true: "ds-input--full", false: "" },
    isInvalid: { true: "ds-input--invalid", false: "" },
    isSuccess: { true: "ds-input--success", false: "" },
    isDisabled: { true: "ds-input--disabled", false: "" },
  },
  defaultVariants: { size: "md", radius: "md", fullWidth: false },
});

export interface CommonInputProps extends VariantProps<typeof inputStyles> {
  label?: ReactNode;
  helperText?: ReactNode;
  startContent?: ReactNode;
  endContent?: ReactNode;
}

export type InputProps<C extends ElementType = "input"> =
  PolymorphicComponentProps<C, CommonInputProps>;

export function Input<C extends ElementType = "input">(props: InputProps<C>) {
  const {
    as,
    className,
    label,
    helperText,
    startContent,
    endContent,
    size = "md",
    radius = "md",
    fullWidth = false,
    isInvalid = false,
    isSuccess = false,
    isDisabled = false,
    ...rest
  } = props as InputProps;

  const Component: ElementType = (as || "input") as ElementType;
  const classes = inputStyles({
    size,
    radius,
    fullWidth,
    isInvalid,
    isSuccess,
    isDisabled,
  });

  const describedById = helperText
    ? "ds-input-desc-" + Math.random().toString(36).slice(2, 8)
    : undefined;

  return (
    <label
      className={clsx(
        "ds-input-field",
        fullWidth && "ds-input-field--full",
        className
      )}
    >
      {label ? <span className="ds-input-label">{label}</span> : null}
      <div className="ds-input-wrapper">
        {startContent ? (
          <span className="ds-input-icon ds-input-icon--start">
            {startContent}
          </span>
        ) : null}
        <Component
          className={classes}
          aria-invalid={isInvalid || undefined}
          aria-describedby={describedById}
          disabled={isDisabled}
          {...(rest as any)}
        />
        {endContent ? (
          <span className="ds-input-icon ds-input-icon--end">{endContent}</span>
        ) : null}
      </div>
      {helperText ? (
        <span
          id={describedById}
          className={clsx(
            "ds-input-helper",
            isInvalid && "is-error",
            isSuccess && "is-success"
          )}
        >
          {helperText}
        </span>
      ) : null}
    </label>
  );
}
