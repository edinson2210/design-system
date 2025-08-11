import { StoryObj } from '@storybook/react';
import { Input } from '../components/Input/Input';
declare const meta: {
    title: string;
    component: typeof Input;
    parameters: {
        layout: string;
    };
    args: {
        placeholder: string;
        size: "md";
        radius: "md";
        fullWidth: false;
    };
    argTypes: {
        size: {
            options: string[];
            control: {
                type: "inline-radio";
            };
        };
        radius: {
            options: string[];
            control: {
                type: "inline-radio";
            };
        };
        fullWidth: {
            control: "boolean";
        };
        isInvalid: {
            control: "boolean";
        };
        isSuccess: {
            control: "boolean";
        };
        isDisabled: {
            control: "boolean";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Playground: Story;
export declare const WithLabel: Story;
export declare const HelperError: Story;
export declare const HelperSuccess: Story;
export declare const Sizes: Story;
export declare const WithIcons: Story;
export declare const FullWidth: Story;
export declare const VariantsGrid: Story;
//# sourceMappingURL=Input.stories.d.ts.map