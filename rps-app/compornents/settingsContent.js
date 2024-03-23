import React from "react";

import { useState } from "react";
import { MenuList } from "./menuList";
import { HelpBox } from "./helpBox";
import Link from "next/link";

export function SettingsContent(props) {

  const contents = [{name:"大切なことレポート", link:"./report"}, {name:"メール通知設定", link: "./settings-mail"}, {name:"チュートリアル", link: "./tutorial"}];
  const [helpBoxVisible, setHelpBoxVisible] = useState(false);

  const toggleHelpBox = () => {
    setHelpBoxVisible((prevVisible) => !prevVisible);
  };

  return (
    <div className={`container bg-${props.bgColor}`}>
      <main className="setting">
        <div className="contents-wrapper">
          <div className="bg-rect">
            <div className="inner">
              <div className="box">
                {contents.map((content) => {
                  return (
                    <Link href={content.link}>
                      <div class="bg-rect-small white list">
                        <p>{content.name}</p>
                      </div>
                    </Link>
                  )
                })
                }
              </div>
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
