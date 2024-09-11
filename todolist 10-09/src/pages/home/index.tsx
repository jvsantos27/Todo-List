import React, { useContext, useEffect } from "react";
import { TemaContext } from "../../context/TemaContext";

const Home = () => {
    const tema = useContext (TemaContext)
    return (
        <div>
            <h1>Home Works</h1>
            <h2>{tema}</h2>
        </div>
    )
}

export default Home;