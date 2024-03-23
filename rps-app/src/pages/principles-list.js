import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { MenuList } from "../../compornents/menuList";
import { HelpBox } from "../../compornents/helpBox";
import { PrinciplesBox } from "../../compornents/principlesBox";
import { Dialog } from "../../compornents/dialog";

export default function Home() {
  const [helpBoxVisible, setHelpBoxVisible] = useState(false);

  const toggleHelpBox = () => {
    setHelpBoxVisible((prevVisible) => !prevVisible);
  };

  const json_partner = `{
    "id": 1,
    "name": "あやりちゃん",
    "user_id": 1,
    "created_at": "2024-03-18T12:10:46.090Z",
    "updated_at": "2024-03-18T12:10:46.090Z"
  }`;
  const parsed_partner = JSON.parse(json_partner);

  const json_principles = `{
    "id": 1,
    "principle_first": "価値観1",
    "principle_second": "価値観2",
    "principle_third": "価値観3",
    "principle_fourth": null,
    "principle_fifth": null,
    "principle_sixth": null,
    "principle_seventh": null,
    "principle_eighth": null,
    "principle_ninth": null,
    "principle_tenth": null,
    "id_first": 1,
    "why_first": "なぜ１",
    "how_first": "どのように１",
    "when_first": null,
    "situation_first": null,
    "where_first": null,
    "who_first": null,
    "what_first": null,
    "other_first": null,
    "id_second": 2,
    "why_second": "なぜ２",
    "how_second": "どのように２",
    "when_second": null,
    "situation_second": null,
    "where_second": null,
    "who_second": null,
    "what_second": null,
    "other_second": null,
    "id_third": 3,
    "why_third": "なぜ３",
    "how_third": "どのように３",
    "when_third": null,
    "situation_third": null,
    "where_third": null,
    "who_third": null,
    "what_third": null,
    "other_third": null,
    "user_id": 1,
    "partner_id": 1,
    "created_at": "2024-03-22T18:08:39.993Z",
    "updated_at": "2024-03-22T18:08:39.993Z"
  }`;

  const parsed_principles = JSON.parse(json_principles);
  const principles = [
    {color: "blue", principle: parsed_principles.principle_first},
    {color: "green", principle: parsed_principles.principle_second},
    {color: "orange", principle: parsed_principles.principle_third},
    {color: "skyblue", principle: parsed_principles.principle_fourth},
    {color: "purple", principle: parsed_principles.principle_fifth},
    {color: "yellow", principle: parsed_principles.principle_sixth},
    {color: "red", principle: parsed_principles.principle_seventh},
    {color: "pink", principle: parsed_principles.principle_eighth},
    {color: "gray", principle: parsed_principles.principle_ninth},
    {color: "lightblue", principle: parsed_principles.principle_tenth}
  ];


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
                  <p>{parsed_partner.name}さんと大切にしたいこと</p>
                  <ol>
                    {principles.map((pri) => {
                      return (pri.principle === null ? null : <Link href="/report-description">{/* ここにリンクを設定 ページ動的に作るの・・・？*/}
                        <PrinciplesBox
                          color={pri.color}
                          principle={pri.principle}
                        />
                      </Link>)
                    })}
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
