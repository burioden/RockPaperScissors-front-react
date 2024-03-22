import React from "react";

export function Genkidama(props) {
  return (
    <div className="genkidama">
      <div className="circle blue">{props.blue}</div>
      <div className="circle green">{props.green}</div>
      <div className="circle orange">{props.orange}</div>
      <div className="circle skyblue">{props.skyblue}</div>
      <div className="circle purple">{props.purple}</div>
      <div className="circle yellow">{props.yellow}</div>
      <div className="circle red">{props.red}</div>
      <div className="circle pink">{props.pink}</div>
      <div className="circle gray">{props.gray}</div>
      <div className="circle lightblue">{props.lightblue}</div>
    </div>
  );
}
