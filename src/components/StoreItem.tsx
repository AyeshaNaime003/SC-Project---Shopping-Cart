import { Button, Stack } from "react-bootstrap"
import { formatPrice } from "../utilities/formatPrice"
import { useShoppingCartContext } from "../context/ShoppingCartContext"

import "../styles/home.css"; // Import the CSS file


type StoreItemProp = {
    id: number, name: string, price: number, imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl }: StoreItemProp) {
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart
    } = useShoppingCartContext()
    // hardcoded value of the item's quantity in the cart
    const quantity = getItemQuantity(id)
    return (
        <>
            {/* item details */}
            <div className="mt-auto mx-auto">
                <div className="text-center"><img src={imgUrl} alt="" style={{ width: '75%' }} /></div>
                <div className="text-center fw-bold my-2">{name}</div>
                <div className="text-center text-muted"> {formatPrice(price)}</div>
            </div>
            {/* buttons */}
            <div className="my-2">
                {quantity == 0 ?
                    // add to cart button
                    <Button className="btn pink-button" onClick={ ()=>increaseCartQuantity(id) }>Add to Cart</Button>
                    :
                    // quantity buttons 
                    <Stack>
                        <Stack direction="horizontal" className='text-center'>
                            <Button className='btn pink-button' onClick={ ()=>increaseCartQuantity(id) }>+</Button>
                            <span className="mx-2">{quantity} in Cart</span>
                            <Button className='btn pink-button' onClick={ ()=>decreaseCartQuantity(id) }>-</Button>
                        </Stack>
                        <Button className="btn btn-dark btn-danger my-2" onClick={ ()=>removeFromCart(id) }>Remove</Button>
                    </Stack>
                }
            </div>
        </>
    )
}