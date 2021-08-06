import React from "react";
import PropTypes from "prop-types";

export const Counter = props => {
	let placeholder = "000000";

	let seconds = props.seconds.toString();
	let icon = <i className="far fa-clock"></i>;

	let output = (
		placeholder
			.split("")
			.slice(seconds.length)
			.join("") + seconds
	).split("");
	output.unshift(icon);

	let result = output.map((item, i) => {
		return (
			<div className="box" key={i}>
				{item}
			</div>
		);
	});

	return <div>{result}</div>;
};

Counter.propTypes = {
	seconds: PropTypes.string
};
