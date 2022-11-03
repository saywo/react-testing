import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login, { validateEmail } from "../components/Login";

describe("Test Login Component", () => {
  test("render form with on button", async () => {
    render(<Login />);
    const buttonList = await screen.findAllByRole("button");
    // console.log(buttonList);
    expect(buttonList).toHaveLength(1);
  });
  test("should be failed on email validation", () => {
    const testEmail = "surhiro.com";
    expect(validateEmail(testEmail)).not.toBe(true);
  });
  test("should be succeeded on email validation", () => {
    const testEmail = "surhiro@gmail.com";
    expect(validateEmail(testEmail)).toBe(true);
  });
  test("password input shold have type password", () => {
    render(<Login />);
    const password = screen.getByPlaceholderText("パスワード入力");
    expect(password).toHaveAttribute("type", "password");
  });
  test("should be able to submit the form", () => {
    render(<Login />);
    const submitButton = screen.getByTestId("submit");
    const email = screen.getByPlaceholderText("メールアドレス入力");
    const password = screen.getByPlaceholderText("パスワード入力");

    userEvent.type(email, "suehiro@gmail.com");
    userEvent.type(password, "fooooo");
    userEvent.click(submitButton);

    const userInfo = screen.getByText("suehiro@gmail.com");
    expect(userInfo).toBeInTheDocument();
  });
});
