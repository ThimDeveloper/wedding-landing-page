import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PageWrapper } from "@/storybook-helpers/PageWrapper";
import SignIn from "@/pages/sign-in";

export default {
  title: "Pages/SignIn",
  component: SignIn,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof SignIn>;

const Template: ComponentStory<typeof SignIn> = (args) => (
  <PageWrapper>
    <SignIn {...args} />
  </PageWrapper>
);

export const Default = Template.bind({});
