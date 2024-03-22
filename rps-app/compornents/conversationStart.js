import React from "react";
import { useState } from "react";
import { MenuList } from "./menuList";
import { HelpBox } from "./helpBox";

export function ConversationStart(props) {
  const goToName = () => {
    router.push('/check-before-conversation'); // パートナーのニックネームを決めるページに移動
  };
  const goToMenu = () => {
    router.push('/menu'); // メニューページに移動
  };
  const [helpBoxVisible, setHelpBoxVisible] = useState(false);
  const toggleHelpBox = () => {
    setHelpBoxVisible((prevVisible) => !prevVisible);
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
          <HelpBox visible={helpBoxVisible}>
            あああ
          </HelpBox>
          <MenuList toggleHelpBox={toggleHelpBox} />
        </div>
      </main>
    </div>
  );
}
