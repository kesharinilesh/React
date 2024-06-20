import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";


const Cart = () => {
    const cartItems = useSelector((store)=>store.cart.items);
    // const store = useSelector((store)=>store); // subscribing the whole store very less efficient
    // const cartItems = store.cart.items;
    //make sure you subscribe to the right portion of the store both the codes have same fucntion but the later one isn't optimized as any change will happen to the store the later code will get to know about everything. That's why always subscribe to the right portion of the store. 
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    };
    return (
    <div className="text-center m-4 p-4 ">
        <h2 className="font-semibold text-xl">Cart</h2>
        <div className="w-6/12 m-auto">
            <button className="text-center mt-2 px-2 bg-black text-white rounded" onClick={handleClearCart}>Clear Cart</button>
            <ItemList items={cartItems}/>
            {cartItems.length === 0 && (<h2 className="my-4">Oops your cart is empty! Add items to the cart.</h2>)}
        </div>
    </div>
    )
}

export default Cart;