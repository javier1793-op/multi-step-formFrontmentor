import { useState } from "react";

const ItemServicies = ({
  name,
  description,
  price,
  typeServicies,
  setServicieSelect,
  serviceSelect
}) => {
  const [active, setActive] = useState(false);

  const [ser, setSer] = useState({
    name: name,
    price: price,
    typeServicies: typeServicies,
  });

  const handleClickPlan = () => {
    setActive(!active);
    if (active) {
      let deleteArray = serviceSelect.filter((elem) => elem.name !== ser.name);
      setServicieSelect(deleteArray);
    } else {
      setServicieSelect((prevArray) => [...prevArray, ser]); 
    }
  };


  return (
    <>
      <div className={`contenItemServicies ${active ? "active" : ""}`}>
        <section className="infoServicies">
          <input type="checkbox" onChange={handleClickPlan} />
          <section className="descriptionServicies">
            <span className="titleServicies">{name}</span>
            <span className="dataServicies">{description}</span>
          </section>
        </section>

        <section className="priceServicies">
          {"+$"}
          {price}
          {"/"}
          {typeServicies}
        </section>
      </div>
    </>
  );
};

export default ItemServicies;
