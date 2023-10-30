import { 
    API_URL,
    RECIPE_SEARCH_URL,
    RECIPE_DETAILS_URL,
    PER_PAGE,
    headers
  } from '../utils/api'
  
  import { handleResponse, handleError } from '../utils/requestHelpers'
  
  export const searchRecipes = async (query, page = 1) => {
  
    const params = `?q=${query}&page=${page}&per_page=${PER_PAGE}`;
  
    try {
      const response = await fetch(`${RECIPE_SEARCH_URL}${params}`, {
        headers
      });
  
      return handleResponse(response);
  
    } catch (error) {
      handleError(error);
    }
  
  }
  
  export const getRecipe = async (id) => {
  
    try {
      const response = await fetch(`${RECIPE_DETAILS_URL}${id}`, {
        headers
      });
  
      return handleResponse(response);
  
    } catch (error) {
      handleError(error); 
    }
  
  }
  