import Image from "next/image";
import styles from "@/styles/Home.module.css";

export function LoginContainer(props) {
  return (
    <div className={`container bg-${props.bgColor}`}>
      <header className="index">
        <div className="circle white">
          <img src="/logo.png" alt="Peace time Piece" className="logo" />
        </div>
      </header>
      <main className="index">
        <div className="contents-wrapper">
          <div className="bg-circle">
            <div className="inner">{props.children}</div>
          </div>
        </div>
      </main>
    </div>
  );
}
