import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMenuContext } from "../context/Context";

const MyLink = ({ toValue, children }) => {
    const navigate = useNavigate();
    const {onClickHandler} = useMenuContext();
    const handleOnClick = (e) =>{
    onClickHandler(e);
    navigate(toValue);
    }
  return (
    <Link to={toValue} onClick={handleOnClick}>
      {children}
    </Link>
  )
}

export default MyLink