import React from 'react'
import { YOUTUBE_VIDEO_API } from './constants';
import { useState, useEffect } from 'react';

function useVideoDetails() {
    const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    // console.log(json);
    setVideos(json.items);
  };
  return videos;
}

export default useVideoDetails