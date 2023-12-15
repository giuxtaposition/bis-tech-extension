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

    expect(container.innerHTML).toBe("<div><!--<PathBox>--></div>");
  });

  test.each([
    {
      currentPath: Product.NetLife,
      style: "background: rgb(252 165 165); color: rgb(185 28 28);",
    },
    {
      currentPath: Product.SquareLife,
      style: "background: rgb(134 239 172); color: rgb(21 128 61);",
    },
    {
      currentPath: Product.Injury,
      style: "background: rgb(147 197 253); color: rgb(29 78 216);",
    },
  ])(
    "if currentPath is $currentPath shows correct styling",
    ({ currentPath, style }) => {
      renderPathBox({ currentPath });
      const pathBox = screen.getByText(currentPath);

      expect(pathBox).toHaveClass(currentPath);
      expect(pathBox).toHaveStyle(style);
    },
  );

  function renderPathBox(props?: Partial<ComponentProps<PathBox>>) {
    return render(PathBox, { currentPath: undefined, ...props });
  }
});
