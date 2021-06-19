import ButtonComponent from "./Button";
import { Story } from "@storybook/react";
import { ComponentProps } from "react";

const Template: Story<ComponentProps<typeof ButtonComponent>> = ({
  ...args
}) => {
  return <ButtonComponent {...args} />;
};

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Button",
  component: ButtonComponent,
};

export const Button = Template.bind({});

Button.args = {
  children: "Click me",
};

export const ButtonDisabled = Template.bind({});

ButtonDisabled.args = {
  ...Button.args,
  disabled: true,
};

export const ButtonHovered = Template.bind({});

ButtonHovered.args = {
  ...Button.args,
  isHovered: true,
};

export const ButtonFullWith = Template.bind({});

ButtonFullWith.args = {
  ...Button.args,
  fullWidth: true,
};

export const ButtonFullWithDisabled = Template.bind({});
ButtonFullWithDisabled.args = {
  ...Button.args,
  fullWidth: true,
  disabled: true,
};

export const PrimaryButton = Template.bind({});

PrimaryButton.args = {
  ...Button.args,
  primary: true,
};

export const PrimaryButtonHovered = Template.bind({});

PrimaryButtonHovered.args = {
  ...PrimaryButton.args,
  isHovered: true,
};

export const PrimaryDisabled = Template.bind({});

PrimaryDisabled.args = {
  ...PrimaryButton.args,
  disabled: true,
};

export const PrimaryFullWidth = Template.bind({});

PrimaryFullWidth.args = {
  ...PrimaryButton.args,
  fullWidth: true,
};

export const PrimaryFullWidthDisabled = Template.bind({});

PrimaryFullWidthDisabled.args = {
  ...PrimaryButton.args,
  fullWidth: true,
  disabled: true,
};
