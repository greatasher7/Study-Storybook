import type { Preview } from "@storybook/react";
import { Title, Subtitle, Description, Primary, Controls, Stories } from "@storybook/blocks";
import React from "react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
      toc: {
        contentsSelector: ".sbdocs-content",
        headingSelector: "h2, h3",
        ignoreSelector: ["#large"],
        title: "목차",
        disable: false,
      },
    },
  },
};

export default preview;
