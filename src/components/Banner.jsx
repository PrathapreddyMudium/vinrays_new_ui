import React from "react";
import { useNavigate } from "react-router-dom";
import { useMenuContext } from "../context/Context";

const Banner = () => {
  const { menuClicked } = useMenuContext();
  const navigate =useNavigate()
  const onClickHandler = () =>{
    navigate('/');
  }
  return (
    <section class="inner-banner py-5">
      <div class="w3l-breadcrumb">
        <div class="container-banner pt-4 pb-sm-4">
          <h4 class="inner-text-title pt-5">{menuClicked}</h4>
          {menuClicked && (
            <ul class="breadcrumbs-custom-path">
              <li>
                <a href="/" class="router-link-active" onClick={onClickHandler}>
                  Home
                </a>
              </li>
              <li class="active">
                <i class="fa-solid fa-angle-right"></i>
                {menuClicked}
              </li>
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default Banner;
