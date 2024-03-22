import React from "react";

export function PrinciplesForm(props) {
  return (
    <div className={`container bg-${props.bgColor}`}>
      <main className="report">
        <div className="contents-wrapper">
          <div className="bg-rect">
            <div className="inner">
              <div className="box">
                <p>{props.principle}について</p>
              </div>
              <div className="box">
                <div className="text-area">
                  <button className="white-button">つぎへ</button>
                </div>
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
          <nav className="menu-field">
            <div className="menu-button">
              <img src="icon-menu.png" alt="Menu" />
            </div>
            <div className="menu-button">
              <img src="icon-principle.png" alt="大切なものリスト" />
            </div>
            <div className="menu-button">
              <img src="icon-conversation.png" alt="けんか" />
            </div>
            <div className="menu-button">
              <img
                src="icon-report-peacebird.png"
                alt="仲直りレポート"
              />
            </div>
            <div className="menu-button" id="help">
              ？
            </div>
          </nav>
        </div>
      </main>
    </div>
  );
}
