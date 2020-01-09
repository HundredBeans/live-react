import React from 'react';
import { Link } from 'react-router-dom';
import { store } from '../store';

class HomeBody extends React.Component{
    render(){
        return(
<div className="container">
<div className="row">
    <div className="col-md-3">
<table class="table table-borderless" style={{border:"solid", borderWidth:"0.1px", borderColor:"silver"}}>
<thead class="">
    <tr>
        <th class="p-0">
            <div class="col-md-12 pt-4 text-center">
                <Link to = "/romance"><h3 style={{fontWeight:"bold"}}>Romance</h3></Link>
            </div>
        </th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>
            <div className="col-md-12 py-1 text-center">
                <img src={"https://m.media-amazon.com/images/M/MV5BOWJhMjJjMDItODQxYS00ODIyLWJhYzAtNTliMDhkZjM0YTA1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"} width={"100%"} style={{backgroundColor:"#F7F7F7"}}/>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div className="col-md-12 text-center">
                <Link to="/romance"><button type="button" class="btn btn-primary" onClick={store.setState({isLoading:true})}>See Movies</button></Link>
            </div>
        </td>
    </tr>
</tbody>
</table>
</div>
<div className="col-md-3">
<table class="table table-borderless" style={{border:"solid", borderWidth:"0.1px", borderColor:"silver"}}>
<thead class="">
    <tr>
        <th class="p-0">
            <div class="col-md-12 pt-4 text-center">
                <Link to = "/action"><h3 style={{fontWeight:"bold"}}>Action</h3></Link>
            </div>
        </th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>
            <div className="col-md-12 py-1 text-center">
                <img src={"https://m.media-amazon.com/images/M/MV5BZmEzNjhiZWEtNTM5OS00ZmQyLThhYjEtNjY4ZDZhOGFkMzI4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"} width={"100%"} style={{backgroundColor:"#F7F7F7"}}/>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div className="col-md-12 text-center">
                <Link to="/action"><button type="button" class="btn btn-primary" onClick={store.setState({isLoading:true})}>See Movies</button></Link>
            </div>
        </td>
    </tr>
</tbody>
</table>
</div>
<div className="col-md-3">
<table class="table table-borderless" style={{border:"solid", borderWidth:"0.1px", borderColor:"silver"}}>
<thead class="">
    <tr>
        <th class="p-0">
            <div class="col-md-12 pt-4 text-center">
                <Link to = "/fiction"><h3 style={{fontWeight:"bold"}}>Fiction</h3></Link>
            </div>
        </th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>
            <div className="col-md-12 py-1 text-center">
                <img src={"https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg"} width={"100%"} style={{backgroundColor:"#F7F7F7"}}/>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div className="col-md-12 text-center">
                <Link to="/fiction"><button type="button" class="btn btn-primary" onClick={store.setState({isLoading:true})}>See Movies</button></Link>
            </div>
        </td>
    </tr>
</tbody>
</table>
</div>
<div className="col-md-3">
<table class="table table-borderless" style={{border:"solid", borderWidth:"0.1px", borderColor:"silver"}}>
<thead class="">
    <tr>
        <th class="p-0">
            <div class="col-md-12 pt-4 text-center">
                <Link to = "/romance"><h3 style={{fontWeight:"bold"}}>Comedy</h3></Link>
            </div>
        </th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>
            <div className="col-md-12 py-1 text-center">
                <img src={"https://m.media-amazon.com/images/M/MV5BNTAyNDM0OGMtMmQ5OS00OGJiLTljMDUtY2Y1OTFlYmM2ZTk2XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"} width={"100%"} style={{backgroundColor:"#F7F7F7"}}/>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div className="col-md-12 text-center">
                <Link to="/comedy"><button type="button" class="btn btn-primary" onClick={store.setState({isLoading:true})}>See Movies</button></Link>
            </div>
        </td>
    </tr>
</tbody>
</table>
</div>
</div>
</div>
        )
    }
}
export default HomeBody;