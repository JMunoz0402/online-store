import "./styles/home.css";

function Home() {
    return (
        <div className="home">
            <h1>Welcome to Express Store</h1>
            <p>Your one-stop shop for fresh groceries and daily essentials!</p>

            <div className="images">
                <img src="/images/home.jpeg" alt="Welcome to Express Store" className="image" />
                <img src="/images/body.jpeg" alt="Groceries and Essentials" className="image" />
            </div>

            <div className="store-info">
                <h2>Store Information</h2>
                <p><strong>Address:</strong> 123 Market St, San Diego</p>
                <p><strong>Operating Hours:</strong> Mon-Sat, 9:00 AM - 8:00 PM</p>
                <p><strong>Contact Number:</strong> +123 456 7890</p>
            </div>
        </div>
    );
}

export default Home;
