import React from "react";
import Cards from "./Cards";
import { cards_data } from "./cards_object";


const App = () => {
    return (
        <>
            <Cards id={cards_data[0].id} userName={cards_data[0].userName} email={cards_data[0].email} />
            <Cards id={cards_data[1].id} userName={cards_data[1].userName} email={cards_data[1].email} />
            <Cards id={cards_data[2].id} userName={cards_data[2].userName} email={cards_data[2].email} />
            <Cards id={cards_data[3].id} userName={cards_data[3].userName} email={cards_data[3].email} />
            <Cards id={cards_data[4].id} userName={cards_data[4].userName} email={cards_data[4].email} />
        </>
    );
}

export default App;