import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import SearchInput from "../SearchInput.vue";

describe("SearchInput", () => {
  const wrapper = mount(SearchInput);

  it("renders properly", () => {
    const form = wrapper.find("form");
    const button = wrapper.find("button");
    const input = wrapper.find("input");

    expect(form.exists()).toBe(true);
    expect(button.exists()).toBe(true);
    expect(input.exists()).toBe(true);
  });

  it("emits onSearch event when submit form", async () => {
    // set value input search
    const value = "reactions";
    const input = wrapper.find("input");
    await input.setValue(value);

    // submit the form
    const form = wrapper.find("form");
    await form.trigger("submit");

    const emitOnSearch = wrapper.emitted().onSearch as string[];
    expect(emitOnSearch[0][0]).toBe(value);
  });
});
