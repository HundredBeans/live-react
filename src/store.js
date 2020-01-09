import createStore from 'unistore';
import axios from 'axios';

const initialState = {
    listMovie : [],
    kategori : "romance",
    isLoading : true,
    // state login
    isLogin : false, 
    email : "",
    emailInput : "",
    passwordInput : "",
    username : "",
    avatar : ""
}

export const store = createStore(initialState)

const runAxios = (state) =>{
    axios 
        .get("https://api-todofancy.herokuapp.com/api/movies")
        .then(function(response){
            store.setState({ listMovie: response.data.movies, isLoading: false})
            // handle success
            console.log(response.data.movies)
            console.log(initialState.isLoading)
        })
        .catch(function(error){
            store.setState({isLoading: false})
            // handle error
            console.log(error)
        })
    }

export const actions = store => ({
    runAxios: (state) =>{
        runAxios(state)
    }
})