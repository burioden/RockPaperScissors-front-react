import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Container } from "../../compornents/LoginContainer";

export default function Home() {
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
        <Container bgColor="yellow">
          <form class="login">
            <div class="input-field">
              <input placeholder="your@email.com" type="text" />
              <input placeholder="password" type="text" />
            </div>

            <div class="button-field">
              <button class="blue-button">ログイン</button>
              <Link href="/new-user">
                <p class="text-button">新規登録</p>
              </Link>
            </div>
          </form>
        </Container>
      </div>

      <script src="./js/script.js"></script>
    </>
  );
}
