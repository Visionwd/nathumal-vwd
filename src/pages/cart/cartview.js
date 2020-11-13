import React,{useContext,useState} from 'react'
import Layout from '../../components/Layout'
import cart1 from "../../img/cart/cart-1.png";
import cart2 from "../../img/cart/cart-2.png";
import CartContext from "../../context/CartContext"
import store from "store";

let currentCartItems = [];
let total = 0;
if (store.get("persist")) {
    currentCartItems=store.get("persist")
    store.get("persist").map(item=>total+=Number(item.saleprice))
    console.log(total);
}else{
    currentCartItems = [];
    total=0;
}

function Cartview() {

    const [items,setItems] = useState(currentCartItems)
    const [totalState,setTotalState] = useState(total)
    // const [total,setTotal] = useState(mytotal)
    

    // const handleDelete = (deleteProduct) => {
     
    //     let currentData = store.get("persist");
    //     console.log(currentData);
    //     // currentData = currentData.filter(product => product != deleteProduct);
    //     store.set("persist", store.get("persist").filter(product => product.productName!=deleteProduct.productName))
    //     // setMyproduct(store.get("persist").filter(product => product.productName!=deleteProduct.productName))
    //     setMyproduct(currentData.filter(product => product != deleteProduct))
    //     console.log("my products => ",myproduct);
    //     if(total>deleteProduct.price){
    //         setTotal(total-deleteProduct.price)
    //     }
    //     console.log("total=>",total);
    // }

    const handleDelete =(id)=>{
        currentCartItems=store.get("persist");
        console.log("id to delete",id);
        console.log("before filter",currentCartItems);
        currentCartItems= currentCartItems.filter(item=>item.id!==id)
        console.log("after filter",currentCartItems);
        setItems(items.filter(item=>item.id!==id))
        let mytotal = 0;
    currentCartItems.map(item=>mytotal+=Number(item.saleprice))
    setTotalState(mytotal)
        store.set("persist",currentCartItems)
        console.log("after removing item",store.get("persist"));
      }
  
    return (
       
 <Layout>

    <div className="cart-main-area pt-90 pb-100">
        <div className="container">
            <h3 className="cart-page-title">Your cart items</h3>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <form action="#">
                        <div className="table-content table-responsive cart-table-content">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Product Name</th>
                                        <th>Until Price</th>
                                        {/* <th>Qty</th> */}
                                        <th>Subtotal</th>
                                        <th>action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* <tr>
                                        <td className="product-thumbnail">
                                            <a href="#"><img src={cart1} alt="" /></a>
                                        </td>
                                        <td className="product-name"><a href="#">Product Name</a></td>
                                        <td className="product-price-cart"><span className="amount">$260.00</span></td>
                                        <td className="product-quantity">
                                            <div className="cart-plus-minus">
                                                <input className="cart-plus-minus-box" type="text" name="qtybutton" />
                                            </div>
                                        </td>
                                        <td className="product-subtotal">$110.00</td>
                                        <td className="product-remove">
                                            <a href="#"><i className="fa fa-pencil"></i></a>
                                            <a href="#"><i className="fa fa-times"></i></a>
                                        </td>
                                    </tr> */}
                                    
                                    {
                                        store.get("persist")?store.get("persist").map((product,index)=>{
                                        return(
                                            <tr key={index}>
                                            <td className="product-thumbnail">
                                                <a href="#"><img src={product.img} alt="" style={{width:"82px",height:"82px"}} /></a>
                                            </td>
                                            <td className="product-name"><a href="#">{product.name} </a></td>
                                            <td className="product-price-cart"><span className="amount">₹{product.saleprice}</span></td>
                                            {/* <td className="product-quantity">
                                                <div className="cart-plus-minus">
                                                    <input className="cart-plus-minus-box" type="text" name="qtybutton" />
                                                </div>
                                            </td> */}
                                            <td className="product-subtotal">₹{product.saleprice}</td>
                                            <td className="product-remove">
                                                {/* <a href="#"><i className="fa fa-pencil"></i></a> */}
                                                <a onClick={()=>handleDelete(product.id)} ><i  className="fa fa-times"></i></a>
                                        </td>
                                        </tr>
                                        )
                                    }):
                                    <p>your cart is empty.</p>
                                
    
                                        }
                                        
                                </tbody>
                            </table>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="cart-shiping-update-wrapper">
                                    <div className="cart-shiping-update">
                                        <a href="#">Continue Shopping</a>
                                    </div>
                                    <div className="cart-clear">
                                        <button>Update Shopping Cart</button>
                                        <a href="#">Clear Shopping Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="cart-tax">
                                <div className="title-wrap">
                                    <h4 className="cart-bottom-title section-bg-gray">Estimate Shipping And Tax</h4>
                                </div>
                                <div className="tax-wrapper">
                                    <p>Enter your destination to get a shipping estimate.</p>
                                    <div className="tax-select-wrapper">
                                        <div className="tax-select">
                                            <label>
                                                * Country
                                            </label>
                                            <select className="email s-email s-wid">
                                                <option>Bangladesh</option>
                                                <option>Albania</option>
                                                <option>Åland Islands</option>
                                                <option>Afghanistan</option>
                                                <option>Belgium</option>
                                            </select>
                                        </div>
                                        <div className="tax-select">
                                            <label>
                                                * Region / State
                                            </label>
                                            <select className="email s-email s-wid">
                                                <option>Bangladesh</option>
                                                <option>Albania</option>
                                                <option>Åland Islands</option>
                                                <option>Afghanistan</option>
                                                <option>Belgium</option>
                                            </select>
                                        </div>
                                        <div className="tax-select">
                                            <label>
                                                * Zip/Postal Code
                                            </label>
                                            <input type="text" />
                                        </div>
                                        <button className="cart-btn-2" type="submit">Get A Quote</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="discount-code-wrapper">
                                <div className="title-wrap">
                                    <h4 className="cart-bottom-title section-bg-gray">Use Coupon Code</h4> 
                                </div>
                                <div className="discount-code">
                                    <p>Enter your coupon code if you have one.</p>
                                    <form>
                                        <input type="text" required="" name="name" />
                                        <button className="cart-btn-2" type="submit">Apply Coupon</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="grand-totall">
                                <div className="title-wrap">
                                    <h4 className="cart-bottom-title section-bg-gary-cart">Cart Total</h4>
                                </div>
                                <h5>Total <span>₹{totalState}</span></h5>
                                <div className="total-shipping">
                                    <h5>Total shipping</h5>
                                    <p>there is no shipping charges</p>
                                    {/* <ul>
                                        <li><input type="checkbox" /> Standard <span>200.00</span></li>
                                        <li><input type="checkbox" /> Express <span>300.00</span></li>
                                    </ul> */}
                                </div>
                                <h4 className="grand-totall-title">Grand Total  <span>₹{totalState}</span></h4>
                                <a href="#">Proceed to Checkout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>                    
</Layout>
                            
            
    )
}

export default Cartview
