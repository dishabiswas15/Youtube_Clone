import React, { useEffect, useState } from "react";
import useVideoDetails from "../Utils/useVideoDetails";
function VideoDetails({ data }) {
  console.log(data);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isJoined, setIsJoined] = useState(false);
  const [isShared, setIsShared] = useState(false);
  const [activeBtn, setActiveBtn] = useState("none");
  const [likeCount, setLikeCount] = useState();

  useEffect(() => {
    // console.log("data"+data?.statistics?.likeCount);
    setLikeCount(data?.statistics?.likeCount);
    console.log(likeCount);
    
  }, [data?.statistics?.likeCount]);
  

  const handleLikeClick = () => {
    if (activeBtn === "none") {
      setLikeCount(Number(likeCount)+1);
      setActiveBtn("like");
      return;
    }

    if (activeBtn === "like") {
      setLikeCount(likeCount - 1);
      setActiveBtn("none");
      return;
    }

    if (activeBtn === "dislike") {
      setLikeCount(Number(likeCount)+1);
      setActiveBtn("like");
    }
  };

  const handleDisikeClick = () => {
    if (activeBtn === "none") {
      setActiveBtn("dislike");
      return;
    }

    if (activeBtn === "dislike") {
      setActiveBtn("none");
      return;
    }

    if (activeBtn === "like") {
      setLikeCount(likeCount - 1);
      setActiveBtn("dislike");
    }
  };

  return (
    <div>
      <ul>
        <li className="font-bold text-lg py-2">{data?.snippet?.title}</li>
        <div className="flex py-2">
          <li className="font-bold">{data?.snippet?.channelTitle}</li>
          {isJoined ? (
            <button
              className="ml-8 bg-black text-white rounded-lg w-16 h-8"
              onClick={() => setIsJoined(false)}
            >
              Joined
            </button>
          ) : (
            <button
              className="ml-8 bg-slate-200 rounded-lg w-16 h-8"
              onClick={() => setIsJoined(true)}
            >
              Join
            </button>
          )}

          {isSubscribed ? (
            <button
              className="ml-4 bg-black text-white font-bold rounded-lg w-28"
              onClick={() => setIsSubscribed(false)}
            >
              Subscribed
            </button>
          ) : (
            <button
              className="ml-4 bg-slate-600 border border-gray-400 text-white font-bold rounded-lg w-28"
              onClick={() => setIsSubscribed(true)}
            >
              Subscribe
            </button>
          )}
        </div>
      </ul>
      <div className="flex">
        <button
          className="flex my-6 bg-slate-200 py-2 px-4 rounded-l-lg w-32 h-10 "
          onClick={handleLikeClick}
        >
          {activeBtn == "like" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 pr-1 scale-150 duration-300 text-red-500"
            >
              <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                rokelinecap="round"
                strokeinejoin="round"
                d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
              />
            </svg>
          )}
          {likeCount}
        </button>
        
        <button
          className="my-6 bg-slate-200 border-l-0 border-gray-400 rounded-r-lg w-10 h-10 "
          onClick={handleDisikeClick}
        >
          {activeBtn == "dislike" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 scale-150 duration-300"
            >
              <path d="M15.73 5.25h1.035A7.465 7.465 0 0118 9.375a7.465 7.465 0 01-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 01-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.498 4.498 0 00-.322 1.672V21a.75.75 0 01-.75.75 2.25 2.25 0 01-2.25-2.25c0-1.152.26-2.243.723-3.218C7.74 15.724 7.366 15 6.748 15H3.622c-1.026 0-1.945-.694-2.054-1.715A12.134 12.134 0 011.5 12c0-2.848.992-5.464 2.649-7.521.388-.482.987-.729 1.605-.729H9.77a4.5 4.5 0 011.423.23l3.114 1.04a4.5 4.5 0 001.423.23zM21.669 13.773c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.959 8.959 0 01-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
              />
            </svg>
          )}
        </button>

        {isShared ? (
          <button
            className="bg-black text-white m-6 h-10 w-24 rounded-lg"
            onClick={() => setIsShared(false)}
          >
            Shared
          </button>
        ) : (
          <button
            className=" bg-slate-200 m-6 h-10 w-24 rounded-lg"
            onClick={() => setIsShared(true)}
          >
            Share
          </button>
        )}
      </div>
      <hr className=" mt-5 shadow-lg"></hr>
    </div>
  );
}
export default VideoDetails;
