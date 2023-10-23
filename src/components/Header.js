import React, { useEffect } from "react";
import {
  Nav,
  Logo,
  NavMenu,
  Login,
  UserImg,
  SignOut,
  DropDown,
} from "./styles/HeaderElements";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebaseConfig";

import {
  selectUserName,
  selectUserPhoto,
  setSignOutState,
  setUserLoginDetails,
} from "../features/user/userSlice";

const Header = (props) => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history("/home");
      }
    });
  });

  const handleAuth = async () => {
    if (!userName) {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history("/");
        })
        .catch((error) => alert(error.message));
    }
  };
  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Nav>
      <Logo>
        <img src='/images/logo.svg' alt='Disney +' />
      </Logo>
      {!userName ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <a href='/home'>
              <img src='/images/home-icon.svg' alt='Home' />
              <span>Home</span>
            </a>
            <a href='/search'>
              <img src='/images/search-icon.svg' alt='SEARCH' />
              <span>SEARCH</span>
            </a>
            <a href='/watchlist'>
              <img src='/images/watchlist-icon.svg' alt='WATCHLIST' />
              <span>WATCHLIST</span>
            </a>
            <a href='/original'>
              <img src='/images/original-icon.svg' alt='ORIGINALS' />
              <span>ORIGINALS</span>
            </a>
            <a href='/movie'>
              <img src='/images/movie-icon.svg' alt='MOVIES' />
              <span>MOVIES</span>
            </a>
            <a href='/serie'>
              <img src='/images/series-icon.svg' alt='SERIES' />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <SignOut>
            <UserImg src={userPhoto} alt={userName} />
            <DropDown>
              <span onClick={handleAuth}>SignOut</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  );
};

export default Header;
