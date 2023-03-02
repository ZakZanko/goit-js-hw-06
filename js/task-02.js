const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("#ingredients");
const createLi = (el) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = el;
  ingredientItem.classList.add("item");
  console.log(ingredientItem);
  ingredientsList.append(ingredientItem);
  return ingredientItem;
};
const list = ingredients.map((ingredients) => createLi(ingredients));
console.log(list);
