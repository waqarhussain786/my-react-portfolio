import React from 'react'
import CardList from './CardList.js';
import { RobotList } from './robotsList.js';

const App = () => {
    return (
        <div className='tc'>
            <CardList RobotList={RobotList} />
        </div>
    )
}

export default App