

const selectedById = document.querySelector("#categories");
console.log(selectedById);

const childrenEl = selectedById.children;
console.log(`В списке ${childrenEl.length} категории.`);


const itemEl = document.querySelectorAll(".item ul");
const numberOfEl = itemEl.forEach((elem) => console.log( elem.children.length));

const listEl = document.querySelectorAll("h2");
const categoryEl = listEl.forEach((elem) =>
    
    console.log("Категория:", elem.textContent)
    
);




