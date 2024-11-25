import "./styles/home.css";

function Home() {
    return (
        <div className="home page">
            <h1>Welcome to Express Store</h1>
            <p className="tagline">Your one-stop shop for fresh groceries and daily essentials!</p>

            <div className="content">
                <img className="main-img" src="/images/home.jpeg" alt="" />
                
                <img className="main-img" src="/images/body.jpeg" alt="" />
            </div>
        </div>
    );
}

export default Home;
