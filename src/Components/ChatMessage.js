import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center'>
        <img
          alt="UserIcon"
          className="h-10 pt-2"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
        <span className='font-semibold px-2'>{name}</span>
        <span className='text-sm'>{message}</span>
    </div>
  )
}

export default ChatMessage