import { useContext, useEffect, useState } from 'react';
import styles from '../../../src/assets/styles/modules/Door.module.scss'
import { IDoor, DoorContext } from '../../contexts/DoorContext';
import Gift from '../Gift/index';

export default function Door({door}: IDoor) {
    const { doors, setNewDoors } = useContext(DoorContext);
    
    function handleChangeSelected() {
        const newArray = doors;
        newArray.map((newDoor) => {
            newDoor.door.active = false;
            if(newDoor.door.num === door.num){
                newDoor.door.active = true;
            }
        })
        localStorage.setItem('doors', JSON.stringify(newArray));
        setNewDoors(newArray);
        console.log(newArray)
    }

    function handleOpen(e) {
        e.stopPropagation();
        const newArray = doors;
        newArray.map((newDoor) => {
            if(newDoor.door.num === door.num){
                newDoor.door.opened = true;
            }
        })
        localStorage.setItem('doors', JSON.stringify(newArray));
        setNewDoors(newArray);
    }


    function renderDoor() {
        return(
            <div className={styles.area__door}>
                <p>{door.num}</p>
                <div onClick={handleOpen}></div>
            </div>
        )
    }


    return(
        <div className={styles.area} onClick={handleChangeSelected}>
            <div className={`${styles.area__frame} ${door.active && door.opened === false ? styles.active : ''}`}>
                {door.opened === false ? renderDoor() : door.haveGift ? <Gift/> : false}
            </div>
            <div className={styles.floor}></div>
        </div>
    )
}