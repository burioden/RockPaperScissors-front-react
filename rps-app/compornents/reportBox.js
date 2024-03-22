import Head from "next/head";
import { useState } from "react";

export function ReportBox(props) {
  const { date, title, progress } = props;

  // 達成率に応じて表示する画像を切り替える関数
  const getProgressImage = (rate) => {
    if (rate > 99) {
      return "/report-progress-100.png"; // 達成率が100%の場合の画像パス
    } else if (rate >= 75) {
      return "/report-progress-75.png"; // 達成率が75%以上の場合の画像パス
    } else if (rate >= 50) {
      return "/report-progress-50.png"; // 達成率が50%の場合の画像パス
    } else {
      return "/report-progress-25.png"; // 達成率が25%の場合の画像パス
    }
  };

  return (
    <li className="bg-rect-small white">
      <div className="day-and-title">
        <p className="day">{date}</p>
        <p className="report-title">{title}</p>
      </div>
      <div className="progress">
        <img src={getProgressImage(progress)} alt="達成率によって画像を切り替え" />
      </div>
    </li>
  );
}
