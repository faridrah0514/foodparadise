import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'


// cuma buat test aja
// import Test from './components/Testing/Test'

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Home />
                <Footer />
                {/* <Test /> */}
            </div>
        );
    }

}

export default App
