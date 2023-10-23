import React from "react";
import { Container, Content, Wrap } from "./styles/NewDisneyElements";
import { Link } from "react-router-dom";

const NewDisney = ({movies}) => {
  return (
    <Container>
      <h4>New on Disney+</h4>
      <Content>
        {movies &&
          movies.map((movie) => (
            <Wrap key={movie.id}>
              <Link to={`/detail/${movie.id}`}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
    // <Container>
    //   <h4>New On Disney+</h4>
    //   <Content>
    //     <Wrap>
    //       <Link to='/'>
    //         <img
    //           src='https://m.media-amazon.com/images/I/71jwCBe30hL.jpg'
    //           alt='Moana'
    //         />
    //       </Link>
    //     </Wrap>
    //     <Wrap>
    //       <Link to='/'>
    //         <img
    //           src='https://i.ebayimg.com/images/g/M4cAAOSw5HJXLNQE/s-l1600.jpg'
    //           alt='Tangled'
    //         />
    //       </Link>
    //     </Wrap>
    //     <Wrap>
    //       <Link to='/'>
    //         <img
    //           src='https://www.themoviedb.org/t/p/original/tt8TxCL2W1Arv7vMYfjXMUO8JBW.jpg'
    //           alt='Mulan'
    //         />
    //       </Link>
    //     </Wrap>
    //     <Wrap>
    //       <Link to='/'>
    //         <img
    //           src='https://lumiere-a.akamaihd.net/v1/images/p_luca_21670_3c13c611.jpeg'
    //           alt='Luca'
    //         />
    //       </Link>
    //     </Wrap>
    //     <Wrap>
    //       <Link to='/'>
    //         <img
    //           src='https://media1.popsugar-assets.com/files/thumbor/jUZ7dw2WSsWsEZxvwA-O6IHiumQ=/1688x2500/filters:format_auto():quality(85):extract_cover()/2017/01/26/813/n/1922283/055dc333c3280d59_BeautyAndTheBeast58726d5b9fac8.jpg'
    //           alt='Beauty And The Beast'
    //         />
    //       </Link>
    //     </Wrap>
    //     <Wrap>
    //       <Link to='/'>
    //         <img
    //           src='https://cdn.europosters.eu/image/750/posters/star-wars-groupe-first-order-i134666.jpg'
    //           alt='Star Wars'
    //         />
    //       </Link>
    //     </Wrap>
    //     <Wrap>
    //       <Link to='/'>
    //         <img
    //           src='https://i.ebayimg.com/images/g/6QkAAOSwx1Rd3Ff0/s-l1200.jpg'
    //           alt='Toy Story 4'
    //         />
    //       </Link>
    //     </Wrap>
    //     <Wrap>
    //       <Link to='/'>
    //         <img
    //           src='https://filmartgallery.com/cdn/shop/products/Pocahontas-Vintage-Movie-Poster-Original-1-Sheet-27x41.jpg?v=1663224352'
    //           alt='Pocahontas'
    //         />
    //       </Link>
    //     </Wrap>
    //     <Wrap>
    //       <Link to='/'>
    //         <img
    //           src='https://di2ponv0v5otw.cloudfront.net/posts/2019/09/27/5d8e1ed901e2044824146810/m_5d8e1edcf2e15f4795532238.jpeg'
    //           alt='Snow White And The Seven Dwarfs'
    //         />
    //       </Link>
    //     </Wrap>
    //     <Wrap>
    //       <Link to='/'>
    //         <img
    //           src='https://i.ebayimg.com/images/g/IrMAAOSwobJkdHux/s-l1200.webp'
    //           alt='Brave'
    //         />
    //       </Link>
    //     </Wrap>
    //     <Wrap>
    //       <Link to='/'>
    //         <img
    //           src='https://i.ebayimg.com/images/g/X1AAAOSwYRRgfeVE/s-l1600.jpg'
    //           alt='Wanda Vision'
    //         />
    //       </Link>
    //     </Wrap>{" "}
    //     <Wrap>
    //       <Link to='/'>
    //         <img
    //           src='https://i.ebayimg.com/images/g/2UIAAOSwv85hrQgm/s-l1200.webp'
    //           alt='Lilo & Stitch'
    //         />
    //       </Link>
    //     </Wrap>
    //     <Wrap>
    //       <Link to='/'>
    //         <img
    //           src='https://lostposters.com/wp-content/uploads/2022/12/EarthMoods.jpg'
    //           alt='Earth Moods'
    //         />
    //       </Link>
    //     </Wrap>
    //     <Wrap>
    //       <Link to='/'>
    //         <img
    //           src='https://m.media-amazon.com/images/I/719lW69kGoL._AC_UF894,1000_QL80_.jpg'
    //           alt='Encanto'
    //         />
    //       </Link>
    //     </Wrap>
    //     <Wrap>
    //       <Link to='/'>
    //         <img
    //           src='https://i.etsystatic.com/12729518/r/il/39700e/1962980794/il_fullxfull.1962980794_8buv.jpg'
    //           alt='Aladdin'
    //         />
    //       </Link>
    //     </Wrap>
    //     <Wrap>
    //       <Link to='/'>
    //         <img
    //           src='https://www.originalfilmart.com/cdn/shop/products/grinch_2018_advance_original_film_art_a_1600x.jpg?v=1640391889'
    //           alt='The Grinch'
    //         />
    //       </Link>
    //     </Wrap>
    //     <Wrap>
    //       <Link to='/'>
    //         <img
    //           src='https://i.pinimg.com/1200x/ef/73/75/ef7375257807785389248cd3e69c881c.jpg'
    //           alt='Hawkeye'
    //         />
    //       </Link>
    //     </Wrap>
    //     <Wrap>
    //       <Link to='/'>
    //         <img
    //           src='https://www.originalfilmart.com/cdn/shop/products/Monster_s_University_2013_original_film_art_a_1600x.jpg?v=1580009585'
    //           alt='Monsters'
    //         />
    //       </Link>
    //     </Wrap>
    //     <Wrap>
    //       <Link to='/'>
    //         <img
    //           src='https://m.media-amazon.com/images/I/71JYINi-l0L._AC_UF894,1000_QL80_.jpg'
    //           alt='Up'
    //         />
    //       </Link>
    //     </Wrap>
    //     <Wrap>
    //       <Link to='/'>
    //         <img
    //           src='https://i.ebayimg.com/images/g/3hMAAOSw2x1XLNWV/s-l1200.webp'
    //           alt='The Lion King'
    //         />
    //       </Link>
    //     </Wrap>
    //     <Wrap>
    //       <Link to='/'>
    //         <img
    //           src='https://i.pinimg.com/736x/9d/54/28/9d5428e8815f5aeed2da1c3e78aaaa1c.jpg'
    //           alt='Enchanted'
    //         />
    //       </Link>
    //     </Wrap>
    //     <Wrap>
    //       <Link to='/'>
    //         <img
    //           src='https://i.pinimg.com/474x/dc/3a/32/dc3a324c50d7f058342bce9bf0cf7fb3.jpg'
    //           alt='Despicable Me'
    //         />
    //       </Link>
    //     </Wrap>
    //     <Wrap>
    //       <Link to='/'>
    //         <img
    //           src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fac4b84a-f2ba-4b67-8c2f-130230f54f3a/d8xz51c-ec40f2be-a665-4b99-a2a9-727ea81f56b7.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZhYzRiODRhLWYyYmEtNGI2Ny04YzJmLTEzMDIzMGY1NGYzYVwvZDh4ejUxYy1lYzQwZjJiZS1hNjY1LTRiOTktYTJhOS03MjdlYTgxZjU2YjcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.05OD9Arq-LOaRkCNpDCUf5shrXvi1DTdda74XH4VwPQ'
    //           alt='Inside Out'
    //         />
    //       </Link>
    //     </Wrap>
    //     <Wrap>
    //       <Link to='/'>
    //         <img
    //           src='https://m.media-amazon.com/images/I/711Bjf+3KuL.jpg'
    //           alt='The Little Mermaid'
    //         />
    //       </Link>
    //     </Wrap>
    //   </Content>
    // </Container>
  );
};

export default NewDisney;
