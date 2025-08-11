import React, { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import "./card.css";

const cardStyles = cva("ds-card", {
  variants: {
    variant: {
      elevated: "ds-card--elevated",
      outlined: "ds-card--outlined",
      ghost: "ds-card--ghost",
    },
    radius: {
      none: "ds-card--radius-none",
      sm: "ds-card--radius-sm",
      md: "ds-card--radius-md",
      lg: "ds-card--radius-lg",
    },
    padding: { sm: "ds-card--p-sm", md: "ds-card--p-md", lg: "ds-card--p-lg" },
    interactive: { true: "ds-card--interactive", false: "" },
  },
  defaultVariants: { variant: "elevated", radius: "md", padding: "md" },
});

export interface CardProps extends VariantProps<typeof cardStyles> {
  header?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ header, footer, children, className, ...v }: CardProps) {
  return (
    <section className={clsx(cardStyles(v), className)} role="group">
      {header ? <div className="ds-card__header">{header}</div> : null}
      <div className="ds-card__body">{children}</div>
      {footer ? <div className="ds-card__footer">{footer}</div> : null}
    </section>
  );
}
