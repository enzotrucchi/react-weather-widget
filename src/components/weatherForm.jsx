import React, { useState } from "react";

const WeatherForm = ({ onChangeCity }) => {
	const [city, setCity] = useState("");

	function onChange(e) {
		const value = e.target.value;

		if (value.length > 0) {
			setCity(value);
		}
	}

	function handleSubmit(e) {
		e.preventDefault();
		console.log(city);

		onChangeCity(city);
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" onChange={onChange} placeholder="Enter a city" />
			<button type="submit">Get Weather</button>
		</form>
	);
};

export default WeatherForm;
