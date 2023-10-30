import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Similar from "../components/Similar";
function Recipe() {
    let params = useParams();
    const [details, setDetails] = useState({});

    const [activeTab, setActiveTab] = useState("instructions");

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const detailData = await data.json();
        setDetails(detailData);
    };

    useEffect(() => {
        fetchDetails(params.name);
    }, [params.name]);

    return (
        <>
            <DetailWrapper>
                <div>
                    <h2>{details.title}</h2>
                    <h3 className="cuisine">
                        Cusines:
                        {details.cuisines && details.cuisines.map((cuisine) => <div key={cuisine}>&nbsp;{cuisine}&nbsp;</div>)}
                    </h3>
                    {console.log(details.winePairing)}
                    <img src={details.image} alt="" />
                    <div className="pairing-wines">
                        <h5>
                            <span>Suggested wines for this dish:</span>
                            {details.winePairing && details.winePairing.pairedWines.map((wine) => <div key={wine}>&nbsp;{wine}&nbsp;</div>)}
                        </h5>
                        <h6>Wine pairing explained: {details.winePairing && details.winePairing.pairingText}</h6>
                    </div>
                </div>
                <Info>
                    <p className="servings">Servings: {details.servings}</p>
                    <p>Time for preparing: {details.preparationMinutes} min</p>

                    <p className="time">Cooking time: {details.cookingMinutes} min</p>
                    <p>Ready for: {details.readyInMinutes} min</p>

                    <Button className={activeTab === "ingredients" ? "active" : ""} onClick={() => setActiveTab("ingredients")}>
                        Ingredients
                    </Button>
                    <Button className={activeTab === "instructions" ? "active" : ""} onClick={() => setActiveTab("instructions")}>
                        Instructions
                    </Button>
                    {activeTab === "instructions" && (
                        <div>
                            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
                            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
                        </div>
                    )}
                    {activeTab === "ingredients" && (
                        <ul>
                            {details.extendedIngredients.map((ingredient) => (
                                <li key={ingredient.id}>{ingredient.original}</li>
                            ))}
                        </ul>
                    )}
                </Info>
            </DetailWrapper>
            <Similar />
        </>
    );
}

const DetailWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;
    .active {
        background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
        color: white;
    }
    h2 {
        margin-bottom: 2rem;
    }
    h3 {
        font-size: 1.1rem;
        font-weight: normal;
        line-height: 1.5rem;
    }
    img {
    }
    li {
        font-size: 1.2rem;
        line-height: 2.5rem;
    }
    ul {
        margin-top: 2rem;
    }
    .cuisine {
        display: flex;
        font-weigth: bold;
    }
    h5 {
        display: flex;
        padding: 1rem 0 1rem 0;
    }
`;
const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 1rem;
    font-weight: 600;
`;

const Info = styled.div`
    margin-left: 4rem;
`;

export default Recipe;
