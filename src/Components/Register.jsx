import { useState } from "react";
import "../scss/registre.scss";
import { Nav } from "./Nav";
import PersonalInfo from "./PersonalInfo";
import Plan from "./Plan";

const Register = () => {
  const [active, setActive] = useState(1);
  const [data, setData] = useState({
    infoPersonal: {
      name: "",
      email: "",
      phone: "",
      plan: [{
      monthly: [
        {
          name: "Arcade",
          price: 9,
        },
        {
          name: "Advanced",
          price: 12,
        },
        {
          name: "Pro",
          price: 15,
        },
      ],
      year: [
        {
          name: "Arcade",
          price: 90,
        },
        {
          name: "Advanced",
          price: 120,
        },
        {
          name: "Pro",
          price: 150,
        },
      ],
    }],
      servicies: [{
      monthly: [
        {
          name: "Online servicies",
          description:'Access to multiplayer games',
          price: 1,
        },
        {
          name: "Larger storage",
          description:'Estra 1tb of cloud save',
          price: 2,
        },
        {
          name: "Customizable profile",
          description:'custom theme on your profile',
          price: 2,
        },
      ],
      year: [
        {
          name: "Online servicies",
          description:'Access to multiplayer games',
          price: 10,
        },
        {
          name: "Larger storage",
          description:'Estra 1tb of cloud save',
          price: 20,
        },
        {
          name: "Customizable profile",
          description:'custom theme on your profile',
          price: 20,
        },
      ],
    }],

  }});
  console.log(data)
  return (
    <>
      <div className="contentRegister">
        <section className="nav">
          <Nav active={active} />
        </section>
        <section className="form">
          {active === 1 &&  <PersonalInfo
            name={data.infoPersonal.name}
            email={data.infoPersonal.email}
            phone={data.infoPersonal.phone}
            setActive={setActive}
            setData={setData}
          />}
         {active === 2 && <Plan
            setActive={setActive}
         />}
        </section>
      </div>
    </>
  );
};

export default Register;
