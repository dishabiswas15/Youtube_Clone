import React from "react";
import { useSelector } from "react-redux";
import store from "../Utils/store";
import { Link } from "react-router-dom";

function Sidebar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  
    return (
      <div className="px-6 m-1 mt-4 ">
        <ul>
        <svg
              className="h-10 pl-6"
                viewBox="0 0 24 24"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <g class="style-scope yt-icon">
                  <path
                    d="M12,4.33l7,6.12V20H15V14H9v6H5V10.45l7-6.12M12,3,4,10V21h6V15h4v6h6V10L12,3Z"
                    
                  ></path>
                </g>
              </svg>
          <li className="font-bold pb-6 pl-5">
            <Link to={"/"}>
              
              Home
            </Link>
          </li>
          <svg
            className="h-10 pl-6"
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
            >
              <g
                height="24"
                viewBox="0 0 24 24"
                width="24"
                
              >
                <path
                  d="M17.77 10.32c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zM10 14.65v-5.3L15 12l-5 2.65z"
                  
                ></path>
              </g>
            </svg>
          <li className="font-bold pb-6 pl-5">
            
            Shorts
          </li>
          <svg
            className="h-10 pl-6"
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
            >
              <g class="style-scope yt-icon">
                <path
                  d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z"
                  class="style-scope yt-icon"
                ></path>
              </g>
            </svg>
          <li className="font-bold pb-6">
            
            Subscriptions
          </li>
          <svg
            className="h-10 pl-6"
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              
            >
              <g class="style-scope yt-icon">
                <path
                  d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"
                  class="style-scope yt-icon"
                ></path>
              </g>
            </svg>
          <li className="font-bold pb-6 pl-5">
            
            Library
          </li>
        </ul>
      </div>
    );
  
}

export default Sidebar;
