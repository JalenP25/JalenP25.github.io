function createCardFromCity(city) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = 
    `<h3>${city.name}</h3>
    <small>population: ${city.population}</small>
    <p>You'll want to go see the ${city.attraction}</p>
    `
    return card
  }