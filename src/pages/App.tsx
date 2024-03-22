import { useState } from 'react';
import Conometer from "../components/Conometer";
import Form from "../components/Form";
import List from "../components/List";
import style from './App.module.scss';

import { ITask } from '../@types/task';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>()

  function selectTask (selectedTask : ITask) {
    setSelected(selectedTask)
    setTasks(oldTasks => oldTasks.map(task => ({
      ...task,
      select: task.id === selectedTask.id ? true : false
    })))
  }

  function endTask() {
    if(selected) {
      setSelected(undefined);
      setTasks(oldTasks => oldTasks.map(task => {
        if(task.id === selected.id) {
          return {
            ...task,
            selected: false,
            completado: true
          }
        }
        return task;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask}/>
      <Conometer selected={selected} endTask={endTask}/>
    </div>
  );
}

export default App;
