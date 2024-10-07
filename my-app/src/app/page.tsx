import Sidenav from "@/components/Sidenav";
import { Box, Button, ButtonGroup, Slider, TextField, Typography } from "@mui/material";
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import RecentActorsOutlinedIcon from '@mui/icons-material/RecentActorsOutlined';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import { FC } from 'react';

const Page: FC = () => {
  return (
    <Box className="flex flex-col md:flex-row">
      {/* Sidebar (Sidenav) */}
      <Box className="flex items-center justify-center w-full md:w-[10%] h-auto md:h-screen border-b md:border-b-0 md:border-r border-gray-400">
        <Sidenav />
      </Box>

      {/* Main Content Area */}
      <Box className="w-full md:w-[90%] px-4 md:px-52 pt-10 md:pt-20">
        <Box className="flex flex-col gap-10 md:gap-20">
          
          {/* Button Group for desktop */}
          <Box className="flex flex-wrap justify-center items-center">
            <ButtonGroup variant="outlined" aria-label="Basic button group" className="hidden md:flex">
              <Button startIcon={<GroupOutlinedIcon />} className="text-black border-black hover:bg-[#FF6D41] hover:border-[#FF6D41]">Followers</Button>
              <Button startIcon={<PersonAddOutlinedIcon />} className="text-black border-black hover:bg-[#FF6D41] hover:border-[#FF6D41]">Following</Button>
              <Button startIcon={<TagOutlinedIcon />} className="text-black border-black hover:bg-[#FF6D41] hover:border-[#FF6D41]">Hashtag</Button>
              <Button startIcon={<FavoriteBorderOutlinedIcon />} className="text-black border-black hover:bg-[#FF6D41] hover:border-[#FF6D41]">Likes</Button>
              <Button startIcon={<ChatBubbleOutlineOutlinedIcon />} className=" text-black border-black hover:bg-[#FF6D41] hover:border-[#FF6D41]">Comment</Button>
              <Button startIcon={<FmdGoodOutlinedIcon />} className=" text-black border-black hover:bg-[#FF6D41] hover:border-[#FF6D41]">Location</Button>
              <Button startIcon={<RecentActorsOutlinedIcon />} className=" text-black border-black hover:bg-[#FF6D41] hover:border-[#FF6D41]">User List</Button>
            </ButtonGroup>

            <Box className="flex flex-wrap justify-center items-center md:hidden gap-2">
              <Button startIcon={<GroupOutlinedIcon />} className="text-black border-black hover:bg-[#FF6D41] hover:border-[#FF6D41]">Followers</Button>
              <Button startIcon={<PersonAddOutlinedIcon />} className="text-black border-black hover:bg-[#FF6D41] hover:border-[#FF6D41]">Following</Button>
              <Button startIcon={<TagOutlinedIcon />} className="text-black border-black hover:bg-[#FF6D41] hover:border-[#FF6D41]">Hashtag</Button>
              <Button startIcon={<FavoriteBorderOutlinedIcon />} className="text-black border-black hover:bg-[#FF6D41] hover:border-[#FF6D41]">Likes</Button>
              <Button startIcon={<ChatBubbleOutlineOutlinedIcon />} className=" text-black border-black hover:bg-[#FF6D41] hover:border-[#FF6D41]">Comment</Button>
              <Button startIcon={<FmdGoodOutlinedIcon />} className=" text-black border-black hover:bg-[#FF6D41] hover:border-[#FF6D41]">Location</Button>
              <Button startIcon={<RecentActorsOutlinedIcon />} className=" text-black border-black hover:bg-[#FF6D41] hover:border-[#FF6D41]">User List</Button>
            </Box>
          </Box>

          {/* Extraction section */}
          <Box className="flex flex-col gap-5">
            <Box className="flex items-center gap-1">
              <Box><Typography variant="body1" className="font-bold">Extraction by post likers</Typography></Box>
              <Box className="group ">
                <EmojiObjectsOutlinedIcon className="text-[15px] relative " />
                <Box className="bg-[#505051bc] p-5 rounded-xl absolute z-10 hidden group-hover:flex transition-all">
                  <Typography variant="body1" className="text-white">Lorem ipsum dolor sit amet.</Typography>
                </Box>
              </Box>
            </Box>
            <Box>
              <TextField
                className="border-black"
                label="Post link"
                placeholder="e.g. https://www.instagram.com/p/sdsasdasasd"
                fullWidth
              />
            </Box>
          </Box>

          {/* Interval and slider for setting request interval */}
          <Box className="flex flex-col gap-7">
            <Box className="flex items-center gap-1">
              <Typography variant="body1" className="font-bold">Interval between requests</Typography>
              <Box className="group ">
                <EmojiObjectsOutlinedIcon className="text-[15px] relative " />
                <Box className="bg-[#505051bc] p-5 rounded-xl absolute z-10 hidden group-hover:flex transition-all">
                  <Typography variant="body1" className="text-white">Lorem ipsum dolor sit amet.</Typography>
                </Box>
              </Box>
            </Box>
            <Slider
              aria-label="Interval"
              defaultValue={30}
              valueLabelDisplay="auto"
              step={10}
              marks
              min={10}
              max={110}
            />
            <Button
              variant="contained"
              color="primary"
              size="large"
              className="!bg-[#FF6D41] !w-[200px] !self-center">
              Extract
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Page;
