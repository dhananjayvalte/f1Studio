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
import { AiFillQuestionCircle } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
export default function NewOrderPart2() {
  return (
    <div>
      <SubNavBar>
        <span>
          Configure a new door{" "}
          <span style={{ marginLeft: 10, fontSize: "12px", color: "#E4E4E4" }}>
            2 of 3
          </span>{" "}
        </span>
      </SubNavBar>
      <div className='mainData mt-4'>
        <Container>
          <div className='detailsBox '>
            <div className='divCard'>
              <div className='dataHeader alignCenter'>
                <span>Layout options</span>
              </div>
              <Row className='mt-4'>
                <Col sm={2} xm={12}></Col>
                <Col sm={3} xm={12}>
                  <span>Assembly Type</span>
                </Col>
                <Col sm={5} xm={12}>
                  <select>
                    <option>Complete Door</option>
                    <option>Residential Door</option>
                  </select>
                </Col>
                <Col sm={2} xm={12}></Col>
              </Row>
              <Row className='mt-2'>
                <Col sm={2} xm={12}></Col>
                <Col sm={3} xm={12}>
                  <span>
                    Measure Size{" "}
                    <AiFillQuestionCircle style={{ color: "#E5E5E5" }} />
                  </span>
                </Col>
                <Col sm={5} xm={12}>
                  <Row className='alignCenter'>
                    <Col md={2} sm={12}>
                      <span>Width</span>
                    </Col>
                    <Col md={5} sm={6}>
                      <select>
                        <option>8 ft.</option>
                        <option>9 ft.</option>
                      </select>
                    </Col>
                    <Col md={5} sm={6}>
                      <select>
                        <option>2 in.</option>
                        <option>3 in.</option>
                      </select>
                    </Col>
                  </Row>
                  <Row className='alignCenter mt-2'>
                    <Col md={2} sm={12}>
                      <span>Height</span>
                    </Col>
                    <Col md={5} sm={6}>
                      <select>
                        <option>8 ft.</option>
                        <option>9 ft.</option>
                      </select>
                    </Col>
                    <Col md={5} sm={6}>
                      <select>
                        <option>2 in.</option>
                        <option>3 in.</option>
                      </select>
                    </Col>
                  </Row>
                </Col>
                <Col sm={2} xm={12}></Col>
              </Row>
              <Row className='mt-2'>
                <Col sm={2} xm={12}></Col>
                <Col sm={3} xm={12}>
                  <span>
                    Windcode{" "}
                    <AiFillQuestionCircle style={{ color: "#E5E5E5" }} />
                  </span>
                </Col>
                <Col sm={5} xm={12}>
                  <select>
                    <option>WindCode W1</option>
                    <option>Residential Door</option>
                  </select>
                </Col>
                <Col sm={2} xm={12}></Col>
              </Row>
              <Row className='mt-2'>
                <Col sm={2} xm={12}></Col>
                <Col sm={3} xm={12}>
                  <span>
                    Design <AiFillQuestionCircle style={{ color: "#E5E5E5" }} />
                  </span>
                </Col>
                <Col sm={5} xm={12}>
                  <select>
                    <option>CC</option>
                    <option>DD</option>
                  </select>
                </Col>
                <Col sm={2} xm={12}></Col>
              </Row>
              <Row className='mt-2'>
                <Col sm={2} xm={12}></Col>
                <Col sm={3} xm={12}>
                  <span>
                    Color <AiFillQuestionCircle style={{ color: "#E5E5E5" }} />
                  </span>
                </Col>
                <Col sm={5} xm={12}>
                  <select>
                    <option>Dark Finish</option>
                    <option>Black</option>
                  </select>
                </Col>
                <Col sm={2} xm={12}></Col>
              </Row>
            </div>
            {/* WINDOW OPTION */}
            <div className='divCard mt-3'>
              <div className='dataHeader alignCenter'>
                <span>Window options</span>
              </div>

              <Row className='mt-2'>
                <Col sm={2} xm={12}></Col>
                <Col sm={3} xm={12}>
                  <span>
                    Glass Type{" "}
                    <AiFillQuestionCircle style={{ color: "#E5E5E5" }} />
                  </span>
                </Col>
                <Col sm={5} xm={12}>
                  <select>
                    <option>Solid (No Windows)</option>
                    <option>Residential Door</option>
                  </select>
                </Col>
                <Col sm={2} xm={12}></Col>
              </Row>
              <Row className='mt-2'>
                <Col sm={2} xm={12}></Col>
                <Col sm={3} xm={12}>
                  <span>
                    Section(s) Glazed{" "}
                    <AiFillQuestionCircle style={{ color: "#E5E5E5" }} />
                  </span>
                </Col>
                <Col sm={5} xm={12}>
                  <select>
                    <option>Sections 4</option>
                    <option>DD</option>
                  </select>
                </Col>
                <Col sm={2} xm={12}></Col>
              </Row>
              <Row className='mt-2'>
                <Col sm={2} xm={12}></Col>
                <Col sm={3} xm={12}>
                  <span>
                    Framing{" "}
                    <AiFillQuestionCircle style={{ color: "#E5E5E5" }} />
                  </span>
                </Col>
                <Col sm={5} xm={12}>
                  <select>
                    <option>Arch 1 Design</option>
                    <option>Black</option>
                  </select>
                </Col>
                <Col sm={2} xm={12}></Col>
              </Row>
            </div>

            {/* Track OPTION */}
            <div className='divCard mt-3'>
              <div className='dataHeader alignCenter'>
                <span>Track options</span>
              </div>

              <Row className='mt-2'>
                <Col sm={2} xm={12}></Col>
                <Col sm={3} xm={12}>
                  <span>
                    Spring <AiFillQuestionCircle style={{ color: "#E5E5E5" }} />
                  </span>
                </Col>
                <Col sm={5} xm={12}>
                  <select>
                    <option>Galvanized Torsion</option>
                    <option>Residential Door</option>
                  </select>
                </Col>
                <Col sm={2} xm={12}></Col>
              </Row>
              <Row className='mt-2'>
                <Col sm={2} xm={12}></Col>
                <Col sm={3} xm={12}>
                  <span>
                    Track Size{" "}
                    <AiFillQuestionCircle style={{ color: "#E5E5E5" }} />
                  </span>
                </Col>
                <Col sm={5} xm={12}>
                  <select>
                    <option>2” Flag & Jamb Brackets Loose</option>
                    <option>DD</option>
                  </select>
                </Col>
                <Col sm={2} xm={12}></Col>
              </Row>
              <Row className='mt-2'>
                <Col sm={2} xm={12}></Col>
                <Col sm={3} xm={12}>
                  <span>
                    Track Mount{" "}
                    <AiFillQuestionCircle style={{ color: "#E5E5E5" }} />
                  </span>
                </Col>
                <Col sm={5} xm={12}>
                  <select>
                    <option>Bracket</option>
                    <option>Black</option>
                  </select>
                </Col>
                <Col sm={2} xm={12}></Col>
              </Row>
              <Row className='mt-2'>
                <Col sm={2} xm={12}></Col>
                <Col sm={3} xm={12}>
                  <span>
                    Track Lift{" "}
                    <AiFillQuestionCircle style={{ color: "#E5E5E5" }} />
                  </span>
                </Col>
                <Col sm={5} xm={12}>
                  <select>
                    <option>Standard</option>
                    <option>Black</option>
                  </select>
                </Col>
                <Col sm={2} xm={12}></Col>
              </Row>
              <Row className='mt-2'>
                <Col sm={2} xm={12}></Col>
                <Col sm={3} xm={12}>
                  <span>
                    Track Radius{" "}
                    <AiFillQuestionCircle style={{ color: "#E5E5E5" }} />
                  </span>
                </Col>
                <Col sm={5} xm={12}>
                  <select>
                    <option>12” Radius</option>
                    <option>Black</option>
                  </select>
                </Col>
                <Col sm={2} xm={12}></Col>
              </Row>
            </div>

            {/* OTHER OPTION */}
            <div className='divCard mt-3'>
              <div className='dataHeader alignCenter'>
                <span>Other options</span>
              </div>

              <Row className='mt-2'>
                <Col sm={2} xm={12}></Col>
                <Col sm={3} xm={12}>
                  <span>
                    Lock <AiFillQuestionCircle style={{ color: "#E5E5E5" }} />
                  </span>
                </Col>
                <Col sm={5} xm={12}>
                  <select>
                    <option>Inside Slide Lock (#2)</option>
                    <option>Residential Door</option>
                  </select>
                </Col>
                <Col sm={2} xm={12}></Col>
              </Row>
              <Row className='mt-2'>
                <Col sm={2} xm={12}></Col>
                <Col sm={3} xm={12}>
                  <span>
                    MISC Lock Options{" "}
                    <AiFillQuestionCircle style={{ color: "#E5E5E5" }} />
                  </span>
                </Col>
                <Col sm={5} xm={12}>
                  <Form.Check checked type={"radio"} label={`No Lock Hole`} />
                </Col>
                <Col sm={2} xm={12}></Col>
              </Row>
              <Row className='mt-2'>
                <Col sm={2} xm={12}></Col>
                <Col sm={3} xm={12}>
                  <span>
                    Packaging{" "}
                    <AiFillQuestionCircle style={{ color: "#E5E5E5" }} />
                  </span>
                </Col>
                <Col sm={5} xm={12}>
                  <select>
                    <option>[x] Distributor</option>
                    <option>Black</option>
                  </select>
                  <span style={{ color: "#D50000" }}>
                    <BsFillInfoCircleFill /> &nbsp; Clopay CWD Models Excludes
                    Packaging Options
                  </span>
                </Col>
                <Col sm={2} xm={12}></Col>
              </Row>
              <Row className='mt-2'>
                <Col sm={2} xm={12}></Col>
                <Col sm={3} xm={12}>
                  <span>
                    Additional Options{" "}
                    <AiFillQuestionCircle style={{ color: "#E5E5E5" }} />
                  </span>
                </Col>
                <Col sm={5} xm={12}>
                  <Row className='mt-2'>
                    <Col md={6} sm={12}>
                      <Form.Check
                        checked
                        type={"checkbox"}
                        label={`Extra Strut(s)`}
                      />
                    </Col>
                    <Col md={6} sm={12}>
                      <select>
                        <option>5 Extra Struts</option>
                        <option>Black</option>
                      </select>
                    </Col>
                    <Col sm={12} xm={12}>
                      <Form.Check
                        checked
                        type={"checkbox"}
                        label={`Spade Strap Hinge(s)`}
                      />
                    </Col>
                    <Col sm={12} xm={12} className='mt-3'>
                      <Form.Check
                        checked
                        type={"checkbox"}
                        label={`14 GA Quiet Hinge`}
                      />
                    </Col>
                    <Col sm={12} xm={12} className='mt-3'>
                      <Form.Check
                        type={"checkbox"}
                        label={`Less Bottom Astragal`}
                      />
                    </Col>
                    <Col sm={12} xm={12} className='mt-3'>
                      <Form.Check
                        type={"checkbox"}
                        label={`Gold Bar Gurantee ( Select Dealers )`}
                      />
                    </Col>
                    <Col sm={12} xm={12} className='mt-3'>
                      <Form.Check
                        type={"checkbox"}
                        label={`Medallion Hardware Upgrade`}
                      />
                    </Col>
                    <Col sm={12} xm={12} className='mt-3'>
                      <Form.Check type={"checkbox"} label={`Light Seal Kit`} />
                    </Col>
                    <Col sm={12} xm={12} className='mt-3'>
                      <Form.Check
                        type={"checkbox"}
                        label={`Slide Lock Mounted at 54”`}
                      />
                    </Col>
                    <Col sm={12} xm={12} className='mt-3'>
                      <Form.Check
                        type={"checkbox"}
                        label={`2 Spear Lift Handles`}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col sm={2} xm={12}></Col>
              </Row>
            </div>
            <div className='divCard'>
              <Row className='mt-2'>
                <Col sm={11} xm={12}>
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
                <Col sm={1} xm={12}></Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
