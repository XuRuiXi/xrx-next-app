import React from "react";

const AsyncName = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(<div>徐瑞熙</div>)
    }, 2000)
  }
  )
}

export default AsyncName;