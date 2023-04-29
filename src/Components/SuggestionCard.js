import React from 'react'

function SuggestionCard({info}) {
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
    return (
      <div className="flex p-2 m-4 w-96 h-32 shadow-lg rounded-md">
        <img className="rounded-lg w-40 h-28" alt="thumbnail" src={thumbnails?.medium?.url} />
        <ul>
          <li className="font-bold text-sm pl-1">{title}</li>
          <li className='text-xs pl-1'>{channelTitle}</li>
          
        </ul>
      </div>
    );
}

export default SuggestionCard