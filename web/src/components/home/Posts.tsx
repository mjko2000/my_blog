import React, { memo, useEffect, useState } from 'react'
import Post from './PostItem';
import { getListPostAPI } from '../../fetcher/postsAPI/getListPost';

type DataType = {
  title: string;
  content: string;
  thumbnailUrl: string;
}

type PropsType = {
  listPost: [DataType]
}

const Posts = ({listPost}: PropsType) => {

  // const [listPost, setListPost] = useState<[]>([])

  // useEffect(() => {
  //   getListPostAPI().then(({data, error}) => {
  //     if(!error) setListPost(data)
  //   })
  // },[])

  return(
    <div className = 'grid md:grid-cols-3 grid-cols-1 gap-10 justify-items-center py-10 md:px-16 px-4'>
      {listPost?.map((post: any, index: any) => <Post {...post} key = {index.toString()} />)}
    </div>
  )
}

export default memo(Posts)