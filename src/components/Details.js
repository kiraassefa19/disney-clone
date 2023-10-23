import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Background,
  ImageTitle,
  ContentMeta,
  Controls,
  Player,
  Trailer,
  AddList,
  GroupWatch,
  SubTitle,
  Description,
} from "./DetailsElements";

import db from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const Details = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState("");

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieDocRef = doc(db, "movies", id);
        const movieDocSnap = await getDoc(movieDocRef);
        if (movieDocSnap.exists()) {
          const data = { id: movieDocSnap.id, ...movieDocSnap.data() };
          setDetailData(data);
          console.log(detailData);
        } else {
          console.log("No such document found!");
        }
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <Container>
      {detailData ? ( // Check if detailData is not null
        <>
          <Background>
            <img src={detailData.backgroundImg} alt={detailData.title} />
          </Background>
          <ImageTitle>
            <img src={detailData.titleImg} alt={detailData.title} />
          </ImageTitle>
          <ContentMeta>
            <Controls>
              <Player>
                <img src='/images/play-icon-black.png' alt='Play' />
                <span>Play</span>
              </Player>
              <Trailer>
                <img src='/images/play-icon-white.png' alt='Trailer' />
                <span>Trailer</span>
              </Trailer>
              <AddList>
                <span />
                <span />
              </AddList>
              <GroupWatch>
                <div>
                  <img src='/images/group-icon.png' alt='Group Watch' />
                </div>
              </GroupWatch>
            </Controls>
            <SubTitle>{detailData.subTitle}</SubTitle>
            <Description>{detailData.description}</Description>
          </ContentMeta>
        </>
      ) : (
        // You can render a loading indicator or an error message when detailData is null
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default Details;
