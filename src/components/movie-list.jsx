import React from 'react';

// Bikin fungsi untuk looping pada tiap variable di format JSX
function MovieList(foto, judul, deskripsi, tahun){
    return(
        <div className="container">
            <div className="row pb-5">
                <div className="col-md-3 text-center border border-black" style={{backgroundColor:"#F7F7F7"}}>
                    <img src={foto} width={"80%"}/>
                </div>
                <div className="col-md-9 border border-light">
                    <div className="row py-3 pl-3" >
                        <h4 style={{fontWeight:"bold"}}>{judul}</h4>
                    </div>
                    <div className="row py-3 pl-3">
                        <span>{tahun}</span>
                    </div>
                    <div className="row py-3 pl-3">
                        <p>{deskripsi}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MovieList;