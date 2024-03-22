import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { MenuList } from "../../compornents/menuList";
import { HelpBox } from "../../compornents/helpBox";
import { ReportBox } from "../../compornents/reportBox";

export default function Home() {
  const [helpBoxVisible, setHelpBoxVisible] = useState(false);

  const toggleHelpBox = () => {
    setHelpBoxVisible((prevVisible) => !prevVisible);
  };

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
                      {/* ここにリンクを設定 ページ動的に作るの・・・？*/}
                      <ReportBox
                        date="2024.02.02"
                        title="おやつ多すぎるよ"
                        progress={rate}
                      />
                  </ol>

                  <div className="box-wrapper">
                    <div className="box">
                      <p className="head-text blue">話したこと</p>
                      {/* 話した回数分、pタグが生成される */}
                      <div className="text-area">
                        <p className="text">
                          文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
                        </p>
                        <p className="text">
                          文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
                        </p>
                        <p className="text">
                          文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
                        </p>
                      </div>
                    </div>
                    <div className="box">
                      <p className="head-text blue">決めたこと</p>
                      <div className="text-area">
                        <p className="text">
                          文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
                        </p>
                      </div>
                    </div>
                    <div className="box">
                      <p className="head-text blue">やること</p>
                      <div className="text-area">
                        <form action="">
                          <ol className="todo">
                            {/* todoの数だけliが生成される for name id も付与*/}
                            <li>
                              <label htmlFor="todo-1">
                                <input
                                  type="checkbox"
                                  name="todo-1"
                                  id="todo-1"
                                />
                                <span>やること1</span>
                              </label>
                            </li>
                            <li>
                              <label htmlFor="todo-2">
                                <input
                                  type="checkbox"
                                  name="todo-2"
                                  id="todo-2"
                                />
                                <span>やること2</span>
                              </label>
                            </li>
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
