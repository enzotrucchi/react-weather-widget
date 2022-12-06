import React, { useState } from "react";

import styles from "./weatherForm.module.css";

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
		<form onSubmit={handleSubmit} className={styles.container}>
			<input
				type="text"
				onChange={onChange}
				placeholder="Enter a city"
				className={styles.input}
			/>
		</form>
	);
};

export default WeatherForm;
