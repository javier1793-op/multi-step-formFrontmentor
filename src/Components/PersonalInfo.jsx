import "../scss/personalInfo.scss";

const PersonalInfo = () => {

    const handleSubmit=(e)=>{
        e.preventDefault();
    }

  return (
    <>
      <div className="contentPersonalInfo">
        <h1 className="titlePersonalInfo">Personal Info</h1>
        <span className="descriptionPersonalInfo">
          Please provide your name, email address, and phone number.
        </span>
        <form className="formPersonalInfo" onSubmit={handleSubmit}>
          <section className="box">
            <label className="labelPersonalInfo">Name</label>
            <input
              type="text"
              className="inputPersonalInfo"
              placeholder="e.g. Stephen King"
            />
          </section>
          <section className="box">
            <label className="labelPersonalInfo">Email Adrres</label>
            <input
              type="text"
              className="inputPersonalInfo"
              placeholder="e.g. StepheKing@lorem.com"
            />
          </section>
          <section className="box">
            <label className="labelPersonalInfo">Phone Number</label>
            <input
              type="text"
              className="inputPersonalInfo"
              placeholder="e.g. +1 234 567 890"
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
