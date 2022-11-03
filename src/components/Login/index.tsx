import React, { useState } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showUser, setShowUser] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setShowUser(false);
    e.preventDefault();
    if (validateEmail(email)) {
      setShowUser(true);
      setError("");
      return;
    }
    setError("メールアドレスが有効ではありません");
    return false;
  };

  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>メールアドレス</label>
          <input
            type="email"
            placeholder="メールアドレス入力"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>パスワード</label>
          <input
            type="password" //type="text"にしてみる
            placeholder="パスワード入力"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {showUser && (
          <div data-testid="user" style={{ backgroundColor: "green" }}>
            {email}
          </div>
        )}
        {error && (
          <div data-testid="error" style={{ backgroundColor: "red" }}>
            {error}
          </div>
        )}

        <button data-testid="submit" type="submit">
          送信
        </button>
      </form>
    </>
  );
};

export const validateEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (regex.test(email)) {
    return true;
  }
  return false;
};

export default Login;
