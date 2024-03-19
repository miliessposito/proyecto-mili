
const ItemListContainer = ({greeting}) => {
  const estilosH1Item={
    textAlign: "center",
    color: "#f1889b",
    fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
    fontWeight: "bold",
    fontSize: "2.5rem"
  }
  
  return (
    <section>
        <h1 style={estilosH1Item}>{greeting}</h1>
    </section>
  )
}

export default ItemListContainer