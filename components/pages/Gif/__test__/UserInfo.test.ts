import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import UserInfo from "../UserInfo.vue";

describe("UserInfo", () => {
  it("renders properly", () => {
    const props = {
      username: "Adi",
      avatarSrc: "https://media3.giphy.com/channel_assets/nhl/sCDQY3KHSisL.jpg",
    };

    const wrapper = mount(UserInfo, {
      props,
    });

    const username = wrapper.text();
    const image = wrapper.find("img");
    expect(username).toContain(props.username);
    expect(image.attributes().src).toBe(props.avatarSrc);
  });
});
