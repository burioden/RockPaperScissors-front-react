import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { MenuList } from "./menuList";
import { HelpBox } from "./helpBox";
import ConversationSecond from "./conversationSecond"; // conversationSecondコンポーネントのインポート

export function ConversationStart(props) {
  //   const goToConversationSecond = () => {
  //     props.setShowSecond(true);
  //   };
  const router = useRouter();

  const [helpBoxVisible, setHelpBoxVisible] = useState(false);
  const toggleHelpBox = () => {
    props.setHelpBoxVisible((prevVisible) => !prevVisible);
  };

  const json = `{
    "id": 1,
    "name": "あやりちゃん",
    "user_id": 1,
    "created_at": "2024-03-18T12:10:46.090Z",
    "updated_at": "2024-03-18T12:10:46.090Z"
  }`;
  const parsed = JSON.parse(json);

  return (
    <div className={`container bg-${props.bgColor}`}>
      <main className="conversation">
        <div className="contents-wrapper">
          <div className="bg-circle-small">
            <p className="head-text first-step">
              いま、あなたと{parsed.name}さんは
              <br />
              <span>時間的・精神的</span>
              <br />
              両方に余裕があるか、確認しましょう
            </p>
            <div className="two-button-field">
              {/* <button className="blue-button" onClick={goToConversationSecond}> */}
              <Link href="/conversation-time" className="button blue-button">
                始める
              </Link>
              {/* </button> */}
              {/* 後でやるボタンは、そのままルーターで遷移する */}
              <Link href="/menu" className="button white-button">
                後でやる
              </Link>
            </div>
          </div>
          <HelpBox visible={helpBoxVisible}>あああ</HelpBox>
          <MenuList toggleHelpBox={toggleHelpBox} />
        </div>
      </main>
    </div>
  );
}
