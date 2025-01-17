import {Outlet} from 'react-router-dom';
import Navbar from './pages/Shared/Navbar/Navbar';
import Footer from './pages/Shared/Footer/Footer';

const App = () => {
    return (
        <section className="max-w-7xl mx-auto">
            <Navbar />
            <Outlet />
            <Footer />
        </section>
    );
};

export default App;
