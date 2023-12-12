import "../scss/nav.scss";

export const Nav = ({ active }) => {
  const navegation = [
    {
      id: 1,
      step: "Step 1",
      description: "your info",
    },
    {
      id: 2,
      step: "Step 2",
      description: "Select plan",
    },
    {
      id: 3,
      step: "Step 3",
      description: "add-ons",
    },
    {
      id: 4,
      step: "Step 4",
      description: "summary",
    },
  ];

  return (
    <div className="contentNav">
      {navegation.map((item) => (
        <section className="item" key={item.id}>
          <span className={`number ${active === item.id ? "active" : ""}`}>
            {item.id}
          </span>
          <span className="infoItem">
            <span className="step">{item.step}</span>
            <span className="descriptionItem">{item.description}</span>
          </span>
        </section>
      ))}
    </div>
  );
};
