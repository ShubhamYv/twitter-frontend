import React from 'react'
import SearchIcon from "@mui/icons-material/Search"
import Brightness4Icon from '@mui/icons-material/Brightness4'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { Button } from '@mui/material'

const RightPart = () => {

  const handleChangeTheme = () => {
    console.log("handle ChangeTheme")
  }

  return (
    <div className='py-5 sticky top-0'>
      <div className='relative flex items-center'>
        <input type="text" className='py-3 rounded-full text-gray-500 pl-12' />
        <div className='absolute top-0 left-0 pl-3 pt-3'>
          <SearchIcon className='text-gray' />
        </div>
        <Brightness4Icon className='ml-3 cursor-pointer' onClick={handleChangeTheme} />
      </div>
      <section className='my-5'>
        <h1 className='text-xl font-bold'>Get Verified</h1>
        <h1 className='font-bold my-2'>Subscribe to unlock new features</h1>
        <Button
          variant='contained'
          sx={{
            padding: "10px",
            paddingX: "20px",
            borderRadius: "25px"
          }}
        >
          Get Verified
        </Button>
      </section>

      <section className='mt-7 space-y-5'>
        <h1 className='font-bold text-xl py-1'>What's happening</h1>
        <div>
          <p className='text-sm'>Movies · LIVE</p>
          <p className='font-bold'>Toronto International Film Festival 2023</p>
        </div>
        {[1, 1, 1, 1, 1, 1, 1].map((item) => <div className='flex justify-between w-full'>
          <div>
            <p>Entertainment . Trending</p>
            <p className='font-bold'>#TheMarvels</p>
            <p>3.4k Tweets</p>
          </div>
          <MoreHorizIcon />
        </div>)}
      </section>
    </div>
  )
}

export default RightPart
