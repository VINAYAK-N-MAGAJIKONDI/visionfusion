import './features.css';
import React, { useState, useEffect } from 'react';
import BarGraph from "../../components/bar/bar"

function TodoAppWithBarGraph() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [score, setScore] = useState(0);
  const [dailyScores, setDailyScores] = useState([]);
  const [totalTasksForDay, setTotalTasksForDay] = useState(0);

  useEffect(() => {
    const savedData = localStorage.getItem('todoAppData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setTasks(parsedData.tasks);
      setCompletedTasks(parsedData.completedTasks);
      setScore(parsedData.score);
      setDailyScores(parsedData.dailyScores);
      setTotalTasksForDay(parsedData.totalTasksForDay);
    }

    // Request notification permission
    if ('Notification' in window && Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
  }, []);

  const addTask = (task) => {
    setTasks([...tasks, task]);
    setTotalTasksForDay(totalTasksForDay + 1);
  };

  useEffect(() => {
    const dataToSave = {
      tasks,
      completedTasks,
      score,
      dailyScores,
      totalTasksForDay,
    };
    localStorage.setItem('todoAppData', JSON.stringify(dataToSave));
  }, [tasks, completedTasks, score, dailyScores, totalTasksForDay]);

  const completeTask = (taskIndex) => {
    const task = tasks[taskIndex];
    setCompletedTasks([...completedTasks, task]);
    setTasks(tasks.filter((_, index) => index !== taskIndex));
    setScore(completedTasks.length + 1); // Calculate the score based on completed tasks
  };

  const updateScores = () => {
    // Calculate the score with 0.1 decimal accuracy
    const updatedScore = parseFloat((completedTasks.length * 10 / totalTasksForDay).toFixed(1));
    
    setDailyScores([...dailyScores, updatedScore]);
    setCompletedTasks([]);
    setTotalTasksForDay(0);
    setScore(0);
    setTasks([]);
  };

  useEffect(() => {
    // Send a notification every two hours
    const reminderInterval = 2 * 60 * 60 * 1000; // 2 hours in milliseconds

    const sendReminderNotification = () => {
      if (Notification.permission === 'granted') {
        const notification = new Notification('Task Reminder', {
          body: 'It\'s time to review your tasks!',
        });
      }
    };

    const reminderTimer = setInterval(sendReminderNotification, reminderInterval);

    return () => {
      // Clear the timer when the component unmounts
      clearInterval(reminderTimer);
    };
  }, []);

  return (
    <div className="todo-app">
      <h1>Tasks For Day</h1>
      <div>
        <input
          type="text"
          placeholder="Add a task..."
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              addTask(e.target.value);
              e.target.value = ''; // Clear the input field
            }
          }}
        />
      </div>
      <div>
        <h2>Tasks:</h2>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}{' '}
              <button onClick={() => completeTask(index)}>Complete</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Completed Tasks:</h2>
        <ul>
          {completedTasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Score: {score / totalTasksForDay}</h2>
        <button onClick={updateScores}>End Day</button>
      </div>
      <BarGraph dailyScores={dailyScores} />
    </div>
  );
}

export default TodoAppWithBarGraph;
