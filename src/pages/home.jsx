import React from 'react';
import Header from '../components/header';
import HomeBody from '../components/home-body';

class Home extends React.Component{
    render(){
        return(
        <body>
            <Header />
            <div className="pt-xl-5">
                <HomeBody />
            </div>
        </body>
        )
    }
}
export default Home;