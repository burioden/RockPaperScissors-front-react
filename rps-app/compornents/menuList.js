import React from "react";
import Link from "next/link";

export function MenuList(props) {
  return (
    <nav className="menu-field">
      <Link href="/menu">
        <div className="menu-button">
          <img src="icon-menu.png" alt="Menu" />
        </div>
      </Link>
      <Link href="/principles-list">
        <div className="menu-button">
          <img src="icon-principle.png" alt="大切なものリスト" />
        </div>
      </Link>
      <Link href="/conversation">
        <div className="menu-button">
          <img src="icon-conversation.png" alt="けんか" />
        </div>
      </Link>
      <Link href="/report">
        <div className="menu-button">
          <img src="icon-report-peacebird.png" alt="仲直りレポート" />
        </div>
      </Link>
      <div className="menu-button" id="help" onClick={props.toggleHelpBox}>
        ？
      </div>
    </nav>
  );
}
