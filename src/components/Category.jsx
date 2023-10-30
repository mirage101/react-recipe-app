import { useState } from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks, GiAfrica, GiCroissant } from "react-icons/gi";
import { IoIosBeer } from "react-icons/io";
import { FaClover } from "react-icons/fa6";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Category() {
    const [isExpanded, setIsExpanded] = useState(false);
    const cuisines = [
        { to: "/cuisine/italian", icon: <FaPizzaSlice />, label: "Italian" },
        { to: "/cuisine/american", icon: <FaHamburger />, label: "American" },
        { to: "/cuisine/thai", icon: <GiNoodles />, label: "Thai" },
        { to: "/cuisine/japanese", icon: <GiNoodles />, label: "Japanese" },
        { to: "/cuisine/african", icon: <GiNoodles />, label: "African" },
        { to: "/cuisine/asian", icon: <GiNoodles />, label: "Asian" },
        { to: "/cuisine/british", icon: <GiNoodles />, label: "British" },
        { to: "/cuisine/chinese", icon: <GiNoodles />, label: "Chinese" },
        { to: "/cuisine/eastern-european", icon: <GiNoodles />, label: "Eastern European" },
        { to: "/cuisine/european", icon: <GiNoodles />, label: "European" },
        { to: "/cuisine/french", icon: <GiNoodles />, label: "French" },
        { to: "/cuisine/german", icon: <GiNoodles />, label: "German" },
        { to: "/cuisine/greek", icon: <GiNoodles />, label: "Greek" },
        { to: "/cuisine/indian", icon: <GiNoodles />, label: "Indian" },
        { to: "/cuisine/irish", icon: <GiNoodles />, label: "Irish" },
        { to: "/cuisine/korean", icon: <GiNoodles />, label: "Korean" },
        { to: "/cuisine/latin-american", icon: <GiNoodles />, label: "Latin American" },
        { to: "/cuisine/mediterranean", icon: <GiNoodles />, label: "Mediterranean" },
        { to: "/cuisine/mexican", icon: <GiNoodles />, label: "Mexican" },
        { to: "/cuisine/middle-eastern", icon: <GiNoodles />, label: "Middle eastern" },
        { to: "/cuisine/nordic", icon: <GiNoodles />, label: "Nordic" },
        { to: "/cuisine/spanish", icon: <GiNoodles />, label: "Spanish" },
        // Add more cuisines here...
    ];
    const visibleCuisines = isExpanded ? cuisines : cuisines.slice(0, 8);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <List>
                {visibleCuisines.map((cuisine, index) => (
                    <Slink key={index} to={cuisine.to}>
                        {cuisine.icon}
                        <h4>{cuisine.label}</h4>
                    </Slink>
                ))}
                <ExpandButton onClick={toggleExpansion}>{isExpanded ? "Show Less" : "Show More"}</ExpandButton>
            </List>
        </>
    );
}

const List = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
    margin: 2rem 0rem;
    max-width: 1200px;
    position: relative;
`;
const Slink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);

    h4 {
        color: white;
        font-size: 0.8rem;
        margin-top: 0.5rem;
    }
    svg {
        color: white;
        font-size: 1.5rem;
    }
    &.active {
        background: linear-gradient(to right, #f27121, #e94057);
    }
`;
const ExpandButton = styled.button`
    background: #3498db;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    margin-top: 1rem;
    position: absolute;
    right: -2rem;
    top: 0;
`;
export default Category;
