import React from "react";
import { useState } from "react";
import { MenuList } from "./menuList";
import { HelpBox } from "./helpBox";
import Link from "next/link";

export function PrinciplesListDetailContent(props) {
  const [helpBoxVisible, setHelpBoxVisible] = useState(false);

  const toggleHelpBox = () => {
    setHelpBoxVisible((prevVisible) => !prevVisible);
  };

  return (
    <div className={`container bg-${props.bgColor}`}>
      <main className="principle detail">
        <div className="contents-wrapper">
          <div className="title">
            <div className="circle yellow">
              <p>
                自分ができることは他の人にもできて当たり前と思うのをやめてほしい
              </p>
            </div>
          </div>
          <div className="bg-rect">
            <div className="inner">
              <div>
                <div className="input-field">
                  <div className="box">
                    <p className="text">
                      思った理由
                    </p>
                    <p className="text text-small">
                      文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
                    </p>
                  </div>

                  <div className="box">
                    <p className="text">
                      実現する方法
                    </p>
                    <p className="text text-small">
                      文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
                    </p>
                  </div>

                  <div className="box">
                    <p className="text">いつ</p>
                    <p className="text text-small">
                      文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
                    </p>
                  </div>

                  <div className="box">
                    <p className="text">状況</p>
                    <p className="text text-small">
                      文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
                    </p>
                  </div>

                  <div className="box">
                    <p className="text">場所</p>
                    <p className="text text-small">
                      文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
                    </p>
                  </div>

                  <div className="box">
                    <p className="text">誰が</p>
                    <p className="text text-small">
                      文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
                    </p>
                  </div>

                  <div className="box">
                    <p className="text">何を</p>
                    <p className="text text-small">
                      文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
                    </p>
                  </div>

                  <div className="box">
                    <p className="text">その他</p>
                    <p className="text text-small">
                      文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
                    </p>
                  </div>
                </div>

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
