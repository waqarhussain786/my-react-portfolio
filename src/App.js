import React from 'react'
import CardList from './CardList';
import SearchBox from './SearchBox';
import { RobotList } from './robotsList';

const App = () => {
    return (
        <div className='tc'>
            <h1>RoboFriends</h1>
            
            <SearchBox />
            <CardList RobotList={RobotList} />
        </div>
    )
}

export default App