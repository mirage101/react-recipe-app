import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link, useParams } from "react-router-dom";

const Similar = () => {
    const [similar, setSimilar] = useState([]);
    const params = useParams();
    console.log(params);
    useEffect(() => {
        getSimilar();
    }, [params.name]);

    const getSimilar = async () => {
        const numRecipes = 9;
        let data = [];
        //set data in localstorage for cached data
        const check = localStorage.getItem("similar");

        if (check) {
            setSimilar(JSON.parse(check));
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/${params.name}/similar?apiKey=${process.env.REACT_APP_API_KEY}&number=${numRecipes}`);
            console.log(api);
            data = await api.json();
            localStorage.setItem("similar", JSON.stringify(data));
            console.log(data);
            setSimilar(data);
        }
        console.log(data);
    };

    return (
        <div>
            <Wrapper>
                <h3>Similar Recipes:</h3>
                <Splide
                    options={{
                        perPage: 3,
                        arrows: false,
                        paginations: false,
                        drag: "free",
                        gap: "5rem",
                    }}
                >
                    {console.log("similar " + similar)}
                    {similar &&
                        similar.map((recipe) => {
                            console.log(recipe);
                            return (
                                <SplideSlide key={recipe.id}>
                                    <Card>
                                        <Link to={"/recipe/" + recipe.id}>
                                            <p>{recipe.title}</p>
                                            <img src={`https://spoonacular.com/recipeImages/${recipe.id}-556x370.jpg`} alt={recipe.title} />
                                            <Gradient />
                                        </Link>
                                    </Card>
                                </SplideSlide>
                            );
                        })}
                </Splide>
            </Wrapper>
        </div>
    );
};

const Wrapper = styled.div`
    margin: 4rem 0rem;
`;
const Card = styled.div`
    min-height: 14rem;
    border-radius: 1rem;
    overflow: hidden;
    position: relative;
    /* background: url("https://plus.unsplash.com/premium_photo-1670963025556-c2d4dc880a45") no-repeat center;
    background-size: cover; */
    p {
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 35%;
        transform: translate(-50%, -25%);
        color: white;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 1.5rem;
        height: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img {
        width: 100%;
        height: 100%;
    }
`;

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;
export default Similar;
