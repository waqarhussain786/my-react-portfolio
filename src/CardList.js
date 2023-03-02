import React from 'react'
import Card from './Card';
import './home.css'

const CardList = ({ RobotList }) => {

    return (
        <div className='center'>
            {RobotList.map((user, i) => {
                return <Card key={i} id={RobotList[i].id} name={RobotList[i].Name} email={RobotList[i].email} />
            })}
        </div>
    )
}

export default CardList;