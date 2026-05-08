import { render, screen } from "@testing-library/svelte";
import PathBox from "./PathBox.svelte";
import { Product } from "../../types";
import type { ComponentProps } from "svelte";

describe("PathBox", () => {
  test("shows currentPath", () => {
    renderPathBox({ currentPath: "vita" });
    expect(screen.getByText("vita")).toBeVisible();
  });

  test("if currentPath undefined does not show anything", () => {
    const { container } = render(PathBox);

    expect(container.innerHTML).toBe("<!--<PathBox>-->");
  });

  test.each([
    { currentPath: Product.Life },
    { currentPath: Product.PersonalAccident },
  ])(
    "if currentPath is $currentPath shows correct styling",
    ({ currentPath }) => {
      renderPathBox({ currentPath });
      const pathBox = screen.getByText(currentPath);

      expect(pathBox).toHaveClass(currentPath);
    },
  );

  function renderPathBox(props?: Partial<ComponentProps<PathBox>>) {
    return render(PathBox, { currentPath: undefined, ...props });
  }
});
