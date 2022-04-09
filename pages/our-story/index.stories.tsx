import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PageWrapper } from "@/storybook-helpers/PageWrapper";
import OurStory from "@/pages/our-story/index";

export default {
  title: "Pages/OurStory",
  component: OurStory,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof OurStory>;

const Template: ComponentStory<typeof OurStory> = (args) => (
  <PageWrapper>
    <OurStory {...args} />
  </PageWrapper>
);

export const Default = Template.bind({});
