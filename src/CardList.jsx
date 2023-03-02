import React from 'react';
import Cards from './Cards';

const CardList = ({ cards_data }) => {
    const cardComponent = cards_data.map((user, i) => {
        return <Cards key = {i} id={cards_data[i].id} userName={cards_data[i].userName} email={cards_data[i].email} />
    })
    return (
        <div>
        {cardComponent}
        </div>
    )
}

export default CardList