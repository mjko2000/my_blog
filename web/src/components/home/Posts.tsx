import React, { createRef, memo, useEffect, useState } from 'react'
import { PostType } from '../../../pages';
import Post from './PostItem';
import Skeleton from 'react-loading-skeleton';
import {KeyboardArrowRight} from '@material-ui/icons'
import {IconButton} from '@material-ui/core'

interface PropsType {
  listPost: PostType[]
}
// 'grid md:grid-cols-3 grid-cols-1 gap-10 justify-items-center py-10 md:px-16 px-4'
const Posts = ({listPost}: PropsType) => {

  return(
    <div 
      className = 'flex w-full overflow-scroll mt-2'
    >
      {!listPost && [0,1,2,3,4,5].map(item => <PostSkeleton key = {item.toString()} />)}
      <div className = 'flex'>
        {listPost?.map((post: any, index: any) => <Post {...post} key = {post.id?.toString()} className = 'md:ml-12 ml-2' />)}
        <div className = 'h-full md:w-12 w-2' />
      </div>
    </div>
  )
}

const PostSkeleton = () => {

  return(
    <div
        className='md:w-full rounded-lg shadow-md bg-white cursor-pointer mr-12'
        style={{ height: '500px', minWidth: 400 }}
      >
        <div className='w-full h-1/2'
        >
          <Skeleton height = '100%'/>
        </div>
        <div className='p-4 h-2/6'>
          <p className={' text-lg font-bold'}>
            <Skeleton />
            <Skeleton width = '70%' />
          </p>
          <p className='text-sm text-gray-600 overflow-ellipsis'>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </p>
        </div>
        <div className='text-sm text-gray-400 p-4 h-1/6 border-t-2'>
          <p><Skeleton width = '30%' /></p>
          <p><Skeleton width = '50%'/></p>
        </div>
      </div>
  )
}

export default memo(Posts)