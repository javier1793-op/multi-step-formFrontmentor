import { useEffect, useState } from "react";
import "../scss/plan.scss";
import ItemPlan from "./ItemPlan";

const Plan = ({ setActive, plan,  setSubscription }) => {
  const [isChecked, setChecked] = useState(false);
  const [planSelect, setPlanSelect] = useState({})
  const monthlyPlan = plan && plan.length > 0 ? plan[0].monthly : [];
  const yearlyPlan = plan && plan.length > 0 ? plan[0].year : [];

  const handleSwitchToggle = () => {
    setChecked(!isChecked);
  };

  useEffect(() => {
    setSubscription((prevData) => ({
      ...prevData,
      plan: planSelect,
    }));
  }, [planSelect])
  


  return (
    <>
      <div className="contentPlan">
        <h1 className="titlePersonalInfo">Select your plan</h1>
        <span className="descriptionPersonalInfo">
          You have the option of monthly or yearly biling.
        </span>
        <section className="planSelection">
          {isChecked
            ? yearlyPlan.map((item) => (
                <ItemPlan
                  key={item.id}
                  icon={item.icon}
                  name={item.name}
                  price={item.price}
                  typePlan={"yr"}
                  discount={'2 months free'}
                  setPlanSelect={setPlanSelect}
                />
              ))
            : monthlyPlan.map((item) => (
                <ItemPlan
                  key={item.id}
                  icon={item.icon}
                  name={item.name}
                  price={item.price}
                  typePlan={"mo"}
                  discount={''}
                  setPlanSelect={setPlanSelect}
                />
              ))}
        </section>
        <section className="SelectorPlan">
          <span className={`typeSlectorPlan ${!isChecked ? "active" : ""}`}>
            Monthly
          </span>
          <div className={`flip-switch ${isChecked ? "on" : "off"}`}>
            <input
              type="checkbox"
              id="switch"
              checked={isChecked}
              onChange={handleSwitchToggle}
            />
            <label htmlFor="switch">
              <span className="toggle" />
            </label>
          </div>
          <span className={`typeSlectorPlan ${isChecked ? "active" : ""}`}>
            Yearly
          </span>
        </section>
        <section className="buttonAvan">
          <span
            className="textBack"
            onClick={() => {
              setActive(1);
            }}
          >
            Go Back
          </span>
          <button
            onClick={() => {
              setActive(3);
            }}
          >
            Next Step
          </button>
        </section>
      </div>
    </>
  );
};

export default Plan;
