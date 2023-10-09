import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "./Text";

export default {
  title: "Components/Text",
  component: Text,
  tags: ["autodocs"],
  args: {
    children: "Text Padrão.",
    size: "md",
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};

export const Small: StoryObj<TextProps> = {
  args: {
    children: "Text Small.",
    size: "sm",
  },
};

export const Large: StoryObj<TextProps> = {
  args: {
    children: "Text Large.",
    size: "lg",
  },
};

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <p>Text with P tag</p>,
  },
};
