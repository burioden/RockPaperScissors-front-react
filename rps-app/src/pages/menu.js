import Head from "next/head";
import Link from "next/link";

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
        <div className="container bg-blue">
          <main className="menu">
            <div className="contents-wrapper">
              <div className="bg-circle">
                <div className="inner">
                  <div className="logo">
                    <img
                      src="/logo.png"
                      alt="Peace time Piece"
                      className="logo"
                    />
                  </div>
                  <div className="title-button">
                    <div className="title-button-top">
                      <Link href="/conversation">
                        <div className="circle blue">
                          <img src="/icon-conversation.png" alt="" />
                          <p>けんかする</p>
                        </div>
                      </Link>
                    </div>
                    <div className="title-button-bottom">
                      <Link href="/settings">
                        <div className="circle blue">
                          <img src="/icon-setting.png" alt="" />
                          <p>設定</p>
                        </div>
                      </Link>
                      <Link href="/principles-list">
                        <div className="circle blue">
                          <img src="/icon-principle.png" alt="" />
                          <p>大切なこと</p>
                        </div>
                      </Link>
                      <Link href="/report">
                        <div className="circle blue">
                          <img
                            src="/icon-report-peacebird.png"
                            alt=""
                          />
                          <p>
                            仲直り
                            <br />
                            レポート
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
