import { useState } from "react";
import { useTasks } from "../../../context/TaskContext";
import SubTodoList from "./SubTodoList";
import ResourceList from "./ResourceList";


export default function TaskCard({ task }) {
  const { dispatch } = useTasks();
  const [expanded, setExpanded] = useState(false);
  const [title, setTitle] = useState(task.title);

  const handleUpdate = () => {
    dispatch({
      type: "UPDATE_TASK",
      payload: { ...task, title },
    });
  };

  const handleDelete = () => {
    dispatch({
      type: "DELETE_TASK",
      payload: task.id,
    });
  };

  const handleSetActive = () => {
    dispatch({
      type: "SET_ACTIVE_TASK",
      payload: task.id,
    });
  };

  return (
    <div className="bg-neutral-900/70 border border-white/10 rounded-xl p-6 space-y-4">

      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <p className="font-medium">{task.title}</p>
          <p className="text-xs text-neutral-500">
            {task.pomodoroConfig.workMinutes}m × {task.pomodoroConfig.totalSessions}
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleSetActive}
            className="text-xs px-3 py-1 border border-white/20 rounded-lg hover:bg-white hover:text-black transition"
          >
            {task.status === "active" ? "Active" : "Focus"}
          </button>

          <button
            onClick={() => setExpanded(!expanded)}
            className="text-xs px-3 py-1 border border-white/20 rounded-lg"
          >
            {expanded ? "Close" : "Edit"}
          </button>
        </div>
      </div>

      {/* Expanded Section */}
      {expanded && (
        <div className="space-y-4 pt-4 border-t border-white/10">

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2"
          />


        </div>
      )}
      {expanded && (
        <div className="space-y-6 pt-4 border-t border-white/10">

            {/* Description */}
            <div>
            <p className="text-xs text-neutral-500 mb-1">Description</p>
            <textarea
                value={task.description || ""}
                onChange={(e) =>
                dispatch({
                    type: "UPDATE_TASK",
                    payload: { ...task, description: e.target.value },
                })
                }
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2 resize-none"
                placeholder="Add notes or context..."
            />
            </div>

            {/* Subtasks */}
            <SubTodoList task={task} />

            {/* Resources */}
            <ResourceList task={task} />

            {/* Delete */}
            <button
            onClick={handleDelete}
            className="px-4 py-2 border border-red-500 text-red-500 rounded-lg"
            >
            Delete Task
            </button>
            <div>
            <p className="text-xs text-neutral-500 mb-2">Pomodoro Settings</p>

            <div className="grid grid-cols-3 gap-3">
                <input
                type="number"
                value={task.pomodoroConfig.workMinutes}
                onChange={(e) =>
                    dispatch({
                    type: "UPDATE_TASK",
                    payload: {
                        ...task,
                        pomodoroConfig: {
                        ...task.pomodoroConfig,
                        workMinutes: Number(e.target.value),
                        },
                    },
                    })
                }
                className="bg-black/40 border border-white/10 rounded px-2 py-1"
                />

                <input
                type="number"
                value={task.pomodoroConfig.breakMinutes}
                onChange={(e) =>
                    dispatch({
                    type: "UPDATE_TASK",
                    payload: {
                        ...task,
                        pomodoroConfig: {
                        ...task.pomodoroConfig,
                        breakMinutes: Number(e.target.value),
                        },
                    },
                    })
                }
                className="bg-black/40 border border-white/10 rounded px-2 py-1"
                />

                <input
                type="number"
                value={task.pomodoroConfig.totalSessions}
                onChange={(e) =>
                    dispatch({
                    type: "UPDATE_TASK",
                    payload: {
                        ...task,
                        pomodoroConfig: {
                        ...task.pomodoroConfig,
                        totalSessions: Number(e.target.value),
                        },
                    },
                    })
                }
                className="bg-black/40 border border-white/10 rounded px-2 py-1"
                />
            </div>
            </div>
            <div className="flex gap-3">
            <button
              onClick={handleUpdate}
              className="px-4 py-2 bg-white text-black rounded-lg"
            >
              Save
            </button>

            <button
              onClick={handleDelete}
              className="px-4 py-2 border border-red-500 text-red-500 rounded-lg"
            >
              Delete
            </button>
          </div>
        </div>
        

        )}
        
    </div>
  );
}
