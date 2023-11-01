import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Nutrients = () => {
    const navigate = useNavigate();
    const [string, setString] = useState("");
    //nutrients
    const [maxCarbs, setMaxCarbs] = useState(10);
    const [maxCals, setMaxCals] = useState(50);
    const [maxFat, setMaxFat] = useState(1);
    const [maxSugar, setMaxSugar] = useState(0);

    // Checkbox state
    const [carbsActive, setCarbsActive] = useState(true);
    const [calsActive, setCalsActive] = useState(true);
    const [fatActive, setFatActive] = useState(true);
    const [sugarActive, setSugarActive] = useState(true);

    const submitHandler = () => {
        const buildString = [carbsActive ? `&maxCarbs=${maxCarbs}` : "", calsActive ? `&maxCals=${maxCals}` : "", fatActive ? `&maxFat=${maxFat}` : "", sugarActive ? `&maxSugar=${maxSugar}` : ""]
            .filter(Boolean) // Remove empty strings
            .join("&");
        setString(buildString);
        console.log(buildString);
        navigate(`/filtered/${buildString}`);
    };
    // https://api.spoonacular.com/recipes/findByNutrients?minCarbs=10&maxCarbs=50&number=2

    return (
        <div>
            <h1>Nutrient Filter App</h1>
            <div className="nutrients-select">
                <div className="nutrient">
                    <div>
                        <input type="checkbox" checked={carbsActive} onChange={() => setCarbsActive(!carbsActive)} />
                        <h2>Carbs</h2>
                    </div>
                    <div>
                        <label>Max:</label>
                        <input type="range" min={10} max={100} value={maxCarbs} onChange={(e) => setMaxCarbs(e.target.value)} disabled={!carbsActive} />
                        <span>{maxCarbs}</span>
                    </div>
                </div>
                <div className="nutrient">
                    <div>
                        <input type="checkbox" checked={calsActive} onChange={() => setCalsActive(!calsActive)} />
                        <h2>Calories</h2>
                    </div>
                    <div>
                        <label>Max:</label>
                        <input type="range" min={50} max={1000} value={maxCals} onChange={(e) => setMaxCals(e.target.value)} disabled={!calsActive} />
                        <span>{maxCals}</span>
                    </div>
                </div>

                <div className="nutrient">
                    <div>
                        <input type="checkbox" checked={fatActive} onChange={() => setFatActive(!fatActive)} />
                        <h2>Fat</h2>
                    </div>
                    <div>
                        <label>Max:</label>
                        <input type="range" min={10} max={100} value={maxFat} onChange={(e) => setMaxFat(e.target.value)} disabled={!fatActive} />
                        <span>{maxFat}</span>
                    </div>
                </div>
                <div className="nutrient">
                    <div>
                        <input type="checkbox" checked={sugarActive} onChange={() => setSugarActive(!sugarActive)} />
                        <h2>Sugar</h2>
                    </div>
                    <div>
                        <label>Max:</label>
                        <input type="range" min={10} max={100} value={maxSugar} onChange={(e) => setMaxSugar(e.target.value)} disabled={!sugarActive} />
                        <span>{maxSugar}</span>
                    </div>
                </div>
            </div>

            <button onClick={submitHandler}>Fetch Recipes</button>
        </div>
    );
};

export default Nutrients;
