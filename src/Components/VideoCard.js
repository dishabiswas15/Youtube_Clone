import React from "react";

function VideoCard({ info }) {
  // console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-5 w-[305px] h-[350px] shadow-lg rounded-md">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails?.medium?.url} />
      <ul>
        <li className="font-bold">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics?.viewCount} views</li>
      </ul>
    </div>
  );
}

export default VideoCard;
