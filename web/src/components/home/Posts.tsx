import React, { memo, useEffect, useState } from 'react'
import {ButtonBase, Grid, Box} from '@material-ui/core';
import Post from './PostItem';
import { getListPostAPI } from '../../fetcher/postsAPI/getListPost';

type PostsProps = {

}

const Posts = (props: PostsProps) => {

  const [listPost, setListPost] = useState<[]>([])

  useEffect(() => {
    getListPostAPI().then(({data, error}) => {
      if(!error) setListPost(data)
    })
  },[])

  return(
    <div className = 'grid md:grid-cols-3 grid-cols-1 gap-10 justify-items-center py-10 md:px-16 px-4'>
      {listPost.map((post, index) => <Post {...post} key = {index.toString()} />)}
    </div>
  )
}

export default memo(Posts)