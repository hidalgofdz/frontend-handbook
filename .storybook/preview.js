import { addDecorator } from "@storybook/react";
import TailwindWrapper from "./TailwindWrapper";

addDecorator((storyFn) => <TailwindWrapper>{storyFn()}</TailwindWrapper>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
