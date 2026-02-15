import { useState } from "react";
import { useTasks } from "../../../context/TaskContext";

export default function ResourceList({ task }) {
  const { dispatch } = useTasks();
  const [link, setLink] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingValue, setEditingValue] = useState("");

  const updateTask = (newList) => {
    dispatch({
      type: "UPDATE_TASK",
      payload: { ...task, resources: newList },
    });
  };

  const remove = (id) => {
    updateTask(task.resources.filter((r) => r.id !== id));
  };

  const startEdit = (r) => {
    setEditingId(r.id);
    setEditingValue(r.value);
  };

  const saveEdit = () => {
    updateTask(
      task.resources.map((r) =>
        r.id === editingId ? { ...r, value: editingValue } : r
      )
    );
    setEditingId(null);
  };

  const add = () => {
    if (!link.trim()) return;

    updateTask([
      ...task.resources,
      { id: Date.now().toString(), value: link },
    ]);

    setLink("");
  };

  return (
    <div>
      <p className="text-xs text-neutral-500 mb-2">Resources</p>

      <ul className="space-y-2 text-sm">
        {task.resources.map((r) => (
          <li key={r.id} className="flex items-center gap-2">

            {editingId === r.id ? (
              <input
                value={editingValue}
                onChange={(e) => setEditingValue(e.target.value)}
                className="flex-1 bg-black/40 border border-white/10 rounded px-2 py-1"
              />
            ) : (
              <a
                href={r.value}
                target="_blank"
                rel="noreferrer"
                className="flex-1 underline opacity-80"
              >
                {r.value}
              </a>
            )}

            {editingId === r.id ? (
              <button onClick={saveEdit} className="text-xs opacity-70">save</button>
            ) : (
              <button onClick={() => startEdit(r)} className="text-xs opacity-70">edit</button>
            )}

            <button
              onClick={() => remove(r.id)}
              className="text-xs text-red-400"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      <div className="flex gap-2 mt-2">
        <input
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="Add link..."
          className="flex-1 bg-black/40 border border-white/10 rounded px-3 py-1"
        />
        <button onClick={add} className="text-sm border px-3 rounded">
          Add
        </button>
      </div>
    </div>
  );
}
