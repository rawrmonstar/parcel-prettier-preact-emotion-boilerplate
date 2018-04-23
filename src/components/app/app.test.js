import { h } from "preact";
import App from "../app";
import { deep } from "preact-render-spy";

describe("Initial Test of the App", () => {
  test("App renders 'Hello World!'", () => {
    const context = deep(<App />);
    expect(context.find("h1").text()).toBe("Hello World!");
  });
});
