const categories = document.querySelector("#categories");
console.log(`Number of categories: ${categories.children.length}`);

const item = document.querySelector(".item");
console.log(`Category: ${item.firstElementChild.textContent}`);
const itemList = item.lastElementChild;
console.log(`Elements: ${itemList.childElementCount}`);

const nextItem = item.nextElementSibling;
console.log(`Category: ${nextItem.firstElementChild.textContent}`);
const nextItemList = nextItem.lastElementChild;
console.log(`Elements: ${nextItemList.childElementCount}`);

const lastItem = nextItem.nextElementSibling;
console.log(`Category: ${lastItem.firstElementChild.textContent}`);
const lastItemList = lastItem.lastElementChild;
console.log(`Elements: ${lastItemList.childElementCount}`);




