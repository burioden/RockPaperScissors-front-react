import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { LoginContainer } from "../../compornents/loginContainer";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showEmailNote, setShowEmailNote] = useState(false);
  const [showPasswordNote, setShowPasswordNote] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    let emailValid = isValidEmail(email);
    let passwordValid = isValidPassword(password);

    if (!emailValid || !passwordValid) {
      if (!emailValid) {
        setShowEmailNote(true); // メールアドレスの形式が正しくない場合に注釈を表示
      }
      if (!passwordValid) {
        setShowPasswordNote(true); // パスワードの形式が正しくない場合に注釈を表示
      }
      return;
    }

    // フォーム送信処理
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Name: "hogehoge" }),
    };

    const url = `https://rock-papper-scissors-api-silent-sun-7263.fly.dev/api/v1/auth?email=${email}&password=${password}&password_confirm=${password}&name=testuser`;

    fetch(url, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // 次のページに推移し、入力値をクエリパラメーターとして渡す
    router.push({
      pathname: "/new-user-comp",
      query: { email: email },
    });
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
    setShowEmailNote(false); // 入力が変更されたら注釈を非表示
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
    setShowPasswordNote(false); // 入力が変更されたら注釈を非表示
  };

  // メールアドレスの形式が正しいかどうかをチェックする関数
  const isValidEmail = (email) => {
    // シンプルなメールアドレスの正規表現パターン
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  // パスワードの形式が正しいかどうかをチェックする関数
  const isValidPassword = (password) => {
    // 8文字以上の英語と数字の正規表現パターン
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordPattern.test(password);
  };

  return (
    <>
      <Head>
        <title>Peace time Piece</title>
        <meta
          name="description"
          content="「どうせなら、いいけんかを、一度だけしよう」大切な人とのけんかを変えていくアプリです"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="wrapper">
        <LoginContainer bgColor="blue">
          <form className="new-user" onSubmit={handleSubmit}>
            <div className="input-field">
              <input
                placeholder="your@email.com"
                type="text"
                value={email}
                onChange={handleChangeEmail}
              />
              <div className="attention">
                {showEmailNote && "※正しいメールアドレスを入力してください"}
              </div>
              <input
                placeholder="password"
                type="password"
                value={password}
                onChange={handleChangePassword}
              />
              <div className="attention">
                {showPasswordNote && "※8文字以上の英数字混合で入力してください"}
              </div>
            </div>

            <div className="button-field">
              <button type="submit" className="blue-button">
                新規登録
              </button>
            </div>
          </form>
        </LoginContainer>
      </div>
    </>
  );
}
