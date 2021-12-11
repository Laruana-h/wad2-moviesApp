import React,{useState, useEffect} from "react";
import { fetchMovieVideo } from "../../api/tmdb-api";
import { getMovie } from "../../api/tmdb-api";
import {withRouter} from "react-router-dom";
import { Modal } from "react-bootstrap";
import ReactPlayer from "react-player";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
//add the arrow in each side of the slide

export function MovieVideo({match}) {
    let params = match.params;
    const [video, setVideo] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [detail, setDetail] = useState([]);
    useEffect(()=> {
        const fetchAPI = async() =>{
            setVideo(await fetchMovieVideo(params.id));
            setDetail(await getMovie(params.id));
        };
        fetchAPI();
    }, [params.id]);

    const MoviePalyerModal = (props) => {
        const youtubeUrl = "https://www.youtube.com/watch?v=";
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title
                id="contained-modal-title-vcenter"
                style={{ color: "#000000", fontWeight: "bolder" }}
              >
                {detail.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: "#000000" }}>
              <ReactPlayer
                className="container-fluid"
                url={youtubeUrl + video.key}
                playing
                width="100%"
              ></ReactPlayer>
            </Modal.Body>
          </Modal>
        );
      };

    return (
      <div className="container">
      <div className="row mt-2">
        <MoviePalyerModal
          show={isOpen}
          onHide={() => {
            setIsOpen(false);
          }}
        ></MoviePalyerModal>
        <div className="col text-center" style={{ width: "100%" }}>
          <img
            className="img-fluid"
            src={`http://image.tmdb.org/t/p/original/${detail.backdrop_path}`}
            alt={detail.title}
          ></img>
          <div className="carousel-center">
            <i
              onClick={() => setIsOpen(true)}
              className="far fa-play-circle"
              style={{ fontSize: 95, color: "#f4c10f", cursor: "pointer" }}
            ></i>
          </div>
          <div
            className="carousel-caption"
            style={{ textAlign: "center", fontSize: 35 }}
          >
            {detail.title}
          </div>
        </div>
      </div>
   </div>
    )
}export default withRouter(MovieVideo);