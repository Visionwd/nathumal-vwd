import React, { Component } from 'react'

import axios from "axios"
import Product from "../../../components/Reusable/Product"

export class Bhugga extends Component {

    state={
        divPush:[],
        items:[],
    }

    componentDidMount(){
        
        axios.post("https://pixelshakers.com/nathumalapi/appapi/items_homepage",
        JSON.stringify({
             "service_request": {
                 "params": {
                    "cat_id":"1",
                    "page":"1"
                 },
                 "request_info": {
                     "source_type": "android"
                 }
             },
             "version": "1.0"
         }),{
     headers: {
         'Content-Type': 'application/json'
       }
    })
    .then(res=>{
        console.log(res);
        let {divPush} = this.state
        this.setState({
            ...this.state,
           divPush:[]
        })
        res.data.items.map(({item_id,item_name,item_img,item_price,item_saleprice,cat_id})=>{
    
            divPush.push(
                <Product id={item_id} catid={cat_id} AddTocart={this.props.AddTocart} key={item_id} name={item_name} img={"https://www.pixelshakers.com/nathumalapi/uploads/"+item_img}  price={item_price} saleprice={item_saleprice} />
            )
            this.setState({
                ...this.state,
               divPush
            })
        })
    
        this.setState({
            ...this.state,
            items:res.data.items
        })
     })
        }

        AddTocart = (item)=>{
            this.props.AddTocart(item)
        }
        
    render() {
        return (
           
            <div className="tab-pane active" id="product-1">
                   <div className="custom-row-4">
                    {
                        this.state.items.map(({item_id,item_name,item_img,item_price,item_saleprice,cat_id,item_desc})=>{
                            return <Product id={item_id} description={item_desc} AddTocart={this.AddTocart} catid={cat_id} key={item_id} name={item_name} img={"https://www.pixelshakers.com/nathumalapi/uploads/"+item_img} price={item_price} saleprice={item_saleprice} />
                        })
                    }
                   </div>
                    
               </div>

               
        )
    }
}

export default Bhugga
