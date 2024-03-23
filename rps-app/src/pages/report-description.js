import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/router';
import { MenuList } from "../../compornents/menuList";
import { HelpBox } from "../../compornents/helpBox";
import { ReportBox } from "../../compornents/reportBox";


export default function Home() {
  const [helpBoxVisible, setHelpBoxVisible] = useState(false);

  const toggleHelpBox = () => {
    setHelpBoxVisible((prevVisible) => !prevVisible);
  };
  const router = useRouter();

  const json_details = `[
    {
        "id": 1,
        "content": "今日は相手が作る日だったのに、作ってくれなくて悲しかった",
        "report_id": 1,
        "created_at": "2024-03-22T19:40:20.217Z",
        "updated_at": "2024-03-22T19:40:20.217Z"
    },
    {
        "id": 2,
        "content": "前日に約束を確認しなかったのも悪かったかも",
        "report_id": 1,
        "created_at": "2024-03-22T19:46:20.954Z",
        "updated_at": "2024-03-22T19:46:20.954Z"
    }
  ]`;

  const parsed_details = JSON.parse(json_details);

  const json_decision = `[
    {
        "id": 3,
        "title": "今日の晩御飯に関して",
        "decision": "カレンダーにかく",
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

  const parsed_decision = JSON.parse(json_decision);


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

  {
    /*

report.jsから貰いたいデータ
- 日付 date
- タイトル title
- 達成率（達成したもの / Todoの総数） progress
- 詳細

受け取ったと仮定し作成
*/
  }

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
                    {/* ここにリンクを設定 ページ動的に作るの・・・？*/}
                    <ReportBox
                      date={router.query.date}
                      title={router.query.title}
                      progress={router.query.rate}
                    />
                  </ol>

                  <div className="box-wrapper">
                    <div className="box">
                      <p className="head-text blue">話したこと</p>
                      {/* 話した回数分、pタグが生成される */}
                      <div className="text-area">
                        {parsed_details.map((rec) => {
                          return (<p className="text">
                            {rec.content}
                          </p>)
                        })}
                      </div>
                    </div>
                    <div className="box">
                      <p className="head-text blue">決めたこと</p>
                      <div className="text-area">
                        {parsed_decision.map((rec) => {
                          return (rec.id == router.query.id ? <p className="text">{rec.decision}</p> : null)
                        })}

                      </div>
                    </div>
                    <div className="box">
                      <p className="head-text blue">やること</p>
                      <div className="text-area">
                        <form action="">
                          <ol className="todo">
                            {/* todoの数だけliが生成される for name id も付与*/}

                            {parsed_to_do.map((rec) => {
                              return (<li>
                                <label htmlFor={`todo-${rec.id}`}>
                                  <input
                                    type="checkbox"
                                    name={`todo-${rec.id}`}
                                    id={`todo-${rec.id}`}
                                  />
                                  <span>{`やること${rec.id}`}</span>
                                </label>
                              </li>)
                            })}
                          </ol>
                          <div className="two-button-field row">
                            <a className="button white-button">シェアする</a>
                            <button className="blue-button">更新</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <HelpBox visible={helpBoxVisible}>
                ・やることをチェックすると達成率が上がります
              </HelpBox>
              <MenuList toggleHelpBox={toggleHelpBox} />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
