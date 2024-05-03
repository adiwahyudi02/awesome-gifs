import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Modal from "../Modal.vue";

describe("Modal", () => {
  const wrapper = mount(Modal, {
    props: {
      isOpen: true,
    },
    slots: {
      default: "Main Content",
    },
  });

  it("renders properly", async () => {
    await wrapper.vm.$nextTick();
    const content = wrapper.text();
    const exitButton = wrapper.find('[data-test="exit-button"]');

    expect(content).toContain("Main Content");
    expect(exitButton).toBeDefined();
  });

  it("emits close event when exit button is clicked", async () => {
    await wrapper.vm.$nextTick();
    await wrapper.find('[data-testid="exit-button"]').trigger("click");

    expect(wrapper.emitted("onClose")).toBeTruthy();
  });
});
