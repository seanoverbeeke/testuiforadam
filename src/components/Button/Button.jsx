/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import { Icon1 } from "../../icons/Icon1";
import { Icon15 } from "../../icons/Icon15";
import "./style.css";

export const Button = ({
  labelText = "Label",
  style,
  stateProp,
  showIcon,
  className,
  stateLayerClassName,
  labelTextClassName,
  to,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    style: style || "filled",

    state: stateProp || "enabled",

    showIcon: showIcon || false,
  });

  return (
    <Link
      className={`button ${state.style} ${state.state} ${className}`}
      to={to}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <div
        className={`state-layer style-${state.style} state-${state.state} show-icon-${state.showIcon} ${stateLayerClassName}`}
      >
        {((state.showIcon &&
          state.state === "disabled" &&
          state.style === "elevated") ||
          (state.showIcon &&
            state.state === "disabled" &&
            state.style === "text") ||
          (state.showIcon &&
            state.state === "disabled" &&
            state.style === "tonal") ||
          (state.showIcon && state.state === "enabled") ||
          (state.showIcon && state.state === "focused") ||
          (state.showIcon && state.state === "hovered") ||
          (state.showIcon && state.state === "pressed")) && (
          <Icon1
            className="icon"
            color={
              state.state === "disabled"
                ? "#1D1B20"
                : (state.state === "enabled" && state.style === "tonal") ||
                    (state.state === "focused" && state.style === "tonal") ||
                    (state.state === "hovered" && state.style === "tonal") ||
                    (state.state === "pressed" && state.style === "tonal")
                  ? "#4A4459"
                  : state.style === "filled"
                    ? "white"
                    : "#65558F"
            }
            opacity={state.state === "disabled" ? "0.38" : undefined}
          />
        )}

        {!state.showIcon && (
          <div className={`label-text ${labelTextClassName}`}>{labelText}</div>
        )}

        {state.showIcon &&
          state.state === "disabled" &&
          ["filled", "outlined"].includes(state.style) && (
            <Icon15 className="icon" />
          )}

        {state.showIcon && <div className="text-wrapper">{labelText}</div>}
      </div>
    </Link>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hovered",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "enabled",
      };
  }

  return state;
}

Button.propTypes = {
  labelText: PropTypes.string,
  style: PropTypes.oneOf(["filled", "tonal", "elevated", "text", "outlined"]),
  stateProp: PropTypes.oneOf([
    "enabled",
    "focused",
    "pressed",
    "hovered",
    "disabled",
  ]),
  showIcon: PropTypes.bool,
  to: PropTypes.string,
};
