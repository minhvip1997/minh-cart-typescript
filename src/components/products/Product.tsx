import React from 'react';
import './Product.css';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useAppSelector } from '../hooks';

function Product() {
    const productList = useAppSelector((state) => state.product.productList);
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
                <button>Add</button>
                </td>
            </tr>
            ))}
                </tbody>
            
            
            </table>
        </div>
    );
}

export default Product;