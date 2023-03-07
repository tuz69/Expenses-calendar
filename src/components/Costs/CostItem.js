import CostDate from "./CostDate";
import "./CostItem.css";
import Card from "../UI/Card";

function CostItem(props) {
  return (
    <li>
      <Card className="cost-item">
        <CostDate date={props.date} />
        <div className="cost-item__description">
          <h2 className="cost-item__name">{props.name}</h2>
          <p className="cost-item__price">${props.amount}</p>
        </div>
      </Card>
    </li>
  );
}
export default CostItem;
