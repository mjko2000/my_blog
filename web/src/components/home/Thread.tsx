import Link from 'next/link'
import React, { memo } from 'react'
import { useListPostAPI } from '../../fetcher/postsAPI/getListPost'
import Posts from './Posts'

interface Props {}

function Thread(props: Props) {
  const {} = props
  const {data, loading} = useListPostAPI()

  return (
    <div className = 'flex flex-col mt-12'>
      <Link href = '/topic/things'>
        <div className = 'dark:text-gray-400 hover:text-blue-600 text-2xl border-b-2 border-gray-400 py-2 mx-12' >
          <a className = 'cursor-pointer'>Things make you love</a>
        </div>
      </Link>
      <Posts listPost = {data} />
    </div>
  )
}

export default memo(Thread)
