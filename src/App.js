import React, { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const INITIAL__COSTS = [
  {
    id: "c1",
    date: new Date(2022, 2, 24),
    name: "Javelin",
    amount: 9999,
  },
  {
    id: "c2",
    date: new Date(2023, 2, 24),
    name: "Leopard",
    amount: 99999,
  },
  {
    id: "c3",
    date: new Date(2023, 2, 24),
    name: "T90",
    amount: "0",
  },
];

function App() {
  const [costs, setCosts] = useState(INITIAL__COSTS);

  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };

  return (
    <div className="App">
      <NewCost onAddCost={addCostHandler} />

      <Costs costs={costs} />
    </div>
  );
}

export default App;
