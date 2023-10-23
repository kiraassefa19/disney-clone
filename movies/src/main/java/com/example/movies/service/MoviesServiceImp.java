package com.example.movies.service;

import com.example.movies.entity.Movies;
import com.example.movies.repository.MoviesRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MoviesServiceImp  implements MoviesService{
    private final MoviesRepository moviesRepository;

    @Override
    public Movies add(Movies movies) {
        return moviesRepository.save(movies);
    }

    @Override
    public List<Movies> getByTitle(String title) {
       return moviesRepository.getByTitle(title);
    }

    @Override
    public List<Movies> getByType(String type) {
        return moviesRepository.getByType(type);
    }
}
