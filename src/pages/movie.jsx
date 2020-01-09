import React from 'react';
import Header from '../components/header';
import MovieList from '../components/movie-list';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";

class Movie extends React.Component{
    // seluruh state berada di store.js
    componentDidMount = () => {
        console.log(this.props.match.params)
        store.setState({kategori: this.props.match.params.kategori, isLoad:true})
        this.props.runAxios()
    }
    render(){
        const listMovieCategory = this.props.listMovie.filter(item =>{
            if (item.Category === this.props.kategori){
                return item
            }
            return false
        })
        const loopMovie = listMovieCategory.map((value, index) => (
            MovieList(value.Poster, value.Title, value.Synopsis, value.Year)
            ))
        return(
            <body>
                <Header />
                <div className="pt-xl-5">
                    {this.props.isLoading ? <div class="text-center">Loading ....</div> : loopMovie}
                </div>
            </body>
        )
    }
}
export default connect("listMovie, isLoading, kategori", actions)(withRouter(Movie))