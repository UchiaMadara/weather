const weather = async () => {
  try {
    const url = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=a766f589d3657ac549d890a87051ab5a"
    );

    const data = await url.json();
    console.log(data);
  } catch {}
};

weather();
