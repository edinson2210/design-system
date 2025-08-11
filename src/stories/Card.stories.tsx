import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../components/Card/Card";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: { layout: "centered" },
  args: {
    header: "Título",
    children: "Contenido del card. Puedes colocar cualquier JSX.",
    footer: "Acciones o metadatos",
    variant: "elevated",
    radius: "md",
    padding: "md",
  },
  argTypes: {
    variant: { options: ["elevated", "outlined", "ghost"], control: "select" },
    radius: { options: ["none", "sm", "md", "lg"], control: "inline-radio" },
    padding: { options: ["sm", "md", "lg"], control: "inline-radio" },
    interactive: { control: "boolean" },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
export const Outlined: Story = { args: { variant: "outlined" } };
export const Ghost: Story = { args: { variant: "ghost" } };
export const Interactive: Story = { args: { interactive: true } };
export const Layouts: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gap: 12,
        gridTemplateColumns: "repeat(3, 280px)",
      }}
    >
      <Card header="Elevated">Elevated</Card>
      <Card variant="outlined" header="Outlined">
        Outlined
      </Card>
      <Card variant="ghost" header="Ghost">
        Ghost
      </Card>
    </div>
  ),
};

export const VariantsGrid: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "24px" }}>
      <div>
        <h4 style={{ margin: "0 0 12px 0" }}>Variantes</h4>
        <div
          style={{
            display: "grid",
            gap: "12px",
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          <Card variant="elevated" header="Elevated">
            Contenido
          </Card>
          <Card variant="outlined" header="Outlined">
            Contenido
          </Card>
          <Card variant="ghost" header="Ghost">
            Contenido
          </Card>
        </div>
      </div>
      <div>
        <h4 style={{ margin: "0 0 12px 0" }}>Tamaños de Padding</h4>
        <div style={{ display: "flex", gap: "12px" }}>
          <Card padding="sm" header="Small">
            Contenido
          </Card>
          <Card padding="md" header="Medium">
            Contenido
          </Card>
          <Card padding="lg" header="Large">
            Contenido
          </Card>
        </div>
      </div>
    </div>
  ),
};
