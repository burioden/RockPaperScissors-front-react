// conversation コンポーネント
import React, { useState } from "react";
import { useRouter } from "next/router";
import { ConversationStart } from "../../compornents/conversationStart";
import { ConversationSecond } from "../../compornents/conversationSecond";

export default function Conversation() {

  return (
    <>
      <div className="wrapper">
          <ConversationSecond bgColor="blue"/>
      </div>
    </>
  );
}