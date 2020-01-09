import React from 'react';
import Header from '../components/header';
import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";
import BodyLogIn from '../components/body-login';

function BodyProfile () {
    return (
<div className="row">
<div className="col-md-3 border border-light" style={{backgroundColor:"#F7F7F7"}}>
    <img src={require("../logo.svg")} width={"100%"} />
</div>
<div className="col-md-9">
    <div className="row">
        <h3 style={{fontWeight:"bold"}}>Name : {this.props.username}</h3>
    </div>
    <div className="row">
        <span>Email : {this.props.email}</span>
    </div>
</div>
</div>)
}

class Profile extends React.Component{
    render(){
        return(
            <body>
                <Header />
                <div className="container pt-xl-5">
                    <div className="row">
                        {/* Check apakah sudah login */}
                        {this.props.isLogin ? 
                         (
                            <div className="row">
                            <div className="col-md-3 border border-light" style={{backgroundColor:"#F7F7F7"}}>
                                <img src={this.props.avatar} width={"100%"} />
                            </div>
                            <div className="col-md-9 border border-light">
                                <div className="row">
                                    <h3 style={{fontWeight:"bold"}}>Name : {this.props.username}</h3>
                                </div>
                                <div className="row">
                                    <span>Email : {this.props.email}</span>
                                </div>
                            </div>
                            </div>): (<div class="text-center"><h1>KAMU BELUM LOGIN!</h1><Link to="/login" class="text-center">Login disini!</Link> 
                         </div>) 
                        }
                    </div>
                </div>
            </body>
        )
    }
}
export default connect("avatar, email, username, isLogin", actions)(withRouter(Profile))