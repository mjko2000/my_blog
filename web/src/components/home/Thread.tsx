import Link from 'next/link'
import React, { memo } from 'react'
import { PostType, TopicType } from '../../../pages'
import { useListPostAPI } from '../../fetcher/postsAPI/getListPost'
import Posts from './Posts'

interface Props extends TopicType {
  listPost: PostType[];
}

function Thread(props: Props) {
  const {id,title,url,listPost} = props
  // const {data, loading} = useListPostAPI()

  return (
    <div className = 'mt-12'>
        <div className = 'dark:text-gray-400 text-2xl border-b-2 border-gray-400 py-2 md:mx-12 mx-2' >
          <Link  href = {'/topic/'+url}>
            <a className = 'cursor-pointer hover:text-blue-600'>{title}</a>
          </Link>
        </div>
      <Posts listPost = {listPost} />
    </div>
  )
}

export default memo(Thread)
