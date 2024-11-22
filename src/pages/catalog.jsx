import "./styles/catalog.css";
import Product from "../components/product";
import { useEffect, useState } from "react";
import DataService from '../services/dataService';

function Catalog() {
    const [catalog, setCatalog] = useState([]);
    const [categories, setCatagories] = useState([]);

    function loadData() {
        let productList = DataService.getProducts();
        setCatalog(productList);

        let categoriesList = DataService.getCategories();
        setCatagories(categoriesList);
    }

    useEffect(function() {
        // when the page loads
        loadData();
    }, []);

    // if catalog is empty
    if(!catalog.length) return "Loading...";
    
    return(
        <div className='content'>
            <div>
                <h1>This is where the catalog it's going to be.</h1>
            </div>
            <div className="filters">
                {categories.map(cat => <button classname="btn btn-sm btn-outline-success">{cat}</button>)}
            </div>
            <div>
                {catalog.map(prod => <Product data={prod}></Product> )}
            </div>

            
        </div>
    );
}
export default Catalog;