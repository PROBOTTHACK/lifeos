import React from 'react'
import { useTasks } from '../../../context/TaskContext'

export function useActiveTask() {
    const { state } = useTasks();
    const activeTask = state.tasks.find(
        (task) => task.status === "active"
    );
  return activeTask || null;
}
