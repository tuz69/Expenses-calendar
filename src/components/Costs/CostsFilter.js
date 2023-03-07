import "./CostsFilter.css";

function CostsFilter(props) {
  const yearChangeHandler = (event) => {
    props.onChangeYear(event.target.value);
  };

  return (
    <div className="costs-filter">
      <div className="costs-filter__control">
        <label>Выбор по году:</label>

        <select
          value={props.year}
          className="CostFilter__control"
          onChange={yearChangeHandler}
        >
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>
    </div>
  );
}
export default CostsFilter;
