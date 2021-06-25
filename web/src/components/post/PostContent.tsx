import React, { memo, useEffect, useState } from 'react'
import { PostDetailProps } from '../../../pages/post/[id]'

interface Props extends PostDetailProps {
}

function PostContent(props: Props) {
  useEffect(() => {
    const contentDiv = document.getElementById('post-content')
    if(contentDiv) contentDiv.innerHTML = props.content
  },[props.content])
  return (
    <div className = 'w-full md:px-20 px-2 text-justify py-12 dark:text-gray-400'>
      <p className = 'font-bold text-2xl text-center mb-12'>{props.title}</p>
      <p id = 'post-content' />
      <p className = 'w-full text-right text-sm text-gray-400 mt-8'>By Ndeva, {new Date().toDateString()}</p>
    </div>
  )
}

export default memo(PostContent)
