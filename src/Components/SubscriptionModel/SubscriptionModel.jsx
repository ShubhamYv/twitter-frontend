import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
  outline: "none",

};

const features = [
  " Prioritized rankings in conversations and search",
  "See approximately twice as many posts between ads in your For You and Following timelines.",
  "Add bold and italic text in your posts",
  "Post longer videos and 1080p video uploads",
  "All the existing Premium features, including edit post, Bookmark Folders and early access to new features"

]

export default function SubscriptionModel({ handleClose, open }) {
  const [plan, setPlan] = useState("Annually")

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex items-center space-x-3">
            <IconButton onClick={handleClose} aria-label='delete'>
              <CloseIcon />
            </IconButton>
          </div>
          <div className='flex justify-center py-10'>
            <div className="w-[85%] space-y-10">
              <div className='p-5 rounded-md flex items-center justify-between bg-slate-200 shadow-lg'>
                <h1 className='text-xl pr-5'>Premium subscribers with a verified phone number will get a blue checkmark once approved.</h1>
                <img
                  className='w-[100px] h-[100px]'
                  src="https://abs.twimg.com/responsive-web/client-web/verification-card-v2@3x.8ebee01a.png"
                  alt="verified icon"
                />
              </div>
              <div className="flex justify-between rounded-full px-5 py-3 border border-gray-500">
                <div>
                  <span
                    onClick={() => setPlan("Annually")}
                    className={`${plan === "monthly" ? "text-black" : "text-gray-400"}`}
                  >
                    Annually
                  </span>
                  <span className='text-green-500 text-sm ml-5'>SAVE 12%</span>
                </div>
                <p
                  onClick={() => setPlan("monthly")}
                  className={`${plan === "monthly" ? "text-black" : "text-gray-400"}`}
                >
                  Monthly
                </p>
              </div>
              <div className='space-y-3 '>
                {features.map((item) => <div className="flex items-center space-x-5">
                  <FiberManualRecordIcon sx={{ width: "7px", height: "7px" }} />
                  <p className='text-sm'>{item}</p>
                </div>)}
              </div>
              <div className='cursor-pointer flex justify-center bg-gray-900 text-white rounded-full px-5 py-3'>
                <span className='line-through italic'>₹ 7,800.00</span>
                <span className='px-5'>₹ 6,800.00</span>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div >
  );
}