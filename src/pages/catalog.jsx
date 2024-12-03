import "./styles/catalog.css";
import Product from "../components/product";
import { useEffect, useState } from "react";
import DataService from '../services/dataService';

function Catalog() {
    const [catalog, setCatalog] = useState([]);
    const [categories, setCatagories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");

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

    function onCategorySelected(category) {
        setSelectedCategory(category);
    }

    function clearFilter(){
        setSelectedCategory("");
    }

    // if catalog is empty
    if(!catalog.length) return "Loading...";
    
    return(
        <div className='content page'>
            <div>
                <h1>This is where the catalog it's going to be.</h1>
            </div>
            <div className="filters">
                <button onClick={clearFilter} className="btn btn-sm btn-outline-success">ALL</button>
                {categories.map(cat => <button onClick={() => onCategorySelected(cat)} key={cat} classname="btn btn-sm btn-outline-success">{cat}</button>)}
            </div>
            <div>
                {catalog
                .filter(prod => !selectedCategory || prod.category === selectedCategory)
                .map(Prod => <Product data={prod} key={prod._id}></Product> )
                }
            </div>

            
        </div>
    );
}
export default Catalog;