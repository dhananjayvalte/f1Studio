import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
export default function SubNavBar(props) {
  const navigate = useNavigate();
  return (
    <div className='tabMenu alignCenter'>
      <div className='tabDetails'>
        <IoMdArrowRoundBack
          onClick={() => navigate(-1)}
          style={{ marginRight: "15px", cursor: "pointer" }}
        />{" "}
        {props.children}
      </div>
    </div>
  );
}
