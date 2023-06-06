import React from "react";

function Button({ info }) {
  return (
    <button className="px-5 py-2 m-2 bg-gray-200 rounded-lg">
      {info.name}
    </button>
  );
}

export default Button;
