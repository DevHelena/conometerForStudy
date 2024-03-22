import React, { useState } from 'react';
import Button from '../Button';
import style from './Formulario.module.scss';
import { ITask } from '../../@types/task';
import { v4 as uuidv4 } from 'uuid';

interface IProps {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

export default function Form ({ setTasks } : IProps) {

  const [task, setTask] = useState("");
  const [time, setTime] = useState("00:00");

  function addTask (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTasks(oldTasks => [
      ...oldTasks,
      {
        task,
        time,
        select: false,
        complete: false,
        id: uuidv4()
      }
    ])
    setTask("");
    setTime("00:00");
    

    return
  }

  return (
    <form className={style.novaTarefa} onSubmit={addTask}>

      <div className={style.inputContainer}>
        <label>

        </label>
        <input
          type="text"
          name="task"
          value={task}
          onChange={e => setTask(e.target.value)}
          id="task"
          placeholder="What do you want to study"
          required
        />    
      </div>

      <div  className={style.inputContainer}>
        <label>

        </label>
        <input
          type="time"
          step="1"
          name="tempo"
          value={time}
          onChange={e => setTime(e.target.value)}
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>

      <Button type='submit'>
        Add
      </Button>          
    </form>
    )
}