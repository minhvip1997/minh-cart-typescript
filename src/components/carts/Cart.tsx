import React from 'react';
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

function Cart() {
    return (
        <div>
           <table>
               <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Total Unit Price</th>
               </thead>
               <tbody>
                   <tr>
                       <td>1</td>
                       <td>dasda</td>
                       <td>
                           <Button>
                               <RemoveIcon/>
                           </Button>
                           <span>1</span>
                           <Button>
                               <AddIcon/>
                           </Button>
                       </td>
                       <td>0</td>
                   </tr>
                   <tr>
                        <th>Total Price: 0</th>
                   </tr>
               </tbody>
           </table>
        </div>
    );
}

export default Cart;