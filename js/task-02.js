const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsEL = document.querySelector("#ingredients");

const listEl = ingredients.map(ingredient => {
  const liEl = document.createElement("li");
   liEl.textContent = ingredient;
  return liEl;
})

ingredientsEL.append(...listEl);
 


