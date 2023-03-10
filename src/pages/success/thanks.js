
import React, { Component } from 'react'
import store from "store";
import Layout from "../../components/Layout"
import Banner from "../../components/Reusable/Banner"


class  Thanks extends Component {
    
    componentDidMount(){
        store.remove("persist")
    }


   render(){
    return (

        <Layout>
             <Banner  title={"Thanks"}/>
            <div className="my-5 py-5">
                <h1 className="text-center" style={{fontWeight:"500"}}>Thank you for Shopping with us</h1>
                <h4 className="text-center my-4" style={{fontWeight:"400"}}>your order number : {store.get("order")?store.get("order")[0].orderid:null}</h4>

                <div className="container my-5">
                <div className="row">
                            <div className="col-lg-12">
                                <div className="cart-shiping-update-wrapper mx-auto" style={{justifyContent:"center"}}>
                                    <div className="cart-clear">
                                        <a href="/">Back to Home</a>
                                    </div>
                                    
                                    <div className="cart-shiping-update">
                                        <a href="/collections/shop">Continue Shopping</a>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                </div>
            </div>
             {/* <a href="/"> <button className="btn btn-success">Back to Home</button> </a> */}
        </Layout>
     )
   }
}

export default Thanks
