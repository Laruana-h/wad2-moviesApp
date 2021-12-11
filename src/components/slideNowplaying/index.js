import React,{useState, useEffect} from "react";
import RBCarousel from "react-bootstrap-carousel";
import { fetchNowPlayingMovies } from "../../api/tmdb-api";
//import {withRouter} from "react-router-dom";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";//add the arrow in each side of the slide
export function SlideNowPlaying() {
    const [nowPlaying, setNowPlaying] = useState([]);

    useEffect(()=> {
        const fetchAPI = async() =>{
            setNowPlaying(await fetchNowPlayingMovies());
        };
      //  console.log("nowplaying.....",nowPlaying);
      //  console.log("fetchapi.....",fetchAPI);
        fetchAPI();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    //use cariusel-caption to make the text of item.title show up
    const nowPlayingMovies = nowPlaying.slice( 0, 5 ).map((item, index) => {
        return(
            <div style={{height:500, width:"100%"}} key={index}>
                <div className ="carousel-center">
                    <img style={{height:600}} src={item.backPoster} alt ={item.title}/>
                </div>
                <div className ="carousel-center">
                    <i className ="far fa-play-circle" style={{fontSize:95,color:"#f4c10f"}}></i>
                </div>
                <div className="carousel-caption" style={{textAlign:"center", fontSize:30}}>{item.title}</div>
            </div>
        );
    });
//adjust the vertical distance between rows
    return (
        <div className="container">
            <div className="row mt-2">
                
                <div className="col">
                    <RBCarousel
                         autoplay= {true}
                         pauseOnVisibility={true}
                         slideshowSpeed ={5000}
                         version={4}
                         indicators={false}
                     >
                         {nowPlayingMovies}    
                    </RBCarousel>
                </div>
            </div>
        </div>
    )
}export default SlideNowPlaying;