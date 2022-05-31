import Door from '../../../src/components/Door/index';
import styles from '../../../src/assets/styles/modules/Game.module.scss';
import { useContext, useEffect } from 'react';
import { DoorContext } from '../../../src/contexts/DoorContext';
import { useRouter } from '../../../node_modules/next/router';

export default function Game() {
    const { doors, createDoors } = useContext(DoorContext)
    const router = useRouter();

    function handleResetGame() {
        router.push('/')
    }

    return(
        <div className={styles.game}>
            <div className={styles.game__doors}>
                {doors.map((door) => (
                    <Door key={door.door.num} door={door.door}/>
                ))}
            </div>
            <button onClick={handleResetGame}>Reiniciar Jogo</button>
        </div>
    )
}