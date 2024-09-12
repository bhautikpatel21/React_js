import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove_cart,empty_cart } from '../redux/reduxCart/CartAction';

const Cart = () => {
    const data1 = useSelector(state => state.cart);
    const dispatch = useDispatch();

    return (
        <div>
            <button className='absolute px-6 py-1 mt-2 text-white text-2xl bg-purple-400 rounded-3xl' onClick={() => dispatch(empty_cart())}>EMPTY</button>
            <h1 className='heading'>This is Cart Page 1</h1>
            <div className='flex justify-center items-center text-center'>
                <table className='table-fixed w-[800px]'>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Remove Cart</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data1.map((item) => (
                            <tr key={item.id} className='border'>
                                <td>
                                    <img src={item.image} alt="cartimage" className='h-auto w-28' />
                                </td>
                                <td>
                                    <h2 className='text-wrap w-28 mx-auto'>{item.title}</h2>
                                </td>
                                <td>
                                    <p>${item.price}</p>
                                </td>
                                <td>
                                    <button onClick={() => dispatch(remove_cart(item.id))} className='btn'>Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;
