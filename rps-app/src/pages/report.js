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

  const makeDate = (date_json) => {
    const date = new Date(date_json);
    return `${date.getFullYear()}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')}`
  };

  const makeRate = (id) => {
    const json_to_do = `[
      {
          "id": 1,
          "todo": "カレンダーで約束を共有する",
          "is_completed": false,
          "report_id": 1,
          "created_at": "2024-03-22T20:10:32.630Z",
          "updated_at": "2024-03-22T20:10:32.630Z"
      },
      {
          "id": 2,
          "todo": "外食しちゃう",
          "is_completed": false,
          "report_id": 1,
          "created_at": null,
          "updated_at": null
      }
    ]`;
    const parsed_to_do = JSON.parse(json_to_do);
    let todoCompleted = 0
    let todoSum = 0
    parsed_to_do.forEach(to_do => {
      todoSum++;
      if (to_do.is_completed) todoCompleted++;
    });
    return (todoCompleted / todoSum) * 100;
  }

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
  const json = `[
    {
        "id": 3,
        "title": "今日の晩御飯に関して",
        "decision": null,
        "todo_progress": null,
        "user_id": 1,
        "created_at": "2024-03-22T18:58:54.679Z",
        "updated_at": "2024-03-22T18:58:54.679Z"
    },
    {
        "id": 4,
        "title": "今日のおやつに関して",
        "decision": null,
        "todo_progress": null,
        "user_id": 1,
        "created_at": "2024-03-22T19:06:17.482Z",
        "updated_at": "2024-03-22T19:06:17.482Z"
    }
  ]`;
  const parsed = JSON.parse(json);

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
                    {parsed.map((rep)=>{
                      const date = makeDate(rep.created_at);
                      const rate = makeRate(rep.id);
                      return (
                        <Link href={{pathname: "/report-description/", query:{id: rep.id, date: date, title:rep.title, rate: rate}}}>
                      <ReportBox
                        date={date}
                        title={rep.title}
                        progress={rate}
                      />
                    </Link>
                      )
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
