import styles from '../src/assets/styles/modules/Home.module.scss';
import { useRouter } from "../node_modules/next/router";
import Card from "../src/components/Card";
import ButtonPlayer from '../src/components/ButtonPlayer';
import { useState } from 'react';


export default function Home() {
  const [singlePlayer, setSinglePlayer] = useState<boolean>(false);
  const [multiplayer, setMultiplayer] = useState<boolean>(true);

  function handleChangeSinglePlayer() {
    if(!singlePlayer){
      setSinglePlayer(true);
      setMultiplayer(false); 
    }
  }
  function handleChangeMultiPlayer() {
    if(!multiplayer){
      setMultiplayer(true); 
      setSinglePlayer(false);
    }
  }

  return (
    <>
    <main className={styles.main}>
      <h2 className={styles.main__title}>Selecione o modo de jogo</h2>
      <div className={styles.main__btns}>
        <ButtonPlayer text={'1 Jogador'} onClick={handleChangeSinglePlayer} active={singlePlayer ? styles.active : null}/>
        <ButtonPlayer text={'2 Jogadores'} onClick={handleChangeMultiPlayer} active={multiplayer ? styles.active : null}/>
      </div>
      <Card players={singlePlayer}/>
    </main>
      
    </>
  )
}
