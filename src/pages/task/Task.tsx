import { useState, useEffect, useRef } from "react";
import styles from "./task.module.css";
import type { TaskProps } from "../../types/props/Task";
import { TaskState } from "../../types/enums/State";

const Task = ({ tasks, setTasks }: TaskProps) => {
  const [filter, setFilter] = useState<TaskState>(TaskState.All);
  const [activeTab, setActiveTab] = useState<"Recent" | "Highlighted">("Recent");
  const [menuOpenId, setMenuOpenId] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpenId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredTasks = tasks
      .filter((task) => {
        const matchesState =
            filter === TaskState.Completed
                ? task.state === TaskState.Completed
                : filter === TaskState.Pending
                    ? task.state !== TaskState.Completed
                    : true;

        const matchesTab = activeTab === "Highlighted" ? task.favourite : true;

        return matchesState && matchesTab;
      })
      .sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());

  const handleDelete = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
    setMenuOpenId(null);
  };

  const handleToggleComplete = (id: number) => {
    setTasks((prev) =>
        prev.map((task) =>
            task.id === id
                ? {
                  ...task,
                  state: task.state === TaskState.Completed ? TaskState.Pending : TaskState.Completed,
                }
                : task
        )
    );
    setMenuOpenId(null);
  };

  const handleToggleFavourite = (id: number) => {
    setTasks((prev) =>
        prev.map((task) =>
            task.id === id ? { ...task, favourite: !task.favourite } : task
        )
    );
    setMenuOpenId(null);
  };

  return (
      <div className={styles.content}>
        <header className={styles.header}>
          <p>Ready to start arrange tasks?</p>
          <h1>Shahabuddin’s Tasks</h1>
        </header>

        <div className={styles.noteSection}>
          <div className={styles.noteHeader}>
            <p></p>
            <div className={styles.noteItems}>
              <div className={styles.tabs}>
                <button
                    className={activeTab === "Recent" ? styles.activeTab : styles.tab}
                    onClick={() => setActiveTab("Recent")}
                >
                  Recent
                </button>
                <button
                    className={activeTab === "Highlighted" ? styles.activeTab : styles.tab}
                    onClick={() => setActiveTab("Highlighted")}
                >
                  Highlighted
                </button>
              </div>

              <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value as TaskState)}
                  className={styles.dropdown}
              >
                <option value={TaskState.All}>All</option>
                <option value={TaskState.Completed}>Completed</option>
                <option value={TaskState.Pending}>Not Completed</option>
              </select>
            </div>
          </div>

          <div className={styles.noteGrid}>
            {filteredTasks.map((task) => (
                <div
                    key={task.id}
                    className={`${styles.card} ${styles.blueCard} ${
                        task.favourite ? styles.favCard : ""
                    }`}
                >
                  <div className={styles.cardHeader}>
                    <h3>{task.title}</h3>
                    <button onClick={() => setMenuOpenId(menuOpenId === task.id ? null : task.id)}>
                      ⋯
                    </button>

                    {menuOpenId === task.id && (
                        <div className={styles.dropdownMenu} ref={menuRef}>
                          <button onClick={() => handleDelete(task.id)}>Delete</button>
                          <button onClick={() => handleToggleComplete(task.id)}>
                            {task.state === TaskState.Completed ? "Mark as Pending" : "Mark as Completed"}
                          </button>
                          <button onClick={() => handleToggleFavourite(task.id)}>
                            {task.favourite ? "Unfavourite" : "Favourite"}
                          </button>
                        </div>
                    )}
                  </div>
                  <p>{task.description}</p>
                  <div className={styles.cardFooter}>
                    <span>{new Date(task.time).toLocaleDateString()}</span>
                    <div className={styles.icons}>
                      <span>{task.state === TaskState.Completed ? "✅" : "🕒"}</span>
                      <span>{task.favourite ? "⭐" : "☆"}</span>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default Task;
