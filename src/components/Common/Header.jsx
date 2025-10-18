import React from "react";
import Logo from "../../assets/images/logo.svg";
import HomeIcon from "../../assets/icons/home.svg";
import NotificationIcon from "../../assets/icons/notification.svg";
import AvatarImage from "../../assets/images/avatars/avatar_1.png";
import { Link } from "react-router-dom";
import Logout from "../auth/Logout";

const Header = () => {
  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-[#3F3F3F] bg-[#1E1F24] py-4">
        <div className="container flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* <!-- Logo --> */}
          <Link to="/">
            {/* <img
              className="max-w-[100px] rounded-full lg:max-w-[130px]"
              src={Logo}
            /> */}
            <h3 className="text-3xl">FaceHook</h3>
          </Link>
          {/* <!-- nav links  --> */}

          <div className="flex items-center space-x-4">
            <Link to="/" className="btn-primary">
              <img src={HomeIcon} alt="Home" />
              Home
            </Link>
            <button className="icon-btn">
              <img src={NotificationIcon} alt="Notification" />
            </button>
            <Logout />

            <button className="flex-center !ml-8 gap-3">
              <span className="text-lg font-medium lg:text-xl">Moyo</span>
              <img
                className="max-h-[32px] max-w-[32px] lg:max-h-[44px] lg:max-w-[44px] rounded-full"
                // src={AvatarImage}
                src="https://scontent.cdninstagram.com/v/t51.75761-19/504104536_18076612768930515_3483568686138184542_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=101&ig_cache_key=GFgGDB7TmtVilThAAF7T8GdDH1gwbvEnAQAB1501500j-ccb7-5&ccb=7-5&_nc_sid=669407&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=YD9DLh-Vr4UQ7kNvwEVmzX9&_nc_oc=AdnYcJAE3Rvj5edHk8MJpK39VxaUD0Z01JMAk7BSiHa-Kh035qDp1unsF1-j11isKco&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=KXrx1GsfMlHz3hhO6oTSJA&oh=00_AffwY2aKnPnFeFObD6L3ZQqWfwfeQpHvJjpTtdJWj-ogaQ&oe=68F9961B"
                alt=""
              />
            </button>
          </div>
          {/* <!-- nav links ends --> */}
        </div>
      </nav>
    </>
  );
};

export default Header;
