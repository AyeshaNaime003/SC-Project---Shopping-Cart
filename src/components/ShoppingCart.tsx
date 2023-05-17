import { useEffect, useState } from 'react';
import { Button, Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCartContext } from "../context/ShoppingCartContext"
import { formatPrice } from "../utilities/formatPrice"
import { CartItem } from "./CartItem"
import { Link } from 'react-router-dom';

type ShoppingCartProps = {
  isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { cartQuantity, closeCart, cartItems } = useShoppingCartContext()
  const [storeItems, setStoreItems] = useState<any>([]);
  useEffect(() => {
    fetch('http://localhost:3000/items')
      .then(response => response.json())
      .then(data => setStoreItems(data))
      .catch(error => console.log(error));
  }, []);
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map(item => {
            const storeItem = storeItems.find(i => i.id === item.id);
            return (
              <CartItem key={item.id} {...item} storeItem={storeItem} />
            );
          })}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatPrice(
              cartItems.reduce((total, cartItem) => {
                const storeItem = storeItems.find(i => i.id === cartItem.id);
                return total + (storeItem?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
          {cartQuantity > 0 ? (
            <Link to="/payment">
              <Button className="btn">Proceed to Payment</Button>
            </Link>
          ) : null}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}