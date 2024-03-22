import Head from "next/head";
import Link from "next/link";
import { useState } from "react";


{/*
使い方
      <Dialog text="無限の彼方まで無限の彼方まで無限の彼方まで無限の彼方まで無限の彼方まで無限の彼方まで無限の彼方まで無限の彼方まで無限の彼方まで無限の彼方まで無限の彼方まで無限の彼方まで" leftButtonText="閉じる" leftButtonLink="" rightButtonText="ひらく" rightButtonLink="" />

*/}

export function Dialog(props) {

  return (

    <div className="dialog">
        <div className="bg-rect-small white">
            <p className="dialog-txt">
            {props.text}
            </p>

            <div className="two-button-field row">
                {/* リンク先を、受け取ったleftButtonLinkに。右も同様 */}
                <a className="button white-button-grass">
                    {props.leftButtonText}
                </a>
                <a className="button blue-button">
                    {props.rightButtonText}
                </a>
            </div>
        </div>
    </div>

  );
}
