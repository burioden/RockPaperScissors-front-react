import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

export function EnqueteContainer(props) {
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
      <main className="report">
        <div className="contents-wrapper">
          <div className="bg-rect">
            <div className="inner">
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
                          <input type="checkbox" name="todo-1" id="todo-1" />
                          <span>やること1</span>
                        </label>
                      </li>
                      <li>
                        <label htmlFor="todo-2">
                          <input type="checkbox" name="todo-2" id="todo-2" />
                          <span>やること2</span>
                        </label>
                      </li>
                    </ol>
                    <div className="two-button-field row">
                      <button className="white-button">シェアする</button>
                      <button className="blue-button">更新</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-rect-small help-box" id="help-box">
            <p>
              ここに説明文
              <br />
              <span>spanで囲うと青い文字</span>になる
            </p>
          </div>
          <nav className="menu-field">
            <div className="menu-button">
              <img src="icon-menu.png" alt="Menu" />
            </div>
            <div className="menu-button">
              <img src="icon-principle.png" alt="大切なものリスト" />
            </div>
            <div className="menu-button">
              <img src="icon-conversation.png" alt="けんか" />
            </div>
            <div className="menu-button">
              <img
                src="icon-report-peacebird.png"
                alt="仲直りレポート"
              />
            </div>
            <div className="menu-button" id="help">
              ？
            </div>
          </nav>
        </div>
      </main>
    </div>
  );
}
