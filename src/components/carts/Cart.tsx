import React, { useEffect, useState } from 'react';
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useAppSelector } from '../hooks';
import { useDispatch } from 'react-redux';
import { decrementQuantity, incrementQuantity } from '../redux/productSlice';
import { typeItemCart } from '../redux/typeProduct';

function Cart() {

    const cartItems = useAppSelector((state) => state.product.carts);
    // console.log(cartItems)
    const dispatch = useDispatch();
    const [totalPrice, setTotalPrice] = useState(0);

    const handleSubtractButtonClick=(item: typeItemCart) =>{
        dispatch(decrementQuantity(item))
    } 

    const handleAddButtonClick=(item: typeItemCart) =>{
        dispatch(incrementQuantity(item))
    } 

    useEffect(()=>{
        let totalprice = 0;
        cartItems.forEach(function(item){
            totalprice += item.totalunitprice
          })
        setTotalPrice(totalprice);
    },[cartItems])

    return (
        <div>
           <table>
               <thead>
                   <tr>
                   <th>Id</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Total Unit Price</th>
                   </tr>
                    
               </thead>
               <tbody>
                   {cartItems.map((item)=>(       
                    <tr key={item.id}>
                       <td>{item.id}</td>
                       <td>{item.name}</td>
                       <td>
                           <Button onClick={()=>handleSubtractButtonClick(item)}>
                               <RemoveIcon/>
                           </Button>
                           <span>{item.quantity}</span>
                           <Button onClick={()=>handleAddButtonClick(item)}>
                               <AddIcon/>
                           </Button>
                       </td>
                       <td>{item.totalunitprice}</td>
                   </tr>   
                   ))}
                   
                   <tr>
                        <th>Total Price: {totalPrice}</th>
                   </tr>
               </tbody>
           </table>
        </div>
    );
}

export default Cart;