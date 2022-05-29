import SubNavBar from "src/component/SubNavBar";
import React from "react";
import { Container } from "react-bootstrap";
import { MdArrowForwardIos } from "react-icons/md";

const menuList = [
  {
    title: `Configure your door from scratch`,
    subTitle: `Residential, Commerical, Entry doors`,
  },
  {
    title: `Parts / Openers`,
    subTitle: `Order Parts and Openers`,
  },
  {
    title: `Direct Item Entry`,
    subTitle: `Order Parts / Openers using a Product ID`,
  },
  {
    title: `Choose from favourites`,
    subTitle: `Re-order door from your favourites `,
  },
];

export default function Index() {
  return (
    <div>
      <SubNavBar>
        <span>Create New Order</span>
      </SubNavBar>
      <div className='mainData mt-4'>
        <Container>
          {menuList.map((data, i) => {
            return (
              <div className='d-flex menuCard mt-2' key={i}>
                <div>
                  <h6>{data.title}</h6>
                  <span>{data.subTitle}</span>
                </div>
                <div>
                  <MdArrowForwardIos />
                </div>
              </div>
            );
          })}
        </Container>
      </div>
    </div>
  );
}
