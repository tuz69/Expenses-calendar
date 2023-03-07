import React, { useState } from "react";
import Card from "../UI/Card";
import "./Costs.css";
import CostsFilter from "./CostsFilter";
import CostList from "./CostList";
import CostsDiagram from "./CostsDiagram";

function Costs(props) {
  const [selectedYear, setSelectedYear] = useState("2023");

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        <CostsDiagram costs={filteredCosts} />
        <CostList costs={filteredCosts} />
      </Card>
    </div>
  );
}

export default Costs;
