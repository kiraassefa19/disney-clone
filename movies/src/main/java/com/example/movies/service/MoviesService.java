package com.example.movies.service;

import com.example.movies.entity.Movies;

import java.util.List;

public interface MoviesService {
    Movies add(Movies movies);

    List<Movies> getByTitle(String title);

    List<Movies> getByType(String type);

}
