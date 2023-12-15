import { useRef, useState } from "react";
import "../scss/personalInfo.scss";

const PersonalInfo = ({ name, email, phone, setData, setActive }) => {
  const form = useRef();
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      infoPersonal: {
        ...prevData.infoPersonal,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailregex =
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    let name = form.current.name.value;
    let email = form.current.email.value;
    let phone = form.current.phone.value;

    if (name === "") {
      setError("name");
      return;
    }else
    if (!mailregex.test(email) || email === "") {
      setError("email");
      return;
    }else
    if (phone === "") {
      setError("phone");
      return;
    }else{
      setError("")
    }

    if (error === "") {
      setActive(2);
    }
  };

  return (
    <>
      <div className="contentPersonalInfo">
        <h1 className="titlePersonalInfo">Personal Info</h1>
        <span className="descriptionPersonalInfo">
          Please provide your name, email address, and phone number.
        </span>
        <form className="formPersonalInfo" onSubmit={handleSubmit} ref={form}>
          <section className="box">
            <section className="boxLabel">
              <label className="labelPersonalInfo">Name</label>
              {error === "name" && (
                <label className="labelError">
                  {" "}
                  the name field is required
                </label>
              )}
            </section>

            <input
              type="text"
              className={`inputPersonalInfo ${error === "name" ? "error" : ""}`}
              placeholder="e.g. Stephen King"
              value={name}
              name="name"
              onChange={handleInputChange}
            />
          </section>
          <section className="box">
            <section className="boxLabel">
              <label className="labelPersonalInfo">Email Address</label>
              {error === "email" && (
                <label className="labelError">
                  {" "}
                  the email field is required
                </label>
              )}
            </section>
            <input
              type="text"
              className={`inputPersonalInfo ${
                error === "email" ? "error" : ""
              }`}
              placeholder="e.g. StepheKing@lorem.com"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </section>
          <section className="box">
            <section className="boxLabel">
              <label className="labelPersonalInfo">Phone Number</label>
            {error === "phone" && (
                <label className="labelError">
                  {" "}
                  the phone field is required
                </label>
              )}
            </section>
            
            <input
              type="text"
              className={`inputPersonalInfo ${
                error === "phone" ? "error" : ""
              }`}
              placeholder="e.g. +1 234 567 890"
              name="phone"
              value={phone}
              onChange={handleInputChange}
            />
          </section>
          <section className="buttonPersonalInfo">
            <button>Next Step</button>
          </section>
        </form>
      </div>
    </>
  );
};

export default PersonalInfo;
