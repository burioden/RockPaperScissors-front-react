import React from "react";
import { useState } from "react";
import { MenuList } from "./menuList";
import { HelpBox } from "./helpBox";
import Link from "next/link";

export function PrinciplesDetailForm(props) {
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
                        <p className="text">思った理由<span className="text-pink">※</span></p>
                        <textarea  name="why" id="why" cols="30" rows="10" placeholder=""></textarea>

                        <p className="text">実現する方法<span className="text-pink">※</span></p>
                        <textarea  name="how" id="how" cols="30" rows="10" placeholder=""></textarea>

                        <p className="text">いつ</p>
                        <textarea  name="when" id="when" cols="30" rows="10" placeholder=""></textarea>

                        <p className="text">状況</p>
                        <textarea  name="situation" id="situation" cols="30" rows="10" placeholder=""></textarea>

                        <p className="text">場所</p>
                        <textarea  name="where" id="where" cols="30" rows="10" placeholder=""></textarea>

                        <p className="text">誰が</p>
                        <textarea  name="who" id="who" cols="30" rows="10" placeholder=""></textarea>

                        <p className="text">何を</p>
                        <textarea  name="what" id="what" cols="30" rows="10" placeholder=""></textarea>

                        <p className="text">その他</p>
                        <textarea  name="other" id="other" cols="30" rows="10" placeholder=""></textarea>
                    </div>

                    <div className="two-button-field row">
                        <Link href="#" className="blue-button button">
                            次へ
                        </Link>
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
