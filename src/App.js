import React from "react";
import { cards_data } from "./cards_object";
import CardList from "./CardList";


const App = () => {
    return (
        <CardList cards_data={cards_data}/>
    );
}

export default App;