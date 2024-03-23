import Head from "next/head";
import { useState } from "react";
import { Genkidama } from "./genkidama";

export function PrinciplesBox(props) {
  return (
    <li className="bg-rect-small xs white flex">
      <div class={`circle small ${props.color}`}></div>
      <p>{props.principle}</p>
    </li>
  );
}
