import "./styles/admin.css"
import { useState } from "react";
function Admin() {

    const [coupon, setCoupon] = useState({
        code:'', //not required but it helps 
        discount:''
    });
    const[product, setProduct] = useState({
        title: "",
        category: "",
        image: "",
        price: ""
    })
    

    function handleCouponInput(e){
        //console.log("value change",e.target.value);
        const val = e.target.value;
        const name = e.target.name;

        

            // rule for state variables (if array or obj -> 3 steps)
            //create a copy
            let copy = {...coupon}
            //modify the copy
            if(name === "discount"){
                copy.discount = val;
            }else{
                copy.code = val;
            }
            //set the copy back
            setCoupon(copy);
        }

    function saveCoupon(){
        console.log(coupon);
    }
    

    function handleProductInput(e){
        const val = e.target.value;
        const name = e.target.name;

        let copy ={...product};
        copy[name] = val; 
        setProduct(copy);
    }

    function saveProduct(){
        console.log(product);
    }

    return (
        <div className="admin page">
            <h1>Store Administration</h1>

            <div className="parent">

                <div className="products form">
                    <h3>Create Products</h3>
                <div className='mb-3'>
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" onBlur={handleProductInput} name="title"/>
                </div>

                <div className='mb-3'>
                    <label className="form-label">Category</label>
                    <input type="text" className="form-control" onBlur={handleProductInput} name="category"/>
                </div>

                <div className='mb-3'>
                    <label className="form-label">Image</label>
                    <input type="text" className="form-control" onBlur={handleProductInput} name="image"/>
                </div>

                <div className='mb-3'>
                    <label className="form-label">Price</label>
                    <input type="number" className="form-control" onBlur={handleProductInput} name="price"/>
                </div>

                <div className='mb-5'>
                    <button className="btn btn-outline-dark" onClick={saveProduct}>Save Product</button>
                </div>
                </div>

                <div className="coupons form">
                    <h3>Create Coupons</h3>

                <div className='mb-3'>
                    <label className="form-label">Code</label>
                    <input type="text" className="form-control" onBlur={handleCouponInput} name="code"/>
                </div>

                <div className='mb-3'>
                    <label className="form-label">Discount</label>
                    <input type="number" className="form-control" onBlur={handleCouponInput} name="discount"/>
                </div>

                <div className='mb-5'>
                    <button className="btn btn-outline-dark" onClick={saveCoupon}>Save Coupon</button>
                </div>
                
                </div>
            
            </div>
        </div>
    );
}

export default Admin;

