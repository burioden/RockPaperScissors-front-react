import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { LoginContainer } from "../../compornents/loginContainer";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { email } = router.query;
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
          <div className="text">
            <p className="logo">
              {email}
              <br />
              <br />
              に、確認メールを送信しました
              <br />
              メールが届かない場合は、アドレス入力ミスの
              <br />
              可能性があるので、登録し直してください
            </p>

            <div className="button-field">
              <Link href="/tutorial" className="button blue-button">
                はじめる
              </Link>
            </div>
          </div>
        </LoginContainer>
      </div>
    </>
  );
}
