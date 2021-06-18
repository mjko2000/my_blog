import React, { memo } from 'react'
import {ButtonBase, Grid, Box} from '@material-ui/core';
import Post from './PostItem';

type PostsProps = {

}

const postData = [
  {
    title: 'Digital Marketing in America’s Oldest State, Digital Marketing in America’s Oldest State',
    thumbnailUrl: "https://switchboardta.org/wp-content/uploads/2020/09/Blog-post-2-image.jpg",
    content: "If there's anything that I can do to improve this online fancy generator thing (e.g. by adding other font styles that you've found), then please let me know in the suggestions box! If you've found new copyable fonts that aren't in this generator, please share them below as well. Thanks!If there's anything that I can do to improve this online fancy generator thing (e.g. by adding other font styles that you've found), then please let me know in the suggestions box! If you've found new copyable fonts that aren't in this generator, please share them below as well. Thanks!"
  },
  {
    title: 'Digital Marketing in America’s Oldest State, Digital Marketing in America’s Oldest State',
    thumbnailUrl: "https://switchboardta.org/wp-content/uploads/2020/09/Blog-post-2-image.jpg",
    content: "If there's anything that I can do to improve this online fancy generator thing (e.g. by adding other font styles that you've found), then please let me know in the suggestions box! If you've found new copyable fonts that aren't in this generator, please share them below as well. Thanks!If there's anything that I can do to improve this online fancy generator thing (e.g. by adding other font styles that you've found), then please let me know in the suggestions box! If you've found new copyable fonts that aren't in this generator, please share them below as well. Thanks!"
  },
  {
    title: 'Digital Marketing in America’s Oldest State, Digital Marketing in America’s Oldest State',
    thumbnailUrl: "https://switchboardta.org/wp-content/uploads/2020/09/Blog-post-2-image.jpg",
    content: "If there's anything that I can do to improve this online fancy generator thing (e.g. by adding other font styles that you've found), then please let me know in the suggestions box! If you've found new copyable fonts that aren't in this generator, please share them below as well. Thanks!If there's anything that I can do to improve this online fancy generator thing (e.g. by adding other font styles that you've found), then please let me know in the suggestions box! If you've found new copyable fonts that aren't in this generator, please share them below as well. Thanks!"
  }
]

const Posts = (props: PostsProps) => {

  return(
    <div className = 'grid md:grid-cols-3 grid-cols-1 gap-10 justify-items-center py-10 md:px-16 px-4'>
      {postData.map((post, index) => <Post {...post} key = {index.toString()} />)}
    </div>
  )
}

export default memo(Posts)