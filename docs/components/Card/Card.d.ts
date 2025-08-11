import { ReactNode } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
declare const cardStyles: (props?: ({
    variant?: "ghost" | "elevated" | "outlined" | null | undefined;
    radius?: "sm" | "md" | "lg" | "none" | null | undefined;
    padding?: "sm" | "md" | "lg" | null | undefined;
    interactive?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface CardProps extends VariantProps<typeof cardStyles> {
    header?: ReactNode;
    footer?: ReactNode;
    children?: ReactNode;
    className?: string;
    onClick?: () => void;
}
export declare function Card({ header, footer, children, className, ...v }: CardProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Card.d.ts.map