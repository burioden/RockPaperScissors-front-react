import Head from "next/head";
import { MenuList } from "../../compornents/menuList";

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
      <div className="wrapper">
        <div className="container bg-yellow">
          <main className="report">
            <div className="contents-wrapper">
              <div className="bg-rect">
                <div className="inner">
                  <ol>
                    <li className="bg-rect-small white">
                      <div className="day-and-title">
                        <p className="day">2024.12.24 sun</p>
                        <p className="report-title">おやつの多さ</p>
                      </div>
                      <div className="progress">
                        <img src="../images/report-progress-25.png" alt="" />
                      </div>
                    </li>
                    <li className="bg-rect-small white">
                      <div className="day-and-title">
                        <p className="day">2024.12.24 sun</p>
                        <p className="report-title">おやつの多さ</p>
                      </div>
                      <div className="progress">
                        <img src="../images/report-progress-25.png" alt="" />
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
              <div className="bg-rect-small help-box" id="help-box">
                <p>
                  ここに説明文
                  <br />
                  <span>spanで囲うと青い文字</span>になる
                </p>
              </div>
              <MenuList />
            </div>
          </main>
        </div>
      </div>
    </>
  )
}