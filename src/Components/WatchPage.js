import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import VideoDetails from "./VideoDetails";
import useVideoDetails from "../Utils/useVideoDetails";
import VideoSuggestions from "./VideoSuggestions";
const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const videoDetails = useVideoDetails();
  const result = videoDetails.filter(video =>video.id==searchParams.get("v"));
  const data = result[0];
  // console.log(data);
  return (
    <div className="flex flex-col w-[700px] p-5 my-4 mx-14 ">
      <div className="flex px-2">
        <div>
          <iframe
            width="700"
            height="400"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
           <VideoDetails data={data}/>
           <CommentsContainer />
        </div>
        
        <div className="w-96">
          <LiveChat />
          <VideoSuggestions/>
        </div>
      </div>
     
      

    </div>
  );
};

export default WatchPage;
