import React from "react";
import { MenuList } from "./menuList";

export function ConversationStart(props) {
  const goToName = () => {
    router.push('/check-before-conversation'); // パートナーのニックネームを決めるページに移動
  };

  const goToMenu = () => {
    router.push('/menu'); // メニューページに移動
  };
  return (
    <div className={`container bg-${props.bgColor}`}>
      <main className="report">
        <div className="contents-wrapper">
          <div className="bg-circle-small">
            <p>いま、あなたと○○さんは<span className="blue">時間的・精神的</span>両方に余裕があるか、確認しましょう</p>
            <div class="two-button-field">
              <button className="blue-button" onClick={goToName}>始める</button>
              <button className="white-button" onClick={goToMenu}>後でやる</button>
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
  );
}
