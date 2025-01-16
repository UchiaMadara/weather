const weather = async () => {
  try {
    const url = await fetch("https://goweather.herokuapp.com/weather/Curitiba");
    const data = await url.json();
    console.log(data);
  } catch {}
};

weather();
