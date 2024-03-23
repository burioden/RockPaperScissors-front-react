import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { MenuList } from "./menuList";
import { HelpBox } from "./helpBox";

export function ConversationSecond(props) {
  const router = useRouter();
  const goToName = () => {
    router.push("/check-before-conversation"); // パートナーのニックネームを決めるページに移動
  };
  const goToMenu = () => {
    router.push("/menu"); // メニューページに移動
  };
  const [helpBoxVisible, setHelpBoxVisible] = useState(false);
  const toggleHelpBox = () => {
    setHelpBoxVisible((prevVisible) => !prevVisible);
  };
  return (
    <div className={`container bg-${props.bgColor}`}>
      <main className="conversation">
        <div className="contents-wrapper">
            <div className="principle-box">
                <div className="circle yellow">内容</div>
                <div className="circle green">内容</div>
                <div className="circle red">内容</div>
            </div>
          <div className="bg-circle-small">
            <p className="head-text first-step">
              けんかの前に
              <br />
              <Link href="/principle-list">大切にしたいこと</Link>
              <br />
              を、ふたりでチェックしましょう
            </p>
            <div class="two-button-field">
              <button className="blue-button" onClick={goToName}>
                始める
              </button>
              <button className="white-button" onClick={goToMenu}>
                後でやる
              </button>
            </div>
          </div>
          <HelpBox visible={helpBoxVisible}>あああ</HelpBox>
          <MenuList toggleHelpBox={toggleHelpBox} />
        </div>
      </main>
    </div>
  );
}
