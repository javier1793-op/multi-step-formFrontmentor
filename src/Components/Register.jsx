import { useState } from "react";
import "../scss/registre.scss";
import { Nav } from "./Nav";
import PersonalInfo from "./PersonalInfo";
import Plan from "./Plan";
import Arcade from '../img/icon-arcade.svg'
import Advanced from '../img/icon-advanced.svg'
import Pro from '../img/icon-pro.svg'

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
          id:1,
          name: "Arcade",
          price: 9,
          icon:`${Arcade}`
        },
        {
          id:2,
          name: "Advanced",
          price: 12,
          icon:`${Advanced}`
        },
        {
          id:3,
          name: "Pro",
          price: 15,
          icon:`${Pro}`
        },
      ],
      year: [
        {
          id:4,
          name: "Arcade",
          price: 90,
          icon:`${Arcade}`
        },
        {
          id:5,
          name: "Advanced",
          price: 120,
          icon:`${Advanced}`
        },
        {
          id:6,
          name: "Pro",
          price: 150,
          icon:`${Pro}`
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
            plan={data.infoPersonal.plan}
         />}
        </section>
      </div>
    </>
  );
};

export default Register;
