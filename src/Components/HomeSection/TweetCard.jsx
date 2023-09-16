import React from 'react'
import RepeatIcon from '@mui/icons-material/Repeat'
import { Avatar, Button, Menu, MenuItem } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import VerifiedIcon from '../../Assets/Image/verifiedIcon.png'
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FileUploadIcon from '@mui/icons-material/FileUpload'
import BarChartIcon from '@mui/icons-material/BarChart'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { FavoriteOutlined } from '@mui/icons-material'

const TweetCard = () => {

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteTweet = () => {
    console.log("Delete tweet");
    handleClose();
  }

  const handleEditTweet = () => {
    console.log("Edit tweet")
    handleClose()
  }

  const handleOpenReplyModel = () => {
    console.log("handle Open Reply Model");
  }

  const handleCreateRetweet = () => {
    console.log("handle Create Retweet");
  }

  const handleLikeTweet = () => {
    console.log("handle Like Tweet");
  }

  return (
    <div className=''>
      {/* <div className="flex items-center font-semibold text-gray-700 py-2">
        <RepeatIcon />
        <p>You Retweet</p>
      </div> */}

      <div className="flex space-x-5">
        <Avatar
          className='cursor-pointer'
          alt='username'
          src='https://pbs.twimg.com/media/F591nJTXgAAjMds?format=jpg&name=small'
          onClick={() => navigate(`/profile/${5}`)}
        />
        <div className='w-full'>
          <div className="flex justify-between items-center">
            <div className="flex cursor-pointer items-center skew-x-2">
              <span className='font-semibold'>Shubham Yadav</span>
              <img className='ml-2 w-5 h-5' src={VerifiedIcon} alt="verified icon" />
              <span className='ml-2 text-gray-600'>@ShubhamYv . 2 min</span>
            </div>
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <MoreHorizIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>
                <MenuItem onClick={handleEditTweet}>Edit</MenuItem>
              </Menu>
            </div>
          </div>

          <div className="mt-2">
            <div onClick={() => navigate(`/tweet/${3}`)} className="cursor-pointer">
              <p className='mb-2 p-0'>Hello my name is shubham yadav. I am a java full stack developer.</p>
              <img
                className='w-[28rem] border border-gray-400 p-5 rounded-md'
                src="https://pbs.twimg.com/media/F6DrVWOXIAABWmL?format=jpg&name=small"
                alt="tweet images" />
            </div>
            <div className="py-5 flex flex-wrap justify-between items-center">
              <div className="space-x-3 flex items-center text-gray-600">
                <ChatBubbleOutlineIcon className='cursor-pointer' onClick={handleOpenReplyModel} />
                <p>43</p>
              </div>
              <div className={`${true ? "text-pink-600" : "text-gray-600"} space-x-3 flex items-center`}>
                <RepeatIcon className='cursor-pointer' onClick={handleCreateRetweet} />
                <p>54</p>
              </div>
              <div className={`${true ? "text-pink-600" : "text-gray-600"} space-x-3 flex items-center`}>
                {
                  true ?
                    <FavoriteIcon className='cursor-pointer' onClick={handleLikeTweet} /> :
                    <FavoriteOutlined className='cursor-pointer' onClick={handleLikeTweet} />
                }
                <p>104</p>
              </div>
              <div className="space-x-3 flex items-center text-gray-600">
                <BarChartIcon className='cursor-pointer' onClick={handleOpenReplyModel} />
                <p>1243</p>
              </div>
              <div className="space-x-3 flex items-center text-gray-600">
                <FileUploadIcon className='cursor-pointer' onClick={handleOpenReplyModel} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TweetCard
