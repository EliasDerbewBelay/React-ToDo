import { useState } from "react";

export default function App() {
  return (
    <div className="h-screen bg-indigo-950 text-white flex flex-col justify-between">
      <div>
        <Header />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div>
      <div className="flex justify-around p-4 pb-1 font-primery text-[2rem]">
        <div>
          <h1>ToDo List</h1>
        </div>

        <div>
          <h3>Your Daily Manager</h3>
        </div>
      </div>

      <div className="h-[1px] bg-blue-900 rounded-lg m-4 mt-0"></div>
    </div>
  );
}

function Main() {
  const [taskInput, setTasksInput] = useState("");
  const [task, setTask] = useState([]);

  const handleNewTask = (newTask) => {
    setTask((prevTask) => [
      ...prevTask,
      { ...newTask, id: Date.now(), completed: false },
    ]);
  };

  const handleToggleComplete = (id) => {
    setTask((preveTasks) =>
      preveTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTask((preveTask) => preveTask.filter((task) => task.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskData = {
      title: taskInput,
    };
    handleNewTask(taskData);
    setTasksInput("");
  };
  return (
    <div className="flex flex-col items-center justify-center font-primery">
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <input
          className="border p-1 rounded-sm border-blue-200 border-2 w-[25rem] text-[14px]"
          type="text"
          placeholder="Enter your task here . . ."
          value={taskInput}
          onChange={(e) => setTasksInput(e.target.value)}
        />
        <button
          className="bg-green-600 rounded-sm p-1 w-30 font-primery cursor-pointer"
          type="submit"
        >
          Add
        </button>
      </form>

      {task.length === 0 ? (
        <div className="flex flex-col items-center">
          <img
            className="w-[25rem]"
            src="/emptyillustrator.png"
            alt="no task items"
          />
          <h2 className="text-[1.5rem]">No task has been added yet.</h2>
        </div>
      ) : (
        <TaskLists
          task={task}
          onToggleComplete={handleToggleComplete}
          onDelete={handleDeleteTask}
        />
      )}
    </div>
  );
}

function TaskLists({ task, onToggleComplete, onDelete }) {
  return (
    <div className="">
      {task.map((t) => (
        <TaskItem
          key={t.id}
          task={t}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

function TaskItem({ task, onToggleComplete, onDelete }) {
  return (
    <div className="mt-4">
      <ul className="flex flex-col gap-1">
        <li className="flex justify-between min-w-[25rem] gap-4">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleComplete(task.id)}
            />
            <p className={task.completed ? "line-through text-gray-400" : ""}>
              {task.title}
            </p>
          </div>
          <button className="cursor-pointer" onClick={() => onDelete(task.id)}>
            <img className="w-4" src="/delete.png" alt="delete icon" />
          </button>
        </li>
        <div className="h-[1px] bg-blue-400 rounded-lg "></div>
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-indigo-700 flex justify-center p-2 gap-4">
      <a
        href="https://t.me/Eliasdevstack"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="h-8 transition-transform duration-300 hover:scale-110 hover:rotate-6 cursor-pointer"
          src="/telegram.png"
          alt="telegram icon"
        />
      </a>

      <a
        href="https://github.com/EliasDerbewBelay"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="h-8 transition-transform duration-300 hover:scale-110 hover:rotate-6 cursor-pointer"
          src="/github.png"
          alt="github icon"
        />
      </a>

      <a href="mailto:eliasderbewbly@gmail.com">
        <img
          className="h-8 transition-transform duration-300 hover:scale-110 hover:rotate-6 cursor-pointer"
          src="/email.png"
          alt="email icon"
        />
      </a>
    </div>
  );
}
