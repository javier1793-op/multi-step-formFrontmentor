import { useState } from "react"


const ItemServicies = ({name,description,price,typeServicies,setServicieSelect}) => {
    const [active, setActive] = useState(false)
  const [ser, setSer] = useState({
    name:name,
    price:price,
    typeServicies:typeServicies,
  })

  const handleClickPlan =()=>{
    setServicieSelect(ser)
    setActive(!active)
  }
  return (
    <>
        <div className={`contenItemServicies ${active?'active':''}`}>
            <section className="infoServicies">
                <input
              type="checkbox"
              onChange={handleClickPlan}
            />
        <section className="descriptionServicies">
            <span className="titleServicies">
                {name}
            </span>
            <span className="dataServicies">
                {description}
            </span>
        </section>
            </section>
        
        <section className="priceServicies">
            {'+$'}
            {price}
            {'/'}
            {typeServicies}
        </section>
        </div>
    </>
  )
}

export default ItemServicies