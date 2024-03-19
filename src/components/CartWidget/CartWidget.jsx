import carrito from './assets/carrito.png'

const CartWidget = () => {
  
  const estilosCarrito={
      width: "25px",
      height: "25px"
  };

  return (
    <div>
        <img style={estilosCarrito} src={carrito} alt="carrito-png"/>
        0
    </div>
  )
}

export default CartWidget