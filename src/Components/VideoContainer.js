import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../Utils/constants";
import VideoCard from "./VideoCard";
import { Link, json } from "react-router-dom";
import useVideoDetails from "../Utils/useVideoDetails";

function VideoContainer() {
  // const [videos, setVideos] = useState([]);
  // useEffect(() => {
  //   getVideos();
  // }, []);
  // const getVideos = async () => {
  //   const data = await fetch(YOUTUBE_VIDEO_API);
  //   const json = await data.json();
  //   //console.log(json);
  //   setVideos(json.items);
  // };

  const videos = useVideoDetails();
  // console.log(videos);
  return (
    <div>
      <div className="flex flex-wrap">
        {videos.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default VideoContainer;
