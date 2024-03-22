import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { MenuList } from "../../compornents/menuList";
import { HelpBox } from "../../compornents/helpBox";
import { ReportBox } from "../../compornents/reportBox";
import { Dialog } from "../../compornents/dialog";

export default function Home() {
  const [helpBoxVisible, setHelpBoxVisible] = useState(false);

  const toggleHelpBox = () => {
    setHelpBoxVisible((prevVisible) => !prevVisible);
  };

  {
    /*

ReportBoxに渡したいデータ
- 日付 date
- タイトル title
- 達成率（達成したもの / Todoの総数） progress

遷移先のページ(report-description)に渡すデータ
・タイトル
・日付
・達成率
・詳細（もろもろ）


*/
  }

  const todoCompleted = 6;
  const todoSum = 10;

  const rate = (todoCompleted / todoSum) * 100;

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
        <div className="container bg-yellow">
          <main className="report">
            <div className="contents-wrapper">
              <div className="bg-rect">
                <div className="inner">
                  <ol>
                    <Link href="/report-description">{/* ここにリンクを設定 ページ動的に作るの・・・？*/}
                      <ReportBox
                        date="2024.02.02"
                        title="おやつ多すぎるよ"
                        progress={rate}
                      />
                    </Link>
                  </ol>
                </div>
              </div>
              <HelpBox visible={helpBoxVisible}>
                ・最大10文字
                <br />
                ・普段の呼び名がおすすめです
              </HelpBox>
              <MenuList toggleHelpBox={toggleHelpBox} />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
