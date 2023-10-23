package com.example.movies.repository;

import com.example.movies.entity.Movies;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MoviesRepository extends JpaRepository<Movies, Integer> {
    List<Movies> getByTitle(String title);

    List<Movies> getByType(String type);
}
