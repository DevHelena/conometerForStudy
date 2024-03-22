import style from './Relogio.module.scss';

interface Props {
  time: number | undefined
}

export default function Clock({ time = 0 }: Props) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minuteTen, minuteOne]: any = String(minutes).padStart(2, '0');
  const [secondTen, secondOne]: any = String(seconds).padStart(2, '0');  
  
  return (
    <>
      <span className={style.relogioNumero}>{minuteTen}</span>
      <span className={style.relogioNumero}>{minuteOne}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{secondTen}</span>
      <span className={style.relogioNumero}>{secondOne}</span>
    </>
  )
}