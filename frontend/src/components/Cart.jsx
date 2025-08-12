import { useSelector, useDispatch } from "react-redux";
import { incrementItems, decrementItems, clearCart } from "../Utils/cartSlice";
import { Link } from "react-router-dom";

function Cart() {
    const dispatch = useDispatch();
    const cartObject = useSelector((state) => state.cart.items);

    // Convert object to array
    const cartArray = Object.values(cartObject); // [{id, name, image, price, quantity}, ...]

    const totalPrice = cartArray.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <div className="p-6">
           
            {cartArray.length === 0 ? (
               <div className="flex flex-col items-center justify-center space-y-4">
                    <img 
                        src="https://i.pinimg.com/736x/81/c4/fc/81c4fc9a4c06cf57abf23606689f7426.jpg"
                        alt="Empty Cart"
                        className="w-64 h-64 object-contain"
                    />
                    <p className="text-3xl font-semibold text-gray-600">Your cart is empty</p>
                     <Link to="/">
                    <button className="p-4 m-4 bg-blue-400 text-white rounded-lg hover:bg-blue-500">
                        Go to Restaurants
                    </button>
                    </Link>
                </div>
            ) : (
                <div>
                 <h1 className="text-2xl font-bold mb-6">My Cart</h1>
                    <ul className="space-y-4">
                        {cartArray.map((item) => (
                            <li
                                key={item.id}
                                className="flex items-center justify-between border p-4 rounded-lg shadow-sm"
                            >
                                <div className="flex items-center space-x-4">
                                    <img
                                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.imageId}`}
                                        alt={item.name}
                                        className="w-16 h-16 object-cover rounded-md"
                                    />
                                    <div>
                                        <h2 className="font-semibold">{item.name}</h2>
                                        <p className="text-sm text-gray-500">
                                            ₹{item.price/100} each
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <button
                                        onClick={() => dispatch(decrementItems({ id: item.id }))}
                                        className="px-2 py-1 border rounded"
                                    >
                                        -
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button
                                        onClick={() => dispatch(incrementItems({ id: item.id }))}
                                        className="px-2 py-1 border rounded"
                                    >
                                        +
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-6 flex justify-between items-center border-t pt-4">
                        <h2 className="text-lg font-bold">Total: ₹{totalPrice/100}</h2>
                        <button
                            onClick={() => dispatch(clearCart())}
                            className="bg-red-500 text-white px-4 py-2 rounded-lg"
                        >
                            Clear Cart
                        </button>
                    </div>
                </div>
                
            )}
        </div>
    );
}

export default Cart;
