import { ReactNode, createContext, useContext, useState } from "react"
import { ShoppingCart } from "../components/ShoppingCart"
import { useLocalStorage } from "../hooks/useLocalStorage"
// ShoppingCartContext
// add, increment, decrement, and remove things from the cart
type ShoppingCartContext = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id:number) => number
    increaseCartQuantity: (id:number) => void 
    decreaseCartQuantity: (id:number) => void
    removeFromCart: (id:number) => void 
    cartQuantity: number
    cartItems: CartItem[]
}

// create ShoppingCartContext
const ShoppingCartContext = createContext({} as ShoppingCartContext)

// use ShoppingCartContext -> CONSUMER
export function useShoppingCartContext(){
    return useContext(ShoppingCartContext)
}

type ShoppingCartProviderprops={
    children: ReactNode
}

type CartItem = {
    id: number
    quantity: number
}
// render ShoppingCartContext -> PROVIDER
// will render out all the children
export function ShoppingCartProvider({children}:ShoppingCartProviderprops){
    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('shopping-cart',[])
    
    const cartQuantity = cartItems.reduce((quantity, items)=>items.quantity+quantity, 0)
    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)
    // fucntions of ShoppingCartContext
    function getItemQuantity(id:number){
        return cartItems.find(item=>item.id==id)?.quantity || 0
    }
    function increaseCartQuantity(id: number) {
        setCartItems(currItems => {
            // add item 
          if (currItems.find(item => item.id === id) == null) {
            return [...currItems, { id, quantity: 1 }]
          }// increase by 1 
          else {
            return currItems.map(item => {
              if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 }
              } else {
                return item
              }
            })
          }
        })
    }
    function decreaseCartQuantity(id: number) {
        setCartItems(currItems => {
          if (currItems.find(item => item.id === id)?.quantity === 1) {
            // remove
            return currItems.filter(item=>item.id!==id)
            // decrease by 1
          } else {
            return currItems.map(item => {
              if (item.id === id) {
                return { ...item, quantity: item.quantity - 1 }
              } else {
                return item
              }
            })
          }
        })
    }
    function removeFromCart(id:number){
        setCartItems(currItems=>{
            return currItems.filter(item=>item.id!==id)
        })
    }
    
    return(
        <ShoppingCartContext.Provider 
        value={{getItemQuantity, 
                increaseCartQuantity, 
                decreaseCartQuantity,   
                removeFromCart, 
                openCart, closeCart,
                cartItems, 
                cartQuantity}}>
            {children}
            <ShoppingCart isOpen={isOpen}/>
        </ShoppingCartContext.Provider>
    )
}
