import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove_wishlist } from '../redux/reduxWishlist/WishlistAction'; // Ensure path is correct

const Wishlist = () => {
    const data = useSelector(state => state.wishdata); // Ensure state structure matches
    const dispatch = useDispatch();

    console.log("wishdata", data);

    return (
        <div>
            <h1 className='heading'>Wishlist</h1>
            <div className='flex justify-center items-center text-center'>
                <table className='table-fixed w-[800px]'>
                    <thead>
                        <tr>
                            <th className='text-left'>Image</th>
                            <th>Title</th>
                            <th>Remove</th> {/* Updated text */}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id} className='border'>
                                <td>
                                    <img src={item.image} alt="wishlist item" className='h-auto w-28' />
                                </td>
                                <td>
                                    <h2 className='text-wrap w-28 mx-auto'>{item.title}</h2>
                                </td>
                                <td>
                                    <button onClick={() => dispatch(remove_wishlist(item.id))} className='btn'>Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Wishlist;
