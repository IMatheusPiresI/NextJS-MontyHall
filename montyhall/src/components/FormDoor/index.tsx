import styles from '../../assets/styles/modules/FormDoor.module.scss';

interface FormDoorProps {
    title: string;
    num: number;
    qtyDoors?: number;
    increment: () => void;
    decrement: () => void;
}

export default function FormDoor({title, num, qtyDoors, increment, decrement}: FormDoorProps) {

    return(
        <div className={styles.formDoor}>
            <h2>{title}</h2>
            <p>{num}</p>
            <div className={styles.formDoor__box_buttons}>
                <button 
                className={`${styles.formDoor__box_buttons__btn} ${num === 1 ? styles.disabled : null}`}
                onClick={decrement}
                disabled={num === 1}
                >-</button>
                <button 
                className={`${styles.formDoor__box_buttons__btn} ${num === 150 || num === qtyDoors ? styles.disabled : null}`}
                onClick={increment}
                disabled={num === 150 || num === qtyDoors}
                >+</button>
            </div>
        </div>
    )
}
