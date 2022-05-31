import styles from '../../assets/styles/modules/Gift.module.scss'

export default function Gift() {
    return(
        <div className={styles.gift}>
            <div className={styles.gift__cover}></div>
            <div className={styles.gift__body}></div>
            <div className={styles.gift__horizontal_link}></div>
            <div className={styles.gift__vertical_link}></div>
        </div>
    )
}