import style from './Cronometro.module.scss';
import Clock from './Clock'
import Button from "../Button";
import { timeForSecond } from '../../common/utils/time';
import { ITask } from '../../@types/task';
import { useEffect, useState } from 'react';

interface Props {
  selected : ITask | undefined,
  endTask: () => void
}

export default function Conometer ({ selected, endTask }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if(selected?.time) {
      setTime(timeForSecond(selected.time));
    }
  },[selected]);

  function regressive(contador: number = 0) {
    setTimeout(() => {
      if(contador > 0) {
        setTime(contador - 1);
        return regressive(contador - 1);
      }
      endTask();
    }, 1000)
  }

  return (

    <div className={style.cronometro}>
      <p className={style.titulo}>Chose a card and start the conometer</p>
      <div className={style.relogioWrapper}>
        <Clock time={time}/>
      </div>
      <Button onClick={() => regressive(time)}>
        Start
      </Button>
    </div>
  )
}