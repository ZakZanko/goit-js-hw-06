const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("#ingredients");
const liArr = [];
ingredients.forEach((el) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = el;
  ingredientItem.className = "item";
  liArr.push(ingredientItem);
});
ingredientsList.append(...liArr);
