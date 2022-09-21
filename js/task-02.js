const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
ingedients.forEach(element => {
  const item = document.createElement("li");
  item.textContent = `${element}`;
  item.className = "item";
});

