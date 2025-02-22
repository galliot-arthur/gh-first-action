import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import MainContent from "./MainContent";
import { describe, expect, it } from "vitest";

describe("MainContent", () => {
  it("should render a button", () => {
    render(<MainContent />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should show the help area after clicking the button", async () => {
    render(<MainContent />);

    const button = screen.getByRole("button");
    await userEvent.click(button);
    expect(screen.getByTestId("help-area")).toBeInTheDocument();
  });
});
