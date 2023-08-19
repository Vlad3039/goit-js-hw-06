const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsListRef = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const itemOfList = document.createElement("li");
  itemOfList.textContent = ingredient;
  itemOfList.classList.add("item");
  ingredientsListRef.appendChild(itemOfList);
});
