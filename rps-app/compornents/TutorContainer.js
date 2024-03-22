import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import { useRouter } from 'next/router';

export function TutorContainer(props) {
  const router = useRouter();

  const contents = [
    {
      title: "How To Use",
      imageSrc: "/icon-report-peacebird.png",
      text: "このアプリは、あなたとお相手の\n「大切なもの」を意識しながら\nけんかの仕方を変えていくアプリです\n\n大切なことリスト\nけんかサポート\n仲直りレポート\n\n3つの機能で、2人のより良い関係づくりをお手伝いします",
      color: "blue",
      titlecolor: "text-blue"
    },
    {
      title: "point",
      imageSrc: "/icon-conversation.png",
      text: "・落ち着く場所で、落ち着いた心で、アプリを使うことをおすすめします\n\n・オンライン、オフライン、両方のけんかに対応しています\n\n・「関係を改善するために、けんかする」ということを、常に意識してみましょう",
      color: "blue",
      titlecolor: "text-blue"
    },
    {
      title: "rule",
      imageSrc: "/icon-balance.png",
      text: "・けんかの前には、お互い「今、時間と精神的に余裕があるか」の確認をしましょう\n\n・けんか中は、お互いの意見を尊重しましょう\n\n・終わったあとは、感謝と愛を伝えましょう",
      color: "blue",
      titlecolor: "text-blue"
    },
    {
      title: "notice",
      imageSrc: "/icon-bell.png",
      text: "通知を設定すると\n仲直り率が 50% アップします\n\nチュートリアルと、大切なこと登録後、設定画面から、通知設定をしましょう",
      color: "blue",
      titlecolor: "text-blue"
    },
    {
      title: "complete!!",
      imageSrc: "/icon-clacker.png",
      text: "早速、あなたの「大切なこと」について深堀りしていきましょう",
      color: "yellow",
      titlecolor: "text-pink"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextContent = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const goToName = () => {
      router.push('/decide-partner-name'); // パートナーのニックネームを決めるページに移動
  };

  const goToMenu = () => {
    router.push('/menu'); // メニューページに移動
};

  return (
    <div className={`container bg-${contents[currentIndex].color}`}>
      <main className="tutorial">
        <div className="contents-wrapper">
          <div className="bg-rect">
            <div className="inner">
              <div className="logo">
                <p class={contents[currentIndex].titlecolor}>{contents[currentIndex].title}</p>
              </div>
              <div className="description">
                <img src={contents[currentIndex].imageSrc} alt="" />
                <p>
                  {contents[currentIndex].text.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>

                {currentIndex === 4 ?
                  <div class="two-button-field">
                    <button className="blue-button" onClick={goToName}>始める</button>
                    <button className="white-button" onClick={goToMenu}>後でやる</button>
                  </div> :
                  <div>
                    <button className="blue-button" onClick={goToNextContent}>次へ</button>
                    <div className="page-nation">
                      {contents.map((content, index) => (
                        index === 4 ? null :
                          <span key={index} className={index === currentIndex ? "current" : ""}>●</span>
                      ))}
                    </div>
                    <a href="#" onClick={() => setCurrentIndex(4)}>skip</a>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
