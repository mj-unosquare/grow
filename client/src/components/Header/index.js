import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import { HeaderLayout } from "./styled";
import routes from "Constants/routes";
import { Theme } from "Theme/theme";

const Header = () => {
  return (
    <HeaderLayout>
      <div className="nav">
        <div className="navHeader">
          <div className="navLeft">
            <Link to={routes.HOME}>grow.</Link>
          </div>

          <div className="navCenter">
            <Link to={routes.HOME}>grow.</Link>
          </div>

          <div className="navRight">
            <Link to={routes.LOCATION_HOME}>garden</Link>
          </div>
        </div>
      </div>
    </HeaderLayout>
  );
};

export default Header;
