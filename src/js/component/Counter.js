import React from "react";
import PropTypes from "prop-types";

export const Counter = props => {
	return <div>{props.seconds}</div>;
};

Counter.propTypes = {
	seconds: PropTypes.string
};
