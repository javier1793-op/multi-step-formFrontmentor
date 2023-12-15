import '../scss/plan.scss'

const Plan = ({setActive}) => {
  return (
    <>
        <div className="contentPlan">
        <h1 className="titlePersonalInfo">Select your plan</h1>
        <span className="descriptionPersonalInfo">
          You have the option of monthly or yearly biling.
        </span>
        <section className="planSelection">
          <span className='itemPlan'>
            aca el tiem 
          </span>
        </section>
        <section className="buttonAvan">
            <span className="textBack"
            onClick={()=>{setActive(1)}}
            >
                Go Back
            </span>
            <button
            onClick={()=>{setActive(3)}}
            >Next Step</button>
          </section>
        </div>
    </>
  )
}

export default Plan