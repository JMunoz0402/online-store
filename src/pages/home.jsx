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
        </div>
    );
}

export default Home;
