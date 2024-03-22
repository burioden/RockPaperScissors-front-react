import Head from "next/head";
import Link from "next/link";
import { SettingsContent } from "../../compornents/settingsContent";

export default function Home() {
    let pageNum = 0;
    
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
        <SettingsContent bgColor="blue"/>
      </div>
    </>
  );
};