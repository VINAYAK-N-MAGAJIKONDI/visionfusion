import React, { Component } from 'react';
import "./dash.css"
class UserDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: 'User',
        
        wellBeingScore: 85,
        habits: [
          { name: 'Exercise', completed: true },
          { name: 'Meditation', completed: false },
          { name: 'Reading', completed: true },
          // Add more habits as needed
        ],
      },
    };
  }

  toggleHabitStatus = (habitName) => {
    this.setState((prevState) => {
      const updatedHabits = prevState.user.habits.map((habit) => {
        if (habit.name === habitName) {
          return { ...habit, completed: !habit.completed };
        }
        return habit;
      });

      return {
        user: { ...prevState.user, habits: updatedHabits },
      };
    });
  };

  calculateWellBeingScore = () => {
    const completedHabits = this.state.user.habits.filter((habit) => habit.completed);
    const wellBeingScore = (completedHabits.length / this.state.user.habits.length) * 100;
    this.setState((prevState) => ({
      user: { ...prevState.user, wellBeingScore },
    }));
  };

  addNewHabit = (habitName) => {
    const newHabit = { name: habitName, completed: false };
    this.setState((prevState) => ({
      user: { ...prevState.user, habits: [...prevState.user.habits, newHabit] },
    }));
  };

  removeHabit = (habitName) => {
    this.setState((prevState) => ({
      user: { ...prevState.user, habits: prevState.user.habits.filter(habit => habit.name !== habitName) },
    }));
  };

  render() {
    const { name,  wellBeingScore, habits } = this.state.user;

    return (
      <div className="user-dashboard" >
        <h1>Welcome, {name}</h1>
        
        <p>Well-being Score: {wellBeingScore}%</p>

        <h2>Your Habits</h2>
        <ul>
          {habits.map((habit, index) => (
            <li key={index} className={habit.completed ? 'completed' : 'incomplete'}>
              {habit.name}
              <button onClick={() => this.toggleHabitStatus(habit.name)}>
                {habit.completed ? 'Undo' : 'Complete'}
              </button>
              <button onClick={() => this.removeHabit(habit.name)}>Remove</button>
            </li>
          ))}
        </ul>

        <button onClick={this.calculateWellBeingScore}>Recalculate Well-being Score</button>
        
        <div style={{"padding": 20}}>
          <input
            type="text"
            placeholder="Add a new habit"
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                this.addNewHabit(e.target.value);
                e.target.value = '';
              }
            }}
          />
        </div>
      </div>
    );
  }
}

export default UserDashboard;
