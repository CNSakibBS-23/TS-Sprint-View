import React, { SyntheticEvent, useState } from "react";
import styles from "./TaskForm.module.css";
import { Dispatch, SetStateAction } from "react";

interface TaskFormProps {
  addTask: (name: string, id: string, remainingHour: number) => void;
  setIsFormVisible: Dispatch<SetStateAction<boolean>>;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask, setIsFormVisible }) => {
  const [taskName, setTaskName] = useState<string>("");
  const [taskId, setTaskId] = useState<string>("TS - 23");
  const [remainingHour, setRemainingHour] = useState<number>(0);

  const handleSave = (e: SyntheticEvent) => {
    e.preventDefault();
    if (remainingHour > 0) {
      addTask(taskName, taskId, remainingHour);

      setTaskName("");
      setRemainingHour(0);
    }
    return;
  };

  return (
    <form className={styles.task_form} onSubmit={handleSave}>
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className={styles.task_input}
        required={true}
      />
      <div className={styles.spent_hours}>
        <div>
          <span>Estimated hour: </span>
          <input
            type="number"
            value={remainingHour}
            onChange={(e) => setRemainingHour(parseFloat(e.target.value))}
            required
          />
        </div>
        <div className={styles.buttons}>
          <button
            className={styles.cancel_button}
            onClick={() => {
              setIsFormVisible(false);
            }}
          >
            Cancel
          </button>
          <button className={styles.save_button}>Save</button>
        </div>
      </div>
    </form>
  );
};

export default TaskForm;
