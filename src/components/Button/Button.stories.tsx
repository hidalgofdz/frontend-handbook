import Button from "./Button";
import { Story } from "@storybook/react";
import { ComponentProps } from "react";

const Template: Story<ComponentProps<typeof Button>> = ({ ...args }) => {
  return <Button {...args} />;
};

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Click me",
    className: "",
    primary: false,
    disabled: false,
    fullWidth: false,
  },
};

export const ButtonExample = Template.bind({});

ButtonExample.args = {};
