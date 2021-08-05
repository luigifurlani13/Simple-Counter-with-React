import React from "react";
import PropTypes from "prop-types";

export const Counter = props => {
	let placeholder = "000000";
	// let output = placeholder + props.seconds;

	let length = props.seconds.length;

	let output = placeholder.split("").slice(length);

	return <div>{output}</div>;
};

Counter.propTypes = {
	seconds: PropTypes.string
};
