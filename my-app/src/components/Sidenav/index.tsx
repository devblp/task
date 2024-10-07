import HomeMaxOutlinedIcon from '@mui/icons-material/HomeMaxOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import { Box } from "@mui/material";
import Link from 'next/link';
import { FC } from 'react';

const Sidenav: FC = () => {
  return (
    <Box>
      <ul className="flex flex-col max-md:flex-row justify-center items-center gap-20">
        <Link href="/" passHref>
          <li className="group flex relative">
            <HomeMaxOutlinedIcon className="text-[30px]" />
            <div className="max-md:hidden px-3 py-1 text-center rounded-xl bg-[#FF6D41] absolute opacity-0 group-hover:opacity-100 group-hover:translate-x-10 transition-all duration-300 ease-in-out">
              <p>HOME</p>
            </div>
          </li>
        </Link>

        <Link href="/" passHref>
          <li className="group flex relative">
            <ArticleOutlinedIcon className="text-[30px]" />
            <div className="max-md:hidden px-3 py-1 text-center rounded-xl bg-[#FF6D41] absolute opacity-0 group-hover:opacity-100 group-hover:translate-x-10 transition-all duration-300 ease-in-out">
              <p>TEST1</p>
            </div>
          </li>
        </Link>

        <Link href="/" passHref>
          <li className="group flex relative">
            <ErrorOutlineOutlinedIcon className="text-[30px]" />
            <div className="max-md:hidden px-3 py-1 text-center rounded-xl bg-[#FF6D41] absolute opacity-0 group-hover:opacity-100 group-hover:translate-x-10 transition-all duration-300 ease-in-out">
              <p>TEST2</p>
            </div>
          </li>
        </Link>

        <Link href="/" passHref>
          <li className="group flex relative">
            <SpaOutlinedIcon className="text-[30px]" />
            <div className="max-md:hidden px-3 py-1 text-center rounded-xl bg-[#FF6D41] absolute opacity-0 group-hover:opacity-100 group-hover:translate-x-10 transition-all duration-300 ease-in-out">
              <p>TEST3</p>
            </div>
          </li>
        </Link>
      </ul>
    </Box>
  );
};

export default Sidenav;
