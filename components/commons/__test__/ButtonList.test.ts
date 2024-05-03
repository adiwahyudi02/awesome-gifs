import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ButtonList from "../ButtonList.vue";

describe("ButtonList", () => {
  const buttons = [
    {
      label: "Button 1",
      value: "button-1",
    },
    {
      label: "Button 2",
      value: "button-2",
    },
  ];

  const wrapper = mount(ButtonList, {
    props: {
      buttons,
      selected: buttons[0].value,
    },
  });

  it("renders properly", () => {
    const renderedButtons = wrapper.findAll("button");
    const button1 = renderedButtons[0].text();
    const button2 = renderedButtons[1].text();

    expect(button1).toContain(buttons[0].label);
    expect(button2).toContain(buttons[1].label);
  });

  it("emits onselected event when button is clicked", async () => {
    await wrapper.vm.$nextTick();
    const renderedButtons = wrapper.findAll("button");
    const button2 = renderedButtons[1];

    await button2.trigger("click");
    const emitOnSelected = wrapper.emitted().onSelected as string[];
    expect(emitOnSelected[0][0]).toBe(buttons[1].value);
  });
});
