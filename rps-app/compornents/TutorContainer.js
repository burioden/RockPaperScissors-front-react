import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

export function TutorContainer(props) {
  const contents = [
    {
      title: "How To Use",
      imageSrc: "/icon-report-peacebird.png",
      text: "このアプリは、あなたとお相手の\n「大切なもの」を意識しながら\nけんかの仕方を変えていくアプリです\n\n大切なことリスト\nけんかサポート\n仲直りレポート\n\n3つの機能で、2人のより良い関係づくりをお手伝いします",
    },
    {
      title: "point",
      imageSrc: "/icon-conversation.png",
      text: "・落ち着く場所で、落ち着いた心で、アプリを使うことをおすすめします\n\n・オンライン、オフライン、両方のけんかに対応しています\n\n・「関係を改善するために、けんかする」ということを、常に意識してみましょう",
    },
    {
      title: "rule",
      imageSrc: "/icon-balance.png",
      text: "・けんかの前には、お互い「今、時間と精神的に余裕があるか」の確認をしましょう\n\n・けんか中は、お互いの意見を尊重しましょう\n\n・終わったあとは、感謝と愛を伝えましょう",
    },
    {
      title: "notice",
      imageSrc: "/icon-bell.png",
      text: "通知を設定すると\n仲直り率が 50% アップします\n\nチュートリアルと、大切なこと登録後、設定画面から、通知設定をしましょう",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextContent = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className={`container bg-${props.bgColor}`}>
      <main className="tutorial">
        <div className="contents-wrapper">
          <div className="bg-rect">
            <div className="inner">
              <div className="logo">
                <p>{contents[currentIndex].title}</p>
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
                <button className="blue-button" onClick={goToNextContent}>次へ</button>
                <div className="page-nation">
                  {contents.map((content, index) => (
                    <span key={index} className={index === currentIndex ? "current" : ""}>●</span>
                  ))}
                </div>
                <a href="">skip</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
