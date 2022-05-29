import React, { useState } from "react";
import {
  Button,
  Dropdown,
  DropdownButton,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import NavTab from "./NavTab";
import TableTab from "./TableTab";
import { BiFilter } from "react-icons/bi";
import { BiSearchAlt2 } from "react-icons/bi";
import TableData from "./TableData";
export default function Index() {
  return (
    <div>
      <NavTab />
      <div className='mainDiv'>
        <div className='subTab'>
          <div>
            <TableTab />
          </div>
          <div className='d-flex'>
            <div>
              <InputGroup>
                <FormControl
                  aria-label='Dollar amount (with dot and two decimal places)'
                  style={{ width: 100 }}
                />
                <InputGroup.Text style={{ backgroundColor: "#fff" }}>
                  <BiSearchAlt2 />
                </InputGroup.Text>
              </InputGroup>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div>
              <InputGroup>
                {/* <FormControl aria-label='Text input with dropdown button' /> */}

                <Button
                  style={{ backgroundColor: "#fff" }}
                  variant='outline-secondary'
                  id='button-addon1'
                >
                  <BiFilter />
                </Button>

                <DropdownButton
                  style={{ backgroundColor: "#fff" }}
                  variant='outline-secondary'
                  title='Filter'
                  id='input-group-dropdown-2'
                  align='end'
                >
                  <Dropdown.Item href='#'>Action</Dropdown.Item>
                  <Dropdown.Item href='#'>Another action</Dropdown.Item>
                  <Dropdown.Item href='#'>Something else here</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href='#'>Separated link</Dropdown.Item>
                </DropdownButton>
              </InputGroup>
            </div>
          </div>
        </div>
        <div className='tableDiv mt-4'>
          <TableData />
        </div>
      </div>
    </div>
  );
}
