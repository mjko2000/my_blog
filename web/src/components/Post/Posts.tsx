import React, { memo } from 'react'
import {ButtonBase, Grid, Box} from '@material-ui/core';
import Post from './Post';

type PostsProps = {

}

const Posts = (props: PostsProps) => {

  return(
    <div className = 'grid md:grid-cols-3 grid-cols-1 gap-10 justify-items-center py-10 md:px-16 px-4'>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default memo(Posts)