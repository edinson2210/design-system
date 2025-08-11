import { default as React, ElementType, ReactNode } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
export type InputSize = "sm" | "md" | "lg";
export type InputRadius = "none" | "sm" | "md" | "lg" | "full";
type AsProp<C extends ElementType> = {
    as?: C;
};
type PropsToOmit<C extends ElementType, P> = keyof (AsProp<C> & P);
export type PolymorphicComponentProps<C extends ElementType, Props = {}> = Props & AsProp<C> & Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;
declare const inputStyles: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
    radius?: "sm" | "md" | "lg" | "none" | "full" | null | undefined;
    fullWidth?: boolean | null | undefined;
    isInvalid?: boolean | null | undefined;
    isSuccess?: boolean | null | undefined;
    isDisabled?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface CommonInputProps extends VariantProps<typeof inputStyles> {
    label?: ReactNode;
    helperText?: ReactNode;
    startContent?: ReactNode;
    endContent?: ReactNode;
}
export type InputProps<C extends ElementType = "input"> = PolymorphicComponentProps<C, CommonInputProps>;
export declare function Input<C extends ElementType = "input">(props: InputProps<C>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Input.d.ts.map