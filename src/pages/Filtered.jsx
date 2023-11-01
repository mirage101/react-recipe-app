import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Filtered() {
    let params = useParams();
    const numRecipes = 10;
    //console.log(params);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const getFiltered = async (string) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/findByNutrients?apiKey=${process.env.REACT_APP_API_KEY}&number=${numRecipes}${string}`);
        const recipes = await data.json();
        setFilteredRecipes(recipes);
        console.log(recipes);
    };

    useEffect(() => {
        getFiltered(params.string);
    }, [params.string]);

    return (
        <Grid>
            {filteredRecipes.map((recipe) => {
                return (
                    <Card key={recipe.id}>
                        <Link to={"/recipe/" + recipe.id}>
                            <img src={recipe.image} alt={recipe.title} />
                            <p class="title">{recipe.title}</p>
                            <p class="calories">{recipe.calories} calories</p>
                            <p class="carbs">{recipe.carbs} carbs</p>
                            <p class="fat">{recipe.fat} fat</p>
                            <p class="protein">{recipe.protein} proteins</p>
                        </Link>
                    </Card>
                );
            })}
        </Grid>
    );
}

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    justify-content: space-between;
`;
const Card = styled.div`
    width: 30%;
    margin: 0 1rem 2rem 1rem;
    img {
        width: 100%;

        border-radius: 3rem;
        margin-bottom: 1rem;
    }
    .title {
        font-size: 2rem;
    }
    a {
        text-decoration: none;
    }
    h4 {
        text-align: center;
        padding: 1rem;
    }
`;

export default Filtered;
