import React, { useState } from "react";
import { MenuList } from "./menuList";
import { HelpBox } from "./helpBox";

export function PrinciplesForm(props) {
  const [helpBoxVisible, setHelpBoxVisible] = useState(false);

  const toggleHelpBox = () => {
    setHelpBoxVisible((prevVisible) => !prevVisible);
  };

  return (
    <div className={`container bg-${props.bgColor}`}>
      <main className="principle">
        <div className="contents-wrapper">
          <div className="bg-circle-small">
            <div className="inner">
              <p className="head-text">相手のお名前は？</p>
              <div className="input-field">
                <input type="text" placeholder="ぶりちゃん" />
                <span className="san">さん</span>
              </div>
              <div className="attention"></div>
              <a className="button blue-button">決定</a>
            </div>
          </div>
          <HelpBox visible={helpBoxVisible}>
            ・最大10文字
            <br />
            ・普段の呼び名がおすすめです
          </HelpBox>
          <MenuList toggleHelpBox={toggleHelpBox} />
        </div>
      </main>
    </div>
  );
}
