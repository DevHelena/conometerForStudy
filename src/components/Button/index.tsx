import style from './Botao.module.scss';

interface Props {
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void,
  children?: React.ReactNode
}

export default function Button({ onClick, type, children }: Props) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={style.botao}
    >
      {children}
    </button>
  )
}