import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import GridItem from "../GridItem.vue";
import { gif } from "~/constants/dummy/gifs";

describe("GridItem", () => {
  it("renders properly", () => {
    const props = {
      item: gif,
    };

    const wrapper = mount(GridItem, {
      props,
    });

    const image = wrapper.find("img");
    const username = wrapper.text();
    const overlay = wrapper.find('[data-test="overlay-item"]');

    expect(overlay).toBeDefined();
    expect(username).toContain(props.item.username);
    expect(image).toBeDefined();
  });
});
