

const ItemPlan = ({icon,name,price,typePlan,discount}) => {
  return (
    <>
    <section className='itemPlan'>
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