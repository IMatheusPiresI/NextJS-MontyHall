import { useState } from 'react';
import styles from '../../assets/styles/modules/Card.module.scss';
import FormDoor from '../FormDoor';
import { useRouter } from 'next/router';
import SinglePlayerMessage from '../SinglePlayerMessage';

interface CardProps {
    players: boolean;
}

export default function Card({players}: CardProps){
    const router = useRouter();
    const [qtyDoors, setQtyDoors] = useState<number>(1);
    const [doorhaveGift, setDoorHaveGift] = useState<number>(1);


    function handleIncremmentDoors() {
        setQtyDoors(qtyDoors + 1);
    }

    function handleDecrementDoors() {
        setQtyDoors(qtyDoors - 1);
    }

    function handleIncrementGiftDoor() {
        if(doorhaveGift < qtyDoors){
            setDoorHaveGift(doorhaveGift + 1);
        }
    }

    function handleDecrementGiftDoor() {
        setDoorHaveGift(doorhaveGift - 1);
    }

    function handleStartGame() {
        localStorage.removeItem('doors');
        if(players) {
            const randomDoorHaveGift = Math.round(Math.random() * qtyDoors)
            router.push(`/game/${qtyDoors}/${randomDoorHaveGift === 0 ? 1 : randomDoorHaveGift}`)
        }else {
            router.push(`/game/${qtyDoors}/${doorhaveGift}`)
        }
    }

    return(
        <div className={styles.card}>
            <div className={styles.card__line}>
                <div className={`${styles.card__block} ${styles.card__block__montyhall}`}>
                    <h1>Monty Hall</h1>
                </div>
                <div className={styles.card__block}>
                    <FormDoor title='Quantidade de Portas' num={qtyDoors} increment={handleIncremmentDoors} decrement={handleDecrementDoors}/>
                </div>
            </div>
            <div className={styles.card__line}>
                {players ? 
                <div className={`${styles.card__block} ${styles.card__block_message}`}>
                    <SinglePlayerMessage/>
                </div> :
                <div className={styles.card__block}>
                    <FormDoor title='Porta Premiada' num={doorhaveGift} qtyDoors={qtyDoors} increment={handleIncrementGiftDoor} decrement={handleDecrementGiftDoor}/>
                </div>
                }
                <div className={`${styles.card__block} ${styles.card__block__start}`}>
                    <button onClick={handleStartGame}>Iniciar</button>
                </div>
            </div>
        </div>
    )
}