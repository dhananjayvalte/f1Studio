import SubNavBar from "src/component/SubNavBar";
import React from "react";
import {
  Container,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
  Button,
  Form,
} from "react-bootstrap";
import { BsHeartFill, BsPencilFill } from "react-icons/bs";
import { MdOutlineContentCopy } from "react-icons/md";
import { MdDelete } from "react-icons/md";
export default function NewOrderPart1() {
  return (
    <div>
      <SubNavBar>
        <span>
          Configure a new door{" "}
          <span style={{ marginLeft: 10, fontSize: "12px", color: "#E4E4E4" }}>
            Cart #123456723
          </span>{" "}
        </span>
      </SubNavBar>
      <div className='mainData'>
        <Container>
          <div className='detailsBox prviewBox '>
            <div className='prviewData'>
              <Row className='mt-2'>
                <h5>
                  10' 0'' X 10' 0.0'' CAN211 CC W1 COMPLETE DOOR INTELLICORE
                  OBSCURE, 5TH GENERATION FINISH WALDER DOOR
                </h5>
                <span>
                  Job Name: Front door with glass{" "}
                  <span
                    style={{ fontSize: 15, fontWeight: 600, color: "#66332B" }}
                  >
                    Change
                  </span>
                </span>

                <span>Product #CWD • Garage Door</span>
                <span>
                  Availability:{" "}
                  <span
                    style={{ fontSize: 15, fontWeight: 600, color: "#17A85F" }}
                  >
                    {" "}
                    IN STOCK
                  </span>{" "}
                  (Available for Pickup)
                </span>
              </Row>
              <Row>
                <Col sm={12} md={4} className='mt-4 smallAlignCenter'>
                  <Button
                    variant='outline-light'
                    style={{
                      border: "1px solid #8894A0",
                      color: "#66332B",
                      marginRight: 10,
                      background: "#F6F8FA",
                      width: 40,
                    }}
                  >
                    -
                  </Button>
                  <Button
                    variant='outline-light'
                    style={{
                      border: "1px solid #8894A0",
                      color: "#66332B",
                      marginRight: 10,
                      width: 100,
                    }}
                  >
                    1
                  </Button>
                  <Button
                    variant='outline-light'
                    style={{
                      border: "1px solid #8894A0",
                      color: "#66332B",
                      marginRight: 10,
                      background: "#F6F8FA",
                      width: 40,
                    }}
                  >
                    +
                  </Button>
                </Col>
                <Col sm={12} md={4} className='mt-4 smallAlignCenter'>
                  <p>Standard Multiplier: .432</p>
                  <p>Secondary Multipliers Applied</p>
                </Col>
                <Col sm={12} md={4} className='mt-4 smallAlignCenterNetPrice'>
                  <span>
                    Net Price :{" "}
                    <span
                      style={{
                        fontSize: 22,
                        fontWeight: 600,
                        color: "#2A292A",
                      }}
                    >
                      $4500.00
                    </span>{" "}
                  </span>
                  <br />
                  <span>Unit Price : $4800.00</span>
                  <br />
                  <span style={{ fontSize: 12, color: "#66332B" }}>
                    View Price Details
                  </span>
                </Col>
              </Row>
              <Row className='p-4 '>
                <Col sm={6} md={3} className='p-0 m-0'>
                  <div className='customBtn alignJustifyCenter'>
                    <BsHeartFill /> <span>Favorites</span>
                  </div>
                </Col>
                <Col sm={6} md={3} className='p-0 m-0'>
                  <div className='customBtn alignJustifyCenter'>
                    <BsPencilFill /> <span>Edit</span>
                  </div>
                </Col>
                <Col sm={6} md={3} className='p-0 m-0'>
                  <div className='customBtn alignJustifyCenter'>
                    <MdOutlineContentCopy /> <span>Copy</span>
                  </div>
                </Col>
                <Col sm={6} md={3} className='p-0 m-0'>
                  <div className='customBtn alignJustifyCenter'>
                    <MdDelete /> <span>Delete</span>
                  </div>
                </Col>
              </Row>
            </div>

            <Row className='mt-1'>
              <Col sm={12} md={6}>
                <div className='prviewData pb-4'>
                  <span>Change Delivery Date</span>
                  <br />
                  <input type='datetime-local' />
                  <br />
                  <span>Standard Delivery: Tue May 28 - 2019</span>
                </div>
                <div className='prviewData pb-4'>
                  <span>Purchase Order Number</span>
                  <br />
                  <input type='text' />
                  <br />
                  <span>This PO will be useful to track this order items </span>
                </div>
              </Col>
              <Col sm={12} md={6}>
                <div className='prviewData'>
                  <span>Bill Summary</span> <br />
                  <div className='billDetails'>
                    <span>Sub Total</span>
                    <span>$ 4500.00</span>
                  </div>
                  <div className='billDetails'>
                    <span>Energy Surcharge</span>
                    <span>$ 70.18</span>
                  </div>
                  <div className='billDetails'>
                    <span>Sales Tax</span>
                    <span>$ 490.93</span>
                  </div>
                  <div className='billDetails'>
                    <h6>Total</h6>
                    <h6>$ 5061.11</h6>
                  </div>
                  <hr />
                  <Form.Check checked type={"checkbox"} label={`Apply Tax`} />
                  <span>
                    (The 1% iStore discount is calculated into the total price
                    for all doors and door parts. Please refer to the quote or
                    order acknowledgment for details.)
                  </span>
                </div>
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col sm={12} md={12}>
                <div className='prviewData'>
                  <Row>
                    <Col sm={12} md={6} className='billinfDetails'>
                      <span>Billing to</span>
                      <div className='rightBorder'>
                        <h6>Bement Jared</h6>
                        <p>
                          144 Curt Shores, 50, Madison Avenue Hixson - 42040
                        </p>
                        <p>Contact: (123) 456 7890</p>
                      </div>
                    </Col>
                    <Col sm={12} md={6} className='billinfDetails'>
                      <span>Shipping To</span>
                      <div>
                        <h6>Bement Jared</h6>
                        <p>
                          144 Curt Shores, 50, Madison Avenue Hixson - 42040
                        </p>
                        <p>Contact: (123) 456 7890</p>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div
                  className='btnBox prviewData'
                  style={{ backgroundColor: "#fff" }}
                >
                  <Row className='mt-2'>
                    <Col sm={4} xm={12}>
                      <div className='billinfDetails'>
                        <span>1 Item</span>
                        <div>
                          <h6>$5061.11</h6>
                        </div>
                      </div>
                    </Col>

                    <Col sm={8} xm={12}>
                      <div style={{ textAlign: "right" }}>
                        <Button
                          variant='outline-light'
                          style={{
                            border: "1px solid #66332B",
                            color: "#66332B",
                            marginRight: 10,
                          }}
                        >
                          PREVIEW
                        </Button>

                        <Button
                          variant='light'
                          style={{ color: "#FFF", backgroundColor: "#66332B" }}
                        >
                          ADD TO CART
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>{" "}
        </Container>
      </div>
    </div>
  );
}
