import React, { useState } from 'react'
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace"
import { useNavigate } from 'react-router-dom'
import { Avatar, Box, Button, Tab } from '@mui/material'
import VerifiedIcon from '../../Assets/Image/verifiedIcon.png'
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter"
import LocationIcon from "@mui/icons-material/LocationOn"
import CalenderMonthIcon from "@mui/icons-material/CalendarMonth"
import { TabContext, TabList, TabPanel } from '@mui/lab'
import TweetCard from '../HomeSection/TweetCard'
const Profile = () => {

  const [tabValue, setTabValue] = useState("1")
  const navigate = useNavigate()
  const handleBack = () => navigate(-1)

  const handleOpenProfileModel = () => {
    console.log("handle Open Profile Model");
  }

  const handleFollowUser = () => {
    console.log("handle Follow User");
  }

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)
    if (newValue === 4) {
      console.log("likes tweets")
    } else if (newValue === 1) {
      console.log("user tweets")
    }
  }

  return (
    <div>
      <section className={`bg-white z-50 items-center flex sticky top-0 bg-opacity-95`}>
        <KeyboardBackspaceIcon className='cursor-pointer' onClick={handleBack} />
        <h1 className="py-5 text-xl font-bold opacity-95 ml-5">Shubham Yadav</h1>
      </section>

      <section>
        <img className='w-[100%] h-[15rem] object-cover'
          src="https://pbs.twimg.com/media/F6ELXutXgAAJWPG?format=jpg&name=small"
          alt=""
        />
      </section>

      <section className='pl-6'>
        <div className="flex items-start justify-between mt-5 h-[5rem]">
          <Avatar
            className='transform -translate-y-24'
            sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
            alt="Shubham Yadav"
            src='https://pbs.twimg.com/media/F6GpEAlW4AAEW1o?format=jpg&name=small'
          />

          {true ?
            <Button
              onClick={handleOpenProfileModel}
              className='rounded-full'
              variant='contained'
              sx={{ borderRadius: "20px" }}
            >Edit Profile
            </Button> :
            <Button
              onClick={handleFollowUser}
              className='rounded-full'
              variant='contained'
              sx={{ borderRadius: "20px" }}
            >{true ? "Follow" : "Unfollow"}
            </Button>
          }
        </div>

        <div>
          <div className='flex items-center'>
            <h1 className='font-bold text-lg'>Shubham Yadav</h1>
            {true &&
              <img className='ml-2 w-5 h-5' src={VerifiedIcon} alt="verified icon" />
            }
          </div>
          <h1 className='text-gray-500'>@ShubhamYv</h1>
        </div>
        <div className='mt-2 space-y-3'>
          <p>I've completed my graduation from Atria Institute Technology, Bengaluru. I'm a dedicated Java Developer with a strong passion for coding and problem-solving.</p>
          <div className='py-1 flex space-x-5'>
            <div className='flex items-center text-gray-500'>
              <BusinessCenterIcon />
              <p className="ml-2">Education</p>
            </div>

            <div className='flex items-center text-gray-500'>
              <LocationIcon />
              <p className="ml-2">Indian</p>
            </div>

            <div className='flex items-center text-gray-500'>
              <CalenderMonthIcon />
              <p className="ml-2">Joined Jun 2023</p>
            </div>
          </div>
          <div className="flex items-center space-x-5">
            <div className="flex items-center space-x-1 font-semibold">
              <span>590</span>
              <span className='text-gray-500'>Followers</span>
            </div>
            <div className="flex items-center space-x-1 font-semibold">
              <span>1240</span>
              <span className='text-gray-500'>Following</span>
            </div>
          </div>
        </div>
      </section>
      <section className='py-5'>
        <TabContext value={tabValue}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleTabChange} aria-label="lab API tabs example">
              <Tab label="Tweets" value="1" />
              <Tab label="Replies" value="2" />
              <Tab label="Media" value="3" />
              <Tab label="Likes" value="4" />
            </TabList>
          </Box>
          <TabPanel value="1">{[1, 1, 1, 1, 1, 1].map(() => <TweetCard />)}</TabPanel>
          <TabPanel value="2">User Replies</TabPanel>
          <TabPanel value="3">Media</TabPanel>
          <TabPanel value="4">Likes</TabPanel>
        </TabContext>
      </section>
    </div>
  )
}

export default Profile