import { useEffect, useState } from "react";
import "../scss/summary.scss";

const Summary = ({ setActive, subscription }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
   
    var newTotal=subscription.plan.price;
    subscription.servicies.map((item) => {
      newTotal= newTotal + item.price
    });
    setTotal(newTotal)
  }, []);

  return (
    <>
      <div className="contentPlan">
        <section className="contentSumm">
          <h1 className="titlePersonalInfo">Finishing up</h1>
        <span className="descriptionPersonalInfo">
          Double-check everything looks OK beforce confirming
        </span>

        <section className="SectionSummary">
          <section className="boxSummary">
            <span className="planSummary">
              {subscription.plan.name}
              <span className="change" onClick={() => setActive(2)}>
                Change
              </span>
            </span>

            <span className="priceSummary">
              {"$"}
              {subscription.plan.price}
              {"/"}
              {subscription.plan.typePlan}
            </span>
          </section>
          {subscription.servicies.map((item) => (
            <section className="boxServicieSummary" key={item.id}>
              <span className="nameServicieSummary">{item.name}</span>
              <span className="priceSummary">
                {"+"}
                {"$"}
                {item.price}
                {"/"}
                {item.typeServicies}
              </span>
            </section>
          ))}

          <section className="totalSummary">
            <p>
              {"Total ("}
              {"per "}
              {subscription.plan.typePlan}
              {")"}
            </p>
            <span className="total">
              {"+"}
              {"$"}
              {total}
              {"/"}
              {subscription.plan.typePlan}
            </span>
          </section>
        </section>
        </section>
        
        <section className="buttonAvan">
          <span
            className="textBack"
            onClick={() => {
              setActive(3);
            }}
          >
            Go Back
          </span>
          <button
            className="btnConfirm"
            onClick={() => {
              setActive(5);
            }}
          >
            Confirm
          </button>
        </section>
      </div>
    </>
  );
};

export default Summary;
