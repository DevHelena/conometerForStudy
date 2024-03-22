import { ITask } from '../../../@types/task';
import style from './Item.module.scss';

interface Props extends ITask{
  selectTask : (selectedTask : ITask) => void
}

export default function Item(
  { task, time, select, complete, id, selectTask}: Props
  ) {
  
  return (
    <li 
      className={`${style.item} ${select && style.itemSelecionado} ${complete && style.itemCompletado}`} 
      onClick={() => !complete && selectTask({ task, time, select, complete, id })}
    >
      <h3>{task}</h3>
      <span>{time}</span>
      {complete && <span className={style.concluido} aria-label="tarefa completada"></span>}
    </li>
  )
}
