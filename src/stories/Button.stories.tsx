import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button/Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Button",
    variant: "solid",
    color: "primary",
    size: "md",
    radius: "md",
    fullWidth: false,
    isIconOnly: false,
    isDisabled: false,
    isLoading: false,
    disableRipple: false,
    disableAnimation: false,
    spinnerPlacement: "start",
  },
  argTypes: {
    variant: {
      options: [
        "solid",
        "bordered",
        "light",
        "flat",
        "faded",
        "shadow",
        "ghost",
      ],
      control: { type: "select" },
    },
    color: {
      options: [
        "default",
        "primary",
        "secondary",
        "tertiary",
        "success",
        "warning",
        "danger",
      ],
      control: { type: "select" },
    },
    size: { options: ["sm", "md", "lg"], control: { type: "inline-radio" } },
    radius: {
      options: ["none", "sm", "md", "lg", "full"],
      control: { type: "inline-radio" },
    },
    fullWidth: { control: "boolean" },
    isIconOnly: { control: "boolean" },
    isDisabled: { control: "boolean" },
    isLoading: { control: "boolean" },
    disableRipple: { control: "boolean" },
    disableAnimation: { control: "boolean" },
    spinnerPlacement: {
      options: ["start", "end"],
      control: { type: "inline-radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Playground: Story = {};

export const VariantsGrid: Story = {
  render: () => {
    const variants = ["solid", "bordered", "light", "flat", "faded"] as const;
    const colors = [
      "default",
      "primary",
      "secondary",
      "tertiary",
      "success",
      "warning",
      "danger",
    ] as const;

    return (
      <div style={{ display: "grid", gap: "16px" }}>
        {variants.map((variant) => (
          <div key={variant} style={{ display: "grid", gap: "8px" }}>
            <h4 style={{ margin: "0 0 8px 0", textTransform: "capitalize" }}>
              {variant}
            </h4>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {colors.map((color) => (
                <Button
                  key={`${variant}-${color}`}
                  variant={variant}
                  color={color as any}
                  size="md"
                >
                  {color}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12 }}>
      <Button size="sm">SM</Button>
      <Button size="md">MD</Button>
      <Button size="lg">LG</Button>
    </div>
  ),
};

export const Radius: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12 }}>
      <Button radius="none">none</Button>
      <Button radius="sm">sm</Button>
      <Button radius="md">md</Button>
      <Button radius="lg">lg</Button>
      <Button radius="full">full</Button>
    </div>
  ),
};

export const AsLink: Story = {
  render: () => (
    <Button as="a" href="#" variant="bordered">
      Como enlace
    </Button>
  ),
};

export const Loading: Story = {
  args: { isLoading: true, children: "Cargando" },
};

export const LoadingEnd: Story = {
  args: { isLoading: true, spinnerPlacement: "end", children: "Cargando" },
};

export const IconOnly: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12 }}>
      <Button isIconOnly aria-label="estrella">
        ★
      </Button>
      <Button isIconOnly color="secondary" aria-label="corazón">
        ♥
      </Button>
      <Button isIconOnly variant="bordered" aria-label="check">
        ✓
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  args: { isDisabled: true, children: "Deshabilitado" },
};

export const FullWidth: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <Button fullWidth>Full width</Button>
    </div>
  ),
};
