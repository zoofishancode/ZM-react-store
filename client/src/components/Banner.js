import React from "react";
import bannerImg from "../assets/banner_img.png";

const Banner = () => {
  //   const data = [{ bannerImg }];
  return (
    <div>
      <div>
        <img src={bannerImg} alt="landing_page_image" />
      </div>
    </div>
  );
};

export default Banner;
