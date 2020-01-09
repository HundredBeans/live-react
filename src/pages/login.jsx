import React from 'react';
import Header from '../components/header';
import BodyLogIn from '../components/body-login';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";
import axios from 'axios';

class LogIn extends React.Component{
    // semua state dan data pada login ada di store.js
    isLogin = this.props.isLogin
    // Ambil value email sama password dari form input
    changeInput = e => {
        store.setState({[e.target.name] : e.target.value})
    }
    postLogin = () => {
        const data = {
            email : this.props.emailInput,
            password : this.props.passwordInput
        }
        // check supaya login form tidak boleh kosong
        if (this.props.emailInput === "" | this.props.passwordInput === ""){
            alert("tolong diisi itu form loginnya, baru pencet login")
            console.log(this.props.history)

        }else{
            const self = this
        axios 
            .post("https://api-todofancy.herokuapp.com/api/auth", data)
            .then(function(response) {
                console.log(response.data);
                if (response.data.status === "oke"){
                    store.setState({"isLogin": true});
                    store.setState({"username": response.data.user_data.username});
                    store.setState({"email": response.data.user_data.email});
                    store.setState({"avatar":response.data.user_data.avatar});
                    self.props.history.push("/profile");
                }
            })
            .catch(function(error){
                console.log(error)
            })
        }

    }
    render(){
        return(
            <body>
                <Header {...this.props}/>
                <div className="pt-xl-5">
                {/* Check jika orang tersebut sudah login, maka ada pemberitahuan sudah login */}
                {this.isLogin ? (<div class="text-center"><h1>KAMU SUDAH LOGIN!</h1> 
                </div>) : <BodyLogIn 
                        changeInput={e => this.changeInput(e)} 
                        postLogin={this.postLogin}
                        preventDefault={e => e.preventDefault()}/>
                        }
                </div>
            </body>
        )
    }
}
export default connect("isLogin, email, emailInput, passwordInput, username, avatar", actions)(withRouter(LogIn));