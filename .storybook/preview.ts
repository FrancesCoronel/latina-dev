import type { Preview } from "@storybook/react";
import "../styles/_styles.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: "centered",
    options: {
      storySort: {
        method: "alphabetical",
        order: ["Docs", "Components"],
      },
    },
  },
};

export default preview;
