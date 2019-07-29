import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import { HeaderLayout } from "./styled";
import { Routes } from "Constants";

const Header = () => {
  return (
    <HeaderLayout>
      <div className="nav">
        <div className="navHeader">
          <div className="navLeft">
            <Link to={Routes.HOME}>grow.</Link>
          </div>

          <div className="navCenter">
            <Link to={Routes.HOME}>grow.</Link>
          </div>

          <div className="navRight">
            <Link to={Routes.LOCATION_HOME}>garden</Link>
          </div>
        </div>
      </div>
    </HeaderLayout>
  );
};

export default Header;
