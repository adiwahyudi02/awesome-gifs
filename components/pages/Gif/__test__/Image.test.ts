import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Image from "../Image.vue";

describe("Image", () => {
  it("renders properly", () => {
    const props = {
      src: "/_ipx/h_50&f_giv&blur_2&q_50/images/image-placeholder.gif",
      atr: "image gif",
    };

    const wrapper = mount(Image, {
      props,
    });

    const image = wrapper.find("img");
    expect(image).toBeDefined();
    expect(image.attributes().src).toBe(props.src);
  });
});
