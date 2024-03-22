import React, { useState } from "react";
import { MenuList } from "./menuList";
import { HelpBox } from "./helpBox";
import { Genkidama } from "./genkidama";

export function PrinciplesForm(props) {
  const [helpBoxVisible, setHelpBoxVisible] = useState(false);

  const toggleHelpBox = () => {
    setHelpBoxVisible((prevVisible) => !prevVisible);
  };

//   あゆなさんへ
// propsに渡す値が10文字超えたらそれ以降は省略して...を表示する関数が欲しいです
// 現在はopacity: 0で透明にしています。決定ボタンが押されて配列などにプッシュ、not nullになったら、opacity: 1に変更する処理があると表示されてhappyです

  return (
    <div className={`container bg-${props.bgColor}`}>
      <main className="principle">
        <div className="contents-wrapper">
          <Genkidama blue="み" green="" orange="" skyblue="" purple="" yellow="" red="" pink="" gray="" lightblue=""/>
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
