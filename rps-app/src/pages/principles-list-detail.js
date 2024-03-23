import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { MenuList } from "../../compornents/menuList";
import { HelpBox } from "../../compornents/helpBox";
import { ReportBox } from "../../compornents/reportBox";
import { Dialog } from "../../compornents/dialog";
import { PrinciplesListDetailContent } from "../../compornents/principlesListDetailContent";

export default function Home() {
  const [helpBoxVisible, setHelpBoxVisible] = useState(false);

  const toggleHelpBox = () => {
    setHelpBoxVisible((prevVisible) => !prevVisible);
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
        <PrinciplesListDetailContent bgColor="yellow" />
      </div>
    </>
  );
}
