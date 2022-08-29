import { describe, it, expect } from "vitest";
import add from "./add";

describe("add", () => {
  it("should add numbers properly", () => {
    expect(add(4, 4, 4)).toBe(12);
  });
});
