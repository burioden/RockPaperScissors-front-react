import React from "react";
import { MenuList } from "./menuList";
import Link from "next/link";

export function SettingsContent(props) {
  const contents = [{name:"大切なことレポート", link:"./report"}, {name:"メール通知設定", link: "./mail-settings"}, {name:"チュートリアル", link: "./tutorial"}];

  return (
    <div className={`container bg-${props.bgColor}`}>
      <main className="report">
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
