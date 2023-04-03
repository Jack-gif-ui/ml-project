import React from "react";
import { Breadcrumb } from "antd";
import "../home/css/includeBre.css";
import useBreadcrumb from "./useBreadcrumb";
import { useNavigate } from "react-router-dom";
export default function HeaderBread() {
  const Bread = useBreadcrumb();

  //console.log("useBreadcrumb", Bread);

  const items = [
    /* {
      title: "Home",
    },
    {
      title: <a href="">Application Center</a>,
    },
    {
      title: <a href="">Application List</a>,
    }, */
  ];

  Bread.map((ele, index) =>
    items.push({
      title: <a href="http://localhost:3000/dashboard">{ele.label}</a>,
    })
  );

  return (
    <div className="includeBre">
      <div className="Bre">
        <Breadcrumb items={items} />
      </div>
      <div className="buttonall">button</div>
    </div>
  );
}
