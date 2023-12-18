

const ItemServicies = ({name,description,price,typeServicies}) => {
  return (
    <>
        <div className="contenItemServicies">
            <section className="infoServicies">
                <input
              type="checkbox"
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