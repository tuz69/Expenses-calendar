import "./NewCost.css";
import CostForm from "./CostForm";

function NewCost(props) {
  const saveCosDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };

    props.onAddCost(costData);
  };
  return (
    <div className="NewCost">
      <CostForm onSaveCosData={saveCosDataHandler} />
    </div>
  );
}
export default NewCost;
