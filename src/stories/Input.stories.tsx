import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../components/Input/Input";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: { layout: "centered" },
  args: {
    placeholder: "Escribe algo…",
    size: "md",
    radius: "md",
    fullWidth: false,
  },
  argTypes: {
    size: { options: ["sm", "md", "lg"], control: { type: "inline-radio" } },
    radius: {
      options: ["none", "sm", "md", "lg", "full"],
      control: { type: "inline-radio" },
    },
    fullWidth: { control: "boolean" },
    isInvalid: { control: "boolean" },
    isSuccess: { control: "boolean" },
    isDisabled: { control: "boolean" },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const WithLabel: Story = { args: { label: "Nombre" } };

export const HelperError: Story = {
  args: { label: "Email", helperText: "Formato inválido", isInvalid: true },
};
export const HelperSuccess: Story = {
  args: { label: "Email", helperText: "Todo OK", isSuccess: true },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 12 }}>
      <Input size="sm" placeholder="sm" />
      <Input size="md" placeholder="md" />
      <Input size="lg" placeholder="lg" />
    </div>
  ),
};

export const WithIcons: Story = {
  args: { startContent: "🔎", endContent: "⌫", placeholder: "Buscar" },
};

export const FullWidth: Story = {
  args: { fullWidth: true, label: "Búsqueda" },
};

export const VariantsGrid: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "24px" }}>
      <div>
        <h4 style={{ margin: "0 0 12px 0" }}>Tamaños</h4>
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <Input size="sm" placeholder="Small" />
          <Input size="md" placeholder="Medium" />
          <Input size="lg" placeholder="Large" />
        </div>
      </div>
      <div>
        <h4 style={{ margin: "0 0 12px 0" }}>Estados</h4>
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <Input placeholder="Normal" />
          <Input placeholder="Error" isInvalid helperText="Campo requerido" />
          <Input placeholder="Success" isSuccess helperText="Válido" />
          <Input placeholder="Disabled" isDisabled />
        </div>
      </div>
    </div>
  ),
};
