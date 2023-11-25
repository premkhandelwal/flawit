import Navbar from '../Navbar/Navbar';
import './Home.css';

function Home() {
    const title: String = "Creative & Innovative\nDigital Solutions";

    return (
        <>
        <div className="container">
            <div className="bg-image"></div>
            <div className="bg-text">
                <Navbar/>
                <div className="text-content">
                    <div className="small-title">{title}</div>
                    <div className="large-title">{title}</div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Home;
