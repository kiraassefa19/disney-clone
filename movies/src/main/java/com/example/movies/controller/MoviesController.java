package com.example.movies.controller;

import com.example.movies.entity.Movies;
import com.example.movies.model.Response;
import com.example.movies.service.MoviesServiceImp;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Map;

import static java.time.LocalDateTime.now;
import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/movies")
@RequiredArgsConstructor
public class MoviesController {
    private final MoviesServiceImp moviesServiceImp;

    @PostMapping("/add")
    public ResponseEntity<Response> add(@RequestBody @Valid Movies movies){
        return ResponseEntity.ok(
                Response.builder()
                        .timeStamp(now())
                        .data(Map.of("movie",moviesServiceImp.add(movies)))
                        .message("Movie Added")
                        .status(CREATED)
                        .statusCode(CREATED.value())
                        .build()
        );
    }
    @GetMapping("/search/{type}")
    public ResponseEntity<Response> getByType(@PathVariable("type") String type) throws IOException{
        return ResponseEntity.ok(
                Response.builder()
                        .timeStamp(now())
                        .data(Map.of("movies",moviesServiceImp.getByType(type)))
                        .message("Movies Retrieved")
                        .status(OK)
                        .statusCode(OK.value())
                        .build()
        );
    }
    @GetMapping("/find/{title}")
    public ResponseEntity<Response> getByTitle(@PathVariable("title") String title) throws IOException{
        return ResponseEntity.ok(
                Response.builder()
                        .timeStamp(now())
                        .data(Map.of("movies",moviesServiceImp.getByTitle(title)))
                        .message("Movies Retrieved")
                        .status(OK)
                        .statusCode(OK.value())
                        .build()
        );
    }
}
