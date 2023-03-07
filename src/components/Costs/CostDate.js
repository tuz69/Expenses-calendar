import React from "react";
import "./CostDate.css";

function CostDate(props) {
  const month = props.date.toLocaleDateString("ru-RU", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleDateString("ru-RU", { day: "2-digit" });
  return (
    <div>
      <div className="cost-item__date">
        <p className="cost-item__month">{month}</p>
        <p className="cost-item__year">{year}</p>
        <p className="cost-item__day">{day}</p>
      </div>
    </div>
  );
}

export default CostDate;
