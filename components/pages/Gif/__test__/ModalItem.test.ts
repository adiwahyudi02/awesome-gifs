import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ModalItem from "../ModalItem.vue";
import { gif } from "~/constants/dummy/gifs";

describe("ModalItem", () => {
  const props = {
    item: gif,
    isOpen: true,
  };

  const wrapper = mount(ModalItem, {
    props,
  });

  it("renders properly", () => {
    const exitButton = wrapper.find('[data-test="exit-button"]');
    const image = wrapper.find("img");
    const username = wrapper.text();

    expect(username).toContain(props.item.username);
    expect(image).toBeDefined();
    expect(exitButton).toBeDefined();
  });
});
