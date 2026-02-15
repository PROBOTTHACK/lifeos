import { createContext, useContext, useReducer } from "react";

/*
ACTIONS
- SET_ACTIVE_TASK
- START_POMODORO
- PAUSE_POMODORO
- TICK
- COMPLETE_SESSION
- ADD_TASK
- UPDATE_TASK
- DELETE_TASK
*/

// ---------- Initial State ----------

const initialState = {
  tasks: [
    {
      id: "1",
      title: "Task 1",
      description: "description of task 1",

      status: "active", // "todo" | "active" | "completed"

      pomodoroConfig: {
        workMinutes: 60,
        breakMinutes: 15,
        totalSessions: 2,
      },

      pomodoroRuntime: {
        currentSession: 1,
        secondsRemaining: 60 * 60,
        isRunning: false,
        mode: "work", // "work" | "break"
      },

      subtodos: [
        { id: "s1", text: "Subtask example", completed: false }
      ],

      resources: [
        { id: "r1", type: "link", value: "https://example.com" }
      ],

      deepMinutesLogged: 0,
    },
  ],
};

// ---------- Reducer ----------

function taskReducer(state, action) {
  switch (action.type) {
    
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter(
          (task) => task.id !== action.payload
        ),
      };

    case "SET_ACTIVE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) => ({
          ...task,
          status:
            task.id === action.payload ? "active" :
            task.status === "active" ? "todo" :
            task.status,
        })),
      };
    case "UPDATE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? action.payload
            : task
        ),
      };
      
    case "START_POMODORO":
      return state;

    case "PAUSE_POMODORO":
      return state;

    
    default:
      return state;
  }
}

// ---------- Context ----------

const TaskContext = createContext(null);

// ---------- Provider ----------

export function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

// ---------- Hook ----------

export function useTasks() {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTasks must be used within TaskProvider");
  }

  return context;
}
