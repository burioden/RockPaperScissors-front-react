// conversation コンポーネント
import React, { useState } from "react";
import { useRouter } from "next/router";
import { ConversationStart } from "../../compornents/conversationStart";
import { ConversationSecond } from "../../compornents/conversationSecond";

export default function Conversation() {
  const [showSecond, setShowSecond] = useState(false);

  return (
    <>
      <div className="wrapper">
        {showSecond ? (
          <ConversationSecond bgColor="blue"/>
        ) : (
          <ConversationStart bgColor="blue" setShowSecond={setShowSecond} />
        )}
      </div>
    </>
  );
}