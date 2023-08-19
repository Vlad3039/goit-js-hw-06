const categoriesListRef = document.querySelector("#categories");

const categoryItemRef = categoriesListRef.querySelectorAll("li.item");

console.log(`Number of categories: ${categoryItemRef.length}`);

categoryItemRef.forEach((item) => {
  const categoryTitleRef = item.querySelector("h2").textContent;
  const categoryElemRef = item.querySelectorAll("ul li");
  console.log(`Category: ${categoryTitleRef}`);
  console.log(`Elements: ${categoryElemRef.length}`);
});
