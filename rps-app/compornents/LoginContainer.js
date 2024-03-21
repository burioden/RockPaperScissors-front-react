import Image from "next/image";
import styles from "@/styles/Home.module.css";

export function LoginContainer(props) {

  return (
    <div className={`container bg-${props.bgColor}`}>
      <header class="index">
        <div class="circle white">
          <img src="/logo.png" alt="Peace time Piece" class="logo" />
        </div>
      </header>

      <main class="index">
        <div class="contents-wrapper">
          <div class="bg-circle">
            <div class="inner">
                {props.children}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
