import React from "react";
import { useState } from "react";
import WeatherForm from "./weatherForm";

const WeatherApp = () => {
	const [weather, setWeather] = useState(null);

	async function loadInfo(city = "London") {
		try {
			const request = await fetch(
				`${import.meta.env.VITE_APP_URL}&key=${
					import.meta.env.VITE_APP_KEY
				}&q=${city}`,
			);

			const json = await request.json();

			setWeather(json);

			console.log(json);
		} catch (error) {
			console.log(error);
		}
	}

	function handleChangeCity(city) {
		setWeather(null);
		loadInfo(city);
	}

	return (
		<div>
			<WeatherForm onChangeCity={handleChangeCity} />
			<div>{weather?.current.temp_c}</div>
		</div>
	);
};

export default WeatherApp;
