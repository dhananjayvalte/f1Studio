import moment from "moment";
import React from "react";
import { Badge, Table } from "react-bootstrap";

const tableD = [
  {
    prodInfo: "2 Classic Collection Garage Door, 2 Entry Door",
    cartName: "Johnson_Classic14209123",
    shippingPoint: "Russia Plant",
    createdBy: "Manoj Bajpayee",
    expiry: moment().add(6, "d"),
    isNew: false,
  },
  {
    prodInfo: "2 Classic Collection Garage Door, 2 Entry Door",
    cartName: "Johnson_Classic14209123",
    shippingPoint: "Russia Plant",
    createdBy: "Manoj Bajpayee",
    expiry: moment().add(90, "d"),
    isNew: true,
  },
  {
    prodInfo: "2 Classic Collection Garage Door, 2 Entry Door",
    cartName: "Johnson_Classic14209123",
    shippingPoint: "Russia Plant",
    createdBy: "Manoj Bajpayee",
    expiry: moment().add(56, "d"),
    isNew: true,
  },
  {
    prodInfo: "2 Classic Collection Garage Door, 2 Entry Door",
    cartName: "Johnson_Classic14209123",
    shippingPoint: "Russia Plant",
    createdBy: "Manoj Bajpayee",
    expiry: moment().add(6, "d"),
    isNew: false,
  },
  {
    prodInfo: "2 Classic Collection Garage Door, 2 Entry Door",
    cartName: "Johnson_Classic14209123",
    shippingPoint: "Russia Plant",
    createdBy: "Manoj Bajpayee",
    expiry: moment().add(6, "d"),
    isNew: false,
  },
  {
    prodInfo: "2 Classic Collection Garage Door, 2 Entry Door",
    cartName: "Johnson_Classic14209123",
    shippingPoint: "Russia Plant",
    createdBy: "Manoj Bajpayee",
    expiry: moment().add(40, "d"),
    isNew: true,
  },
];

export default function TableData() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Product Information</th>
          <th>Cart Name</th>
          <th>Shipping Point</th>
          <th>Created by</th>
          <th>Expiry</th>
        </tr>
      </thead>
      <tbody>
        {tableD.map((data, i) => {
          return (
            <tr key={i}>
              <td>{data.prodInfo}</td>
              <td>{data.cartName}</td>
              <td>{data.shippingPoint}</td>
              <td>{data.createdBy}</td>
              <td
                style={
                  moment(data.expiry).diff(moment(), "d") < 6
                    ? { color: "#E67E22" }
                    : {}
                }
              >
                Expires {moment(data.expiry).fromNow()}
                &nbsp;&nbsp;&nbsp;
                {data.isNew && <Badge bg='info'>New</Badge>}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
