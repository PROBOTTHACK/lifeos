import { useState } from "react";
import { useTasks } from "../../../context/TaskContext";

export default function SubTodoList({ task }) {
  const { dispatch } = useTasks();
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const updateTask = (newList) => {
    dispatch({
      type: "UPDATE_TASK",
      payload: { ...task, subtodos: newList },
    });
  };

  const toggle = (id) => {
    updateTask(
      task.subtodos.map((s) =>
        s.id === id ? { ...s, completed: !s.completed } : s
      )
    );
  };

  const remove = (id) => {
    updateTask(task.subtodos.filter((s) => s.id !== id));
  };

  const startEdit = (s) => {
    setEditingId(s.id);
    setEditingText(s.text);
  };

  const saveEdit = () => {
    updateTask(
      task.subtodos.map((s) =>
        s.id === editingId ? { ...s, text: editingText } : s
      )
    );
    setEditingId(null);
  };

  const add = () => {
    if (!text.trim()) return;

    updateTask([
      ...task.subtodos,
      { id: Date.now().toString(), text, completed: false },
    ]);

    setText("");
  };

  return (
    <div>
      <p className="text-xs text-neutral-500 mb-2">Subtasks</p>

      <div className="space-y-2">
        {task.subtodos.map((s) => (
          <div key={s.id} className="flex items-center gap-2 text-sm">

            <input
              type="checkbox"
              checked={s.completed}
              onChange={() => toggle(s.id)}
            />

            {editingId === s.id ? (
              <input
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
                className="flex-1 bg-black/40 border border-white/10 rounded px-2 py-1"
              />
            ) : (
              <span className={`flex-1 ${s.completed ? "line-through opacity-50" : ""}`}>
                {s.text}
              </span>
            )}

            {editingId === s.id ? (
              <button onClick={saveEdit} className="text-xs opacity-70">save</button>
            ) : (
              <button onClick={() => startEdit(s)} className="text-xs opacity-70">edit</button>
            )}

            <button
              onClick={() => remove(s.id)}
              className="text-xs text-red-400"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="flex gap-2 mt-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add subtask..."
          className="flex-1 bg-black/40 border border-white/10 rounded px-3 py-1"
        />
        <button onClick={add} className="text-sm border px-3 rounded">
          Add
        </button>
      </div>
    </div>
  );
}
