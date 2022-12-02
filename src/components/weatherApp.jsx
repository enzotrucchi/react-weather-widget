import React, { useState, useEffect } from "react";
import WeatherForm from "./weatherForm";
import WeatherMainInfo from "./weatherMainInfo";

const WeatherApp = () => {
	const [weather, setWeather] = useState(null);

	useEffect(() => {
		loadInfo();
	}, []);

	useEffect(() => {
		document.title = `Weather App | ${weather?.location.name ?? ""}`;
	}, [weather]);

	async function loadInfo(city = "Córdoba") {
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
			<WeatherMainInfo weather={weather} />
		</div>
	);
};

export default WeatherApp;
