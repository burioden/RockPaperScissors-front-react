import Head from "next/head";
import Link from "next/link";
import { TutorContainer } from "../../compornents/TutorContainer";

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
        <div className="container bg-yellow">
          <main className="tutorial">
            <div className="contents-wrapper">
              <div className="bg-rect">
                <div className="inner">
                  <div className="logo">
                    <p className="text-pink">COMPLETE!!</p>
                  </div>
                  <div className="description">
                    <img src="/icon-clacker.png" alt="" />
                    <p>
                      早速、あなたの「大切なこと」について
                      <br />
                      深掘りしていきましょう
                    </p>
                    <Link className="button blue-button" href="/principles-write">
                      始める
                    </Link>

                    <Link className="button white-button" href="/menu">
                      あとでやる
                    </Link>
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
