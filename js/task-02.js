const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listOfIngredients = document.querySelector("#ingredients");

for (const ingredient of ingredients) {
  const item = document.createElement("li");
  item.textContent = `${ingredient}`;
  item.className = `item`;
  listOfIngredients.append(item);
}

