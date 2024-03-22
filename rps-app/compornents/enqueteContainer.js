import React from "react";
import { MenuList } from "./menuList";
import { HelpBox } from "./helpBox";

export function EnqueteContainer(props) {
  const examples = [{ gender: "男性", age: "20代", principle: "お互いに干渉しすぎない" }, { gender: "女性", age: "20代", principle: "好意を定期的に伝える" }, { gender: "ノンバイナリー", age: "30代", principle: "感じたことを言語化して伝える" }, { gender: "男性", age: "20代", principle: "あいさつをする" }, { gender: "女性", age: "30代", principle: "自分の時間を大切にする" }, { gender: "男性", age: "20代", principle: "自分の言葉に責任を持つ" }];
  const [helpBoxVisible, setHelpBoxVisible] = useState(false);
  const toggleHelpBox = () => {
    setHelpBoxVisible((prevVisible) => !prevVisible);
  };
  return (
    <div className={`container bg-${props.bgColor}`}>
      <main className="report">
        <div className="contents-wrapper">
          <div className="bg-rect">
            <div className="inner">
              <div className="box">
                <p>みんなが大切にしている価値観の例</p>
                <ol>
                  {examples.map((example) => {
                    return (
                      <li>
                        <div class="bg-rect-small white box">
                          <p>{example.age}{example.gender}</p>
                          <p>{example.principle}</p>
                        </div>
                      </li>
                    )
                  })
                  }
                </ol>

              </div>
              <div className="box">
                <div className="text-area">
                  <button className="white-button">もどる</button>
                </div>
              </div>
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
