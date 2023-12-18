import { useState } from "react"


const ItemPlan = ({icon,name,price,typePlan,discount,setPlanSelect}) => {

  const [plan, setPlan] = useState({
    name:name,
    price:price,
    typePlan:typePlan,
    discount:discount
  })

  const handleClickPlan =()=>{
    setPlanSelect(plan)
  }
  return (
    <>
    <section className='itemPlan' onClick={handleClickPlan}>
            <img src={icon} alt="icono" className="iconImg"/>
            <section className="descriptionTitemPlan">
              <span className="nameItem">{name}</span>
              <span className="priceItem">
                {'$'}{price}{'/'}{typePlan}
              </span>
              <span className="discountPlan">
                {discount}
              </span>
            </section>
          </section>
    </>
  )
}

export default ItemPlan