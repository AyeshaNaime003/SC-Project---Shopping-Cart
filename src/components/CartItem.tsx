import { Button, Stack } from "react-bootstrap"
import { useShoppingCartContext } from "../context/ShoppingCartContext"
import { formatPrice } from "../utilities/formatPrice"
import { useEffect, useState } from 'react';


type CartItemProps={
    id:number
    quantity:number
}

export function CartItem({id, quantity}:CartItemProps){
  const { removeFromCart } = useShoppingCartContext();
  const [item, setItem] = useState<any>(null);

  useEffect(() => {
    fetch(`http://localhost:3000/items/${id}`)
      .then(response => response.json())
      .then(data => setItem(data))
      .catch(error => console.log(error));
  }, [id]);

  if (!item) return null;

    function formatCurrency(price: number): import("react").ReactNode {
        throw new Error("Function not implemented.")
    }

    return(
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatPrice(item.price)}
        </div>
      </div>
      <div> {formatPrice(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
    )

}