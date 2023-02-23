export const state ={
    recipe:{},
}

export const loadRecipe = async function(id){

      const res = await fetch(
        //'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc8f7'
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await res.json();

      if (!res.ok) throw new Error(`${data.message}${res.status})`);

      const { recipe } = data.data;
      state.recipe = {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        sourceUrl: recipe.source_Url,
        image: recipe.image_url,
        servings: recipe.servings,
        cookingTime: recipe.cooking_time,
        ingredients: recipe.ingredients,
      };

      console.log(state.recipe);

}