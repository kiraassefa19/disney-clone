import React, { useEffect, useState } from "react";
import { Container } from "./styles/HomeElements";
import ImgSlider from "./ImgSlider";
import Viewer from "./Viewer";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Original";
import Trending from "./Tredning";

import { useDispatch } from "react-redux";
import { setMovies } from "../features/movies/movieSlice";

import { collection, getDocs } from "firebase/firestore";
import db from "../firebaseConfig";

const Home = () => {
  const dispatch = useDispatch();

  const [movieData, setMovieData] = useState({
    recommends: [],
    newDisney: [],
    originals: [],
    trending: [],
  });

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "movies"));
        const data = {
          recommends: [],
          newDisney: [],
          originals: [],
          trending: [],
        };

        querySnapshot.forEach((doc) => {
          const movie = { id: doc.id, ...doc.data() };

          switch (movie.type) {
            case "recommend":
              data.recommends.push(movie);
              break;
            case "new":
              data.newDisney.push(movie);
              break;
            case "original":
              data.originals.push(movie);
              break;
            case "trending":
              data.trending.push(movie);
              break;
            default:
              break;
          }
        });

        setMovieData(data);
        dispatch(setMovies(data));
       // console.log(data.recommends);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [dispatch]);

  return (
    <Container>
      <ImgSlider />
      <Viewer />
      <Recommends movies={movieData.recommends} />
      <NewDisney movies={movieData.newDisney} />
      <Originals movies={movieData.originals} />
      <Trending movies={movieData.trending} />
    </Container>
  );
};

export default Home;
