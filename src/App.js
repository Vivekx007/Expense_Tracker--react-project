import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const DUMMY_expenses = [
    {
      id: 1,
      date: new Date(2021, 0, 12),
      title: "Car Insurence",
      amount: 2000.7,
    },

    {
      id: 2,
      date: new Date(2022, 1, 8),
      title: "milk",
      amount: 40.6,
    },

    {
      id: 3,
      date: new Date(2021, 2, 28),
      title: "News Tv",
      amount: 2094.9,
    },

    {
      id: 4,
      date: new Date(2020, 2, 2),
      title: "New Desk (Wooden)",
      amount: 1024.67,
    },
    {
      id: 5,
      date: new Date(2022, 2, 2),
      title: "Laptop",
      amount: 70000,
    },
    {
      id: 7,
      date: new Date(2022, 3, 2),
      title: "New Gaming Chair",
      amount: 5999.67,
    },
    {
      id: 8,
      date: new Date(2020, 2, 2),
      title: "New Phone",
      amount: 25000,
    },
  ];

  const [expenses, setExpenses] = useState(DUMMY_expenses);

  const addExpenseHandler = (expense) => {
    // setExpenses([expense, ...expenses])

    setExpenses((prevExpenses) => {
      console.log(expense);
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
