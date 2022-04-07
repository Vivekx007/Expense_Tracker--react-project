import React, { useState} from "react";
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const DUMMY_expenses = [
    {
      id: 1,
      date: new Date(2021, 0, 12),
      title: "Car Insurence",
      amount: 2000.7
    },

    {
      id: 2,
      date: new Date(2022, 5, 8),
      title: "milk",
      amount: 24.6
    },

    {
      id: 3,
      date: new Date(2021, 2, 28),
      title: "News Tv",
      amount: 2094.9
    },

    {
      id: 4,
      date: new Date(2020, 2, 2),
      title: "New Desk (Wooden)",
      amount: 1024.67
    }
  ];

const [expenses, setExpenses] = useState(DUMMY_expenses)

  const addExpenseHandler = (expense) =>{
    // setExpenses([expense, ...expenses])

    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses]
    })
  }
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses items ={expenses} />
    </div>
  );
}

export default App;
