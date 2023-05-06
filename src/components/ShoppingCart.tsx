import { Button, Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCartContext } from "../context/ShoppingCartContext"
import { formatPrice } from "../utilities/formatPrice"
import { CartItem } from "./CartItem"
import storeItems from "../data/items.json"
import { Link } from 'react-router-dom';

type ShoppingCartProps = {
  isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { cartQuantity, closeCart, cartItems } = useShoppingCartContext()
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatPrice(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
          </div>
          {cartQuantity>0?(
              <Link to="/payment">
              <Button className="btn">Proceed to Payment</Button>
            </Link>
          ):null}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}