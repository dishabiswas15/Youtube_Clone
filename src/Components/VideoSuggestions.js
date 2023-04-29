import React from "react";
import useVideoDetails from "../Utils/useVideoDetails";
import { Link } from "react-router-dom";
import SuggestionCard from "./SuggestionCard";

function VideoSuggestions() {
  const videos = useVideoDetails();
  return (
    <div>
      {" "}
      {videos.map((videosuggest) => (
        <Link to={"/watch?v=" + videosuggest.id}>
        <SuggestionCard info={videosuggest}/>
        </Link>
      ))}
    </div>
  );
}

export default VideoSuggestions;
