import React from 'react';

class BodyLogIn extends React.Component{
    render(){
        return (
        <div class="container">
            <form onSubmit={this.props.preventDefault}>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="emailInput" onChange={e => this.props.changeInput(e)}/>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name="passwordInput" onChange={e => this.props.changeInput(e)} required/>
            </div>
            <button type="submit" class="btn btn-primary" onClick={() => this.props.postLogin()}>Login</button>
            </form>

        </div>
        )
    }
}
export default BodyLogIn;