import React from 'react';
import './Product.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useAppSelector } from '../hooks';
import { addCart } from '../redux/productSlice';
import { typeProduct } from '../redux/typeProduct';

function Product() {
    const productList = useAppSelector((state) => state.product.productList);
    const dispatch = useDispatch();
    const handleAddItemCart =(product: typeProduct)=>{
        console.log(product);
        
        dispatch(addCart(product))
    }
    return (
        <div>
            <h2>Product Table</h2>

            <table>
                <tbody>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            {productList.map((product)=>(
                <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                <button onClick={()=> handleAddItemCart(product)}>Add</button>
                </td>
            </tr>
            ))}
                </tbody>
            
            
            </table>
        </div>
    );
}

export default Product;