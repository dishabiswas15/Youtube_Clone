import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../Utils/chatSlice";
import store from "../Utils/store";
import { generateRandomName, makeRandomMessage } from "../Utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const [liveMessage, setLiveMessage] = useState("")

  const chatMessage = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const timer = setInterval(() => {
      //API Polling

      dispatch(
        addMessages({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 2000);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
    <div className="h-[360px] ml-8 p-2 w-full border border-black bg-slate-100 rounded-t-lg overflow-y-scroll flex flex-col-reverse">
      {chatMessage.map((chat, index) => (
        <ChatMessage key={index} name={chat.name} message={chat.message} />
      ))}
    </div>
    <form className="w-full p-2 ml-8 border border-black rounded-b-lg"
    onSubmit={(e)=>{
      e.preventDefault();
      dispatch(
        addMessages({
          name: "Disha Biswas",
          message: liveMessage
        })
      )
      setLiveMessage("")
    }}>
       <input className="px-2 w-72"
       type="text" value={liveMessage} placeholder="message" onChange={(e)=> {
        setLiveMessage(e.target.value);
       }}/>
       <button className="px-2 mx-2 bg-gray-100">Send</button>
    </form>
    </>
  );
};

export default LiveChat;
