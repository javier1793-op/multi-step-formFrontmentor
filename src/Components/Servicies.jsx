import ItemServicies from "./ItemServicies";
import "../scss/servicies.scss";

const Servicies = ({
  setActive,
  servicies,
  setSubscription,
  typeServicies,
}) => {
  const serviciesAddYear =
    servicies && servicies.length > 0 ? servicies[0].year : [];
  const serviciesAddMonthly =
    servicies && servicies.length > 0 ? servicies[0].monthly : [];
  return (
    <>
      <div className="contentPlan">
        <h1 className="titlePersonalInfo">Pick add-ons</h1>
        <span className="descriptionPersonalInfo">
          Add-ons help enhance your gaming experience.
        </span>
        <section className="planServicies">
          {typeServicies === "mo"
            ? serviciesAddMonthly.map((item) => (
                <ItemServicies
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  typeServicies={'mo'}
                />
              ))
            : serviciesAddYear.map((item) => (
                <ItemServicies
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  typeServicies={'yr'}
                />
              ))}
        </section>

        <section className="buttonAvan">
          <span
            className="textBack"
            onClick={() => {
              setActive(2);
            }}
          >
            Go Back
          </span>
          <button
            onClick={() => {
              setActive(4);
            }}
          >
            Next Step
          </button>
        </section>
      </div>
    </>
  );
};

export default Servicies;
