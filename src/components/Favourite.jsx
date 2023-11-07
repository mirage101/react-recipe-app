import React, { useState, useEffect } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import styled from "styled-components";

const Favourite = ({ recipe }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]); // Initialize as an empty array

  useEffect(() => {
    // Initialize favorites from localStorage
    const storedValue = localStorage.getItem("favourites");
    if (storedValue !== null) {
      setFavoriteRecipes(JSON.parse(storedValue));
    }

    // Set the initial favorite state for the current recipe
    if (recipe && recipe.recipe && recipe.recipe.id && Array.isArray(favoriteRecipes)) {
      setIsFavorited(favoriteRecipes.includes(recipe.recipe.id));
    }
  }, [recipe, favoriteRecipes]); // Re-run when recipe or favoriteRecipes change

  const toggleFavorite = () => {
    const newFavorites = [...favoriteRecipes];
    const recipeId = recipe && recipe.recipe && recipe.recipe.id && Array.isArray(newFavorites) ? recipe.recipe.id : null;

    if (recipeId) {
      const recipeIndex = newFavorites.indexOf(recipeId);

      if (recipeIndex !== -1) {
        // Recipe is already a favorite, remove it
        newFavorites.splice(recipeIndex, 1);
      } else {
        // Add recipe to favorites
        newFavorites.push(recipeId);
      }

      // Update state using the functional form to ensure the latest state
      setIsFavorited((prevIsFavorited) => !prevIsFavorited);

      // Store the updated list in localStorage after the state has been updated
      setFavoriteRecipes(newFavorites);
      localStorage.setItem("favourites", JSON.stringify(newFavorites));
    }
  };

  return (
    <Heart className="favorite-icon" onClick={toggleFavorite}>
      {isFavorited ? <AiFillHeart /> : <AiOutlineHeart />}
    </Heart>
  );
};

const Heart = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
  cursor: pointer;
`;

export default Favourite;
