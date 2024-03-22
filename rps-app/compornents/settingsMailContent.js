import React from "react";
import Link from "next/link";
import { useState } from "react";
import { MenuList } from "./menuList";
import { HelpBox } from "./helpBox";

export function SettingsMailContent(props) {
  const contents = [
    { name: "大切なことレポート", link: "./report" },
    { name: "メール通知設定", link: "./settings-mail" },
    { name: "チュートリアル", link: "./tutorial" },
  ];
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
              <p className="head-text">メール通知設定</p>
              <form action="">
                <div className="input-field">
                  <div className="select-wrapper">
                    <label htmlFor="notion">やること通知</label>
                    <div className="select-box">
                      <select name="notion" id="notion">
                        <option value="on" selected="">
                          通知する
                        </option>
                        <option value="off">通知しない</option>
                      </select>
                    </div>
                  </div>
                  <div className="select-wrapper">
                    <label htmlFor="notion-time">通知時間帯</label>
                    <div className="select-box">
                      <select name="notion-time" id="notion-time">
                        <option value={0}>0時</option>
                        <option value={1}>1時</option>
                        <option value={2}>2時</option>
                        <option value={3}>3時</option>
                        <option value={4}>4時</option>
                        <option value={5}>5時</option>
                        <option value={6}>6時</option>
                        <option value={7}>7時</option>
                        <option value={8}>8時</option>
                        <option value={9} selected="">
                          9時
                        </option>
                        <option value={10}>10時</option>
                        <option value={11}>11時</option>
                        <option value={12}>12時</option>
                        <option value={13}>13時</option>
                        <option value={14}>14時</option>
                        <option value={15}>15時</option>
                        <option value={16}>16時</option>
                        <option value={17}>17時</option>
                        <option value={18}>18時</option>
                        <option value={19}>19時</option>
                        <option value={20}>20時</option>
                        <option value={21}>21時</option>
                        <option value={22}>22時</option>
                        <option value={23}>23時</option>
                      </select>
                    </div>
                  </div>
                </div>
                <button className="blue-button">設定</button>
              </form>
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
