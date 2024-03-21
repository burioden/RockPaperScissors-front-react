import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Container } from "../../compornents/LoginContainer";
import { useRouter } from "next/router";
import { useState } from "react";

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
        console.log("パスワードチェケ");
      }
      return;
    }

    // フォーム送信処理

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
    console.log("メールチェケ");
    return emailPattern.test(email);
  };

  // パスワードの形式が正しいかどうかをチェックする関数
  const isValidPassword = (password) => {
    // 8文字以上の英語と数字の正規表現パターン
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    console.log("パスワードチェケ");
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

      <div class="wrapper">
        <Container bgColor="blue">
          <form class="new-user" onSubmit={handleSubmit}>
            <div class="input-field">
              <input
                placeholder="your@email.com"
                type="text"
                value={email}
                onChange={handleChangeEmail}
              />
              <div class="attention">
                {showEmailNote && "※正しいメールアドレスを入力してください"}
              </div>
              <input
                placeholder="password"
                type="password"
                value={password}
                onChange={handleChangePassword}
              />
              <div class="attention">
                {showPasswordNote &&
                  "※8文字以上の英数字混合で入力してください"}
              </div>
            </div>

            <div class="button-field">
              <button type="submit" class="blue-button">
                新規登録
              </button>
            </div>
          </form>
        </Container>
      </div>
    </>
  );
}
