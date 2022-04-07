import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const month = props.Date.toLocaleString("en-IN", { month: "long" });
  const Day = props.Date.toLocaleString("en-IN", { day: "2-digit" });
  const Year = props.Date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{Year}</div>
      <div className="expense-date__day">{Day}</div>
    </div>
  );
}
export default ExpenseDate;
