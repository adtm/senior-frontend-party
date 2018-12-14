import React from "react";
import PropTypes from "prop-types";

import { Container, Logo, Icon, Button } from "./Navigation.styles";

import TesonetBlackLogo from "../../assets/images/logotype-testio.png";
import IconLogout from "../../assets/icons/ico-logout.svg";

const Navigation = ({ onClick }) => (
  <Container>
    <Logo alt="testio." src={TesonetBlackLogo} />
    <Button onClick={onClick}>
      <Icon alt="logout-button" src={IconLogout} />
      <span>Logout</span>
    </Button>
  </Container>
);

Navigation.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Navigation;
