import React, { useEffect, useState } from "react";
import { Breadcrumb } from "antd";
import screenfull from "screenfull";
import "../home/css/includeBre.css";
import useBreadcrumb from "./useBreadcrumb";
import {
  FontColorsOutlined,
  FontSizeOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
} from "@ant-design/icons";

export default function HeaderBread() {
  const [full, setFull] = useState(false);
  useEffect(() => {
    screenfull.onchange((e) => {
      setFull(screenfull.isFullscreen);
    });
  }, []);
  const Bread = useBreadcrumb();
  // console.log("useBreadcrumb", Bread);
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
  const toggleFull = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle();
    }
  };
  return (
    <div className="includeBre">
      <div className="Bre">
        <Breadcrumb items={items} />
      </div>
      <div className="buttonall">
        {!full ? (
          <FullscreenOutlined onClick={toggleFull} />
        ) : (
          <FullscreenExitOutlined onClick={toggleFull} />
        )}{" "}
      </div>
      <div className="buttonall">
        <FontSizeOutlined />
      </div>
      <div className="buttonall">
        <FontColorsOutlined />
      </div>
    </div>
  );
}
