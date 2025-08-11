import { StoryObj } from '@storybook/react';
import { Card } from '../components/Card/Card';
declare const meta: {
    title: string;
    component: typeof Card;
    parameters: {
        layout: string;
    };
    args: {
        header: string;
        children: string;
        footer: string;
        variant: "elevated";
        radius: "md";
        padding: "md";
    };
    argTypes: {
        variant: {
            options: string[];
            control: "select";
        };
        radius: {
            options: string[];
            control: "inline-radio";
        };
        padding: {
            options: string[];
            control: "inline-radio";
        };
        interactive: {
            control: "boolean";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Playground: Story;
export declare const Outlined: Story;
export declare const Ghost: Story;
export declare const Interactive: Story;
export declare const Layouts: Story;
export declare const VariantsGrid: Story;
//# sourceMappingURL=Card.stories.d.ts.map