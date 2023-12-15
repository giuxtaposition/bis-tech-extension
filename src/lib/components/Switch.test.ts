import { fireEvent, render, screen } from "@testing-library/svelte";
import Switch from "./Switch.svelte";
import type { ComponentProps } from "svelte";

describe("Switch", () => {
  it("should render label correctly", () => {
    renderSwitch({ label: "Show PathBox" });
    expect(screen.getByText("Show PathBox")).toBeVisible();
  });

  it("should render checked false by default", () => {
    renderSwitch();
    expect(screen.getByRole<HTMLInputElement>("checkbox").checked).toBeFalsy();
  });

  it("should render checked following passed checked value", () => {
    renderSwitch({ checked: true });
    expect(screen.getByRole<HTMLInputElement>("checkbox").checked).toBeTruthy();
  });

  it("clicking switch should trigger on click", async () => {
    const onClick = vi.fn();
    renderSwitch({ onChange: onClick });
    const checkbox = screen.getByRole("checkbox");

    await fireEvent.click(checkbox);

    expect(onClick).toHaveBeenCalled();
  });

  it("clicking switch should change checked value", async () => {
    renderSwitch();
    const checkbox: HTMLInputElement = screen.getByRole("checkbox");

    await fireEvent.click(checkbox);

    expect(checkbox.checked).toBeTruthy();
  });

  function renderSwitch(props?: Partial<ComponentProps<Switch>>) {
    return render(Switch, {
      label: "Show PathBox",
      onChange: vi.fn(),
      ...props,
    });
  }
});
