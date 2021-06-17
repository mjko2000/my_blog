import React from 'react'
import { useState, memo, useEffect } from 'react'
import { Facebook, Instagram, LinkedIn } from '@material-ui/icons'

type FooterProps = {

}

const Footer = (props: FooterProps) => {

  return (
    <div className='w-full h-96 bg-gray-800 p-20'>
      <div className='h-1/2'>

      </div>
      <div className = 'flex flex-row'>
        <div className = 'flex-1'>
          <p className='text-white font-bold'>GET IN TOUCH</p>
          <table className="my-4 table-auto text-left text-gray-400 text-xs font-light">
            <tr>
              <th>88, 17 Street, Tan Thuan Tay,</th>
              <th className='pl-20'><a href='mailto:ndeva3199@gmail.com'>ndeva3199@gmail.com</a></th>
            </tr>
            <tr>
              <th>Ho Chi Minh City</th>
              <th className='pl-20'>+84 912 244 933</th>
            </tr>
          </table>
          <div className = 'text-white'>
            <a
              href = 'https://www.facebook.com/one.evething'
              target='_blank'
            >
              <Facebook fontSize='default' />
            </a>
            <a
              href = 'https://www.instagram.com/n.dev.a'
              target='_blank'
              className = 'ml-2'
            >
              <Instagram fontSize='default' />
            </a>
            <a
              href = 'https://www.linkedin.com/in/nguyen-duc-anh-03b282202'
              target='_blank'
              className = 'ml-2'
            >
              <LinkedIn fontSize='default' />
            </a>
          </div>

        </div>
        <div className = "self-end text-gray-400">
          <a>© 2021 Ndeva. All rights reserved.</a>
        </div>
      </div>
    </div>
  )
}

export default memo(Footer)