import { default as React, ElementType, ReactNode } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
export type ButtonVariant = 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost';
export type ButtonColor = 'default' | 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonRadius = 'none' | 'sm' | 'md' | 'lg' | 'full';
export type SpinnerPlacement = 'start' | 'end';
declare const buttonStyles: (props?: ({
    variant?: "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost" | null | undefined;
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    radius?: "sm" | "md" | "lg" | "none" | "full" | null | undefined;
    fullWidth?: boolean | null | undefined;
    isIconOnly?: boolean | null | undefined;
    disableAnimation?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type AsProp<C extends ElementType> = {
    as?: C;
};
type PropsToOmit<C extends ElementType, P> = keyof (AsProp<C> & P);
export type PolymorphicComponentProps<C extends ElementType, Props = {}> = Props & AsProp<C> & Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;
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
export type ButtonComponent = <C extends ElementType = 'button'>(props: ButtonProps<C> & {
    ref?: PolymorphicRef<C>;
}) => React.ReactElement | null;
export declare const Button: ButtonComponent;
export {};
//# sourceMappingURL=Button.d.ts.map