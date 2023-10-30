import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

const Cuisine = () => {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();
    console.log(params);
    const numRecipes = 9;
    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=${numRecipes}&cuisine=${name}`);
        const recipes = await data.json();
        setCuisine(recipes.results);
    };
    useEffect(() => {
        getCuisine(params.type);
    }, [params.type]);

    return (
        <>
            <Grid animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                {cuisine.map((recipe) => {
                    return (
                        <Card key={recipe.id}>
                            <Link to={"/recipe/" + recipe.id}>
                                <img src={recipe.image} alt={recipe.title} />
                                <p>{recipe.title}</p>
                            </Link>
                        </Card>
                    );
                })}
            </Grid>
        </>
    );
};
const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    grid-gap: 4rem;
    grid-row-gap: 1rem;
`;
const Card = styled.div`
    img {
        width: 100%;
        /* height: 100%; */
        border-radius: 2rem;
    }
    a {
        text-decoration: none;
    }
    h4 {
        text-align: center;
        padding: 2rem 1rem;
    }
    p {
        padding-top: 1rem;
        text-align: center;
        font-size: 1.5rem;
    }
`;
export default Cuisine;
