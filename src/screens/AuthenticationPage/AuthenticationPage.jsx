import React from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import "./style.css";

export const AuthenticationPage = () => {
  return (
    <div className="authentication-page">
      <div className="div-2">
        <Button
          className="button-instance"
          labelText="Landing"
          labelTextClassName="button-2"
          showIcon={false}
          stateLayerClassName="design-component-instance-node"
          stateProp="enabled"
          style="filled"
          to="/landingpage"
        />
        <Header className="header-instance" />
      </div>
    </div>
  );
};
