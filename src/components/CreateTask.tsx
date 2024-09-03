import React, { useState } from "react";
import TaskForm from "./TaskForm";
import Card from "./Card";
import styles from "./TaskManager.module.css";

interface Task {
  name: string;
  id: string;
  remainingHour: number;
}

const CreateTask: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);

  const addTask = (name: string, id: string, remainingHour: number) => {
    const newTask = { name, id, remainingHour };
    setTasks([...tasks, newTask]);
    setIsFormVisible(false);
  };

  return (
    <div className={styles.taskManager}>
      <div className={styles.cards}>
        {tasks.map((task, index) => (
          <Card
            key={index}
            name={task.name}
            id={task.id}
            remainingHour={task.remainingHour}
          />
        ))}
      </div>

      {isFormVisible && (
        <TaskForm addTask={addTask} setIsFormVisible={setIsFormVisible} />
      )}

      <button
        onClick={() => setIsFormVisible(true)}
        className={styles.create_task_button}
      >
        <div className={styles.inner}>+ Create a new task</div>
      </button>
    </div>
  );
};

export default CreateTask;
