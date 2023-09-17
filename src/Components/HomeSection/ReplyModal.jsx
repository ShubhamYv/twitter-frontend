import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import VerifiedIcon from '../../Assets/Image/verifiedIcon.png'
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import ImageIcon from '@mui/icons-material/Image'
import TagFacesIcon from '@mui/icons-material/TagFacesSharp'
import FmdGoodIcon from '@mui/icons-material/FmdGood'
import { useFormik } from 'formik';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  border: 'none',
  p: 4,
  outline: "none",
  borderRadius: 4
};

export default function ReplyModal({ handleClose, open }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDeleteTweet = () => {
    console.log("Delete tweet");
    handleClose();
  }

  const handleEditTweet = () => {
    console.log("Edit tweet")
    handleClose()
  }

  const handleSubmit = (values) => {
    console.log("handle submit", values)
  }

  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
      tweetId: 4
    },
    onSubmit: handleSubmit
  })

  const [uploadigImage, setUploadigImage] = useState(false)
  const [selectedImage, setSelectedImage] = useState("")

  const handleSelectImage = (event) => {
    setUploadigImage(true)
    const imgUrl = event.target.files[0]
    formik.setFieldValue("image", imgUrl)
    setSelectedImage(imgUrl)
    setUploadigImage(false)
  }


  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
                </div>
              </div>
              <section className={`py-10`}>
                <div className='flex space-x-5'>
                  <Avatar alt='username' src='' />

                  <div className='w-full'>
                    <form action="" onSubmit={formik.handleSubmit}>
                      <div>
                        <input
                          type="text"
                          name='content'
                          placeholder='What is happening'
                          className={`border-none outline-none text-xl bg-transparent`}
                          {...formik.getFieldProps("content")}
                        />
                        {formik.errors.content && formik.touched.content && (
                          <span className='text-red-500'>{formik.errors.content}</span>
                        )}
                      </div>

                      {/* <div>
                <img src="" alt="" />
              </div> */}
                      <div className='flex justify-between items-center mt-5'>
                        <div className='flex space-x-5 items-center'>
                          <label className='flex items-center space-x-2 rounded-md cursor-pointer'>
                            <ImageIcon className='text-[#1d9bf0]' />
                            <input
                              type="file"
                              name='image file'
                              className='hidden'
                              onChange={handleSelectImage}
                            />
                          </label>

                          <FmdGoodIcon className='text-[#1d9bf0]' />
                          <TagFacesIcon className='text-[#1d9bf0]' />
                        </div>
                        <div>
                          <Button sx={{
                            width: "100%",
                            borderRadius: "20px",
                            paddingY: "8px",
                            paddingX: "20px",
                            bgcolor: '#1d9bf0'
                          }}
                            variant='contained'
                            type='submit'
                          >
                            Tweet
                          </Button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}