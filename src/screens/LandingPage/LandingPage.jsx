import React from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import "./style.css";

export const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="div-3">
        <Button
          className="button-3"
          labelText="Authentication"
          labelTextClassName="button-5"
          showIcon={false}
          stateLayerClassName="button-4"
          stateProp="enabled"
          style="filled"
          to="/authenticationpage"
        />
        <Header className="header-2" />
      </div>
    </div>
  );
};
