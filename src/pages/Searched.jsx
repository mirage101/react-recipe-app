import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Favourite from "../components/Favourite";
// import IngredientsBox from "../components/IngredientsBox";
function Searched() {
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    const [hoveredRecipe, setHoveredRecipe] = useState(null);
    let params = useParams();
    console.log(params);
    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
        const recipes = await data.json();
        console.log(recipes);
        setSearchedRecipes(recipes.results);
    };

    const ingredientsBox = async (id) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${process.env.REACT_APP_API_KEY}`);
        const recipeIngredients = await data.json();
        setHoveredRecipe({ id, ingredients: recipeIngredients });
    };

    const removeIngredientsBox = () => {
        setHoveredRecipe(null);
    };

    useEffect(() => {
        getSearched(params.search);
        console.log(params.search);
    }, [params.search]);

    return (
        <Grid>
            {searchedRecipes.map((recipe) => {
                return (
                    <Card key={recipe.id} onMouseEnter={ingredientsBox(recipe.id)} onMouseLeave={removeIngredientsBox}>
                        <Favourite recipe={recipe} />
                        <Link to={"/recipe/" + recipe.id}>
                            <img src={recipe.image} alt={recipe.title} />
                            <p>{recipe.title}</p>
                        </Link>
                        {hoveredRecipe && hoveredRecipe.id === recipe.id && <IngredientsBox>{}</IngredientsBox>}
                    </Card>
                );
            })}
        </Grid>
    );
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    grid-gap: 3rem;
`;

const Card = styled.div`
    position: relative;
    img {
        width: 100%;
        height: 100%;
        border-radius: 3rem;
    }
    a {
        text-decoration: none;
    }
    p {
        text-align: center;
        padding: 1rem;
    }
`;

const IngredientsBox = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 3rem;
`;

export default Searched;
