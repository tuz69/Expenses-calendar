import React, { useState } from "react";
import "./CostForm.css";

function CostForm(props) {
  const [InputName, setInputName] = useState("");
  const [InputAmount, setInputAmount] = useState("");
  const [InputDate, setInputDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   name: "",
  //   amount: "",
  //   date: "",
  // });

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   name: event.target.value,
    //});
    // setUserInput((previousState) => {
    //   return {
    //     ...previousState,
    //     name: event.target.value,
    //   };
    // });
  };
  const amountChangeHandler = (event) => {
    setInputAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   amount: event.target.value,
    // });
  };
  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   date: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const costData = {
      name: InputName,
      amount: InputAmount,
      date: new Date(InputDate),
    };
    props.onSaveCosData(costData);
    setInputName("");
    setInputAmount("");
    setInputDate("");
  };

  return (
    <div className="CostForm">
      <form className="NewCost__form" onSubmit={submitHandler}>
        <div className="CostForm__name">
          <label className="CostForm__title">Название</label>
          <input
            type="text"
            id="formName"
            value={InputName}
            onChange={nameChangeHandler}
          />
        </div>
        <div className="CostForm__sum">
          <label className="CostForm__title">Сумма</label>
          <input
            type="number"
            onChange={amountChangeHandler}
            value={InputAmount}
            id="amout"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="CostForm__date">
          <label className="CostForm__title">Дата</label>
          <input
            type="date"
            onChange={dateChangeHandler}
            value={InputDate}
            id="date"
            min="2018-01-01" max="2023-12-31"

          />
        </div>
        <div className="CostForm__btn">
          <button type="submit" className="CostForm__btn-add CostForm__btn-primary">Добавить</button>
          <button className="CostForm__btn-primary">Отмена</button>
        </div>
      </form>
    </div>
  );
}
export default CostForm;
