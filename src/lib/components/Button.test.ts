import { render, fireEvent, screen } from "@testing-library/svelte";

import Button from "./Button.svelte";
import type { ComponentProps } from "svelte";

describe("Button", () => {
  test("shows label when rendered", () => {
    renderButton({ label: "Press me" });
    expect(screen.getByRole("button")).toHaveTextContent("Press me");
  });

  test("fires onClick function when pressed", async () => {
    const onClick = vi.fn();
    renderButton({ label: "Press me", onClick });

    const button = screen.getByRole("button");

    await fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  function renderButton(props?: Partial<ComponentProps<Button>>) {
    return render(Button, { label: "", onClick: vi.fn(), ...props });
  }
});
