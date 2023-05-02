import React from "react";
import { YOUTUBE_VIDEO_API} from "./constants";
import { useState, useEffect } from "react";

function useVideoDetails() {
  const [videos, setVideos] = useState([]);
  const [page, setPage] = useState(1);

  const end = `&_page=${page}`;

  
  const handleInfiniteScroll = async () => {
    console.log("ScrollHeight" + document.documentElement.scrollHeight);
    console.log("InnerHeight" + window.innerHeight);
    console.log("ScrollTop" + document.documentElement.scrollTop);
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    // return () => removeEventListener("scroll", handleInfiniteScroll)
  }, []);

  useEffect(() => {
    getVideos();
  }, [page]);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API + end);
    const json = await data.json();
    // console.log(json);
    setVideos((prev)=> [...prev, ...json.items]);
  };

  return videos;
}

export default useVideoDetails;
