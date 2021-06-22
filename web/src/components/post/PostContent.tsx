import React, { memo, useEffect, useState } from 'react'

interface Props {
  id: string | any;
}

function PostContent(props: Props) {
  const { id } = props

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    const getData = async () => {
      setTitle(await fetch("http://metaphorpsum.com/sentences/1").then(reponse => reponse.text()))
      setContent(await fetch("http://metaphorpsum.com/paragraphs/8?p=true").then(reponse => reponse.text()))
    }
    getData()
  }, [])

  return (
    <div className = 'w-full px-12 md:px-28 text-justify py-12 dark:text-gray-400'>
      <p className = 'font-bold text-2xl text-center mb-12'>{title}</p>
      <p dangerouslySetInnerHTML = {{__html: content}} />
      <p className = 'w-full text-right text-sm text-gray-400 mt-8'>By Ndeva, {new Date().toDateString()}</p>
    </div>
  )
}

export default memo(PostContent)
