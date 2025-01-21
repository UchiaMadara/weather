const weather = async () => {
  try {
    const url = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"
    );
    const data = await url.json();
    console.log(data);
  } catch {}
};

weather();
