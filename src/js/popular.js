import { getAllData } from "./service/api";

const ulPopulation = document.querySelector('.ul-population');


  getAllData('recipes/popular')
    .then(response => {
      const recipes = response;
      console.log(recipes);
      renderPopularRecipes(recipes);
    })
    .catch(error => {
      console.error('Помилка:', error);
    });


function renderPopularRecipes(recipes) {
  const recipeHTML = recipes.map((recipe, index) => {
    const isLastElement = index === recipes.length - 1;
    const liClass = isLastElement ? "li-population last-element" : "li-population";

    return `
      <li class="${liClass}">
        <div class="div-a-population">
          <img src="${recipe.preview}" alt="" class="img-population">
          <div class="text-container-population">
            <h3 class="title-dishes">${recipe.title}</h3>
            <p class="paragraph-title">${recipe.description}</p>
          </div>
        </div>
      </li>
    `;
  }).join('');

  ulPopulation.innerHTML = recipeHTML;
}

