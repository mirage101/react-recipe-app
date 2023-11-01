import React from "react";
import { Veggies } from "../components/Veggies";
import Popular from "../components/Popular";
import { motion } from "framer-motion";
import Random from "../components/Random";

const Home = () => {
    return (
        <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <Veggies />
            <Popular />
            <Random />
        </motion.div>
    );
};

export default Home;
