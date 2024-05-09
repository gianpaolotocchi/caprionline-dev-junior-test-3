<?php

namespace App\Controller;

use App\Repository\MovieRepository;
use App\Repository\GenreRepository;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class MoviesController extends AbstractController
{
    public function __construct(
        private MovieRepository $movieRepository,
        private GenreRepository $genreRepository,
        private SerializerInterface $serializer
    ) {}

    
    #[Route('/movies', methods: ['GET'])]
    public function list(): JsonResponse
    {
        $movies = $this->movieRepository->findAll();
        $data = $this->serializer->serialize($movies, "json", ["groups" => "default"]);

        return new JsonResponse($data, json: true);
    }

    // #[Route('/genres', methods: ['GET'])]
    // public function listGenres($genreName): JsonResponse
    // {
    //     $genres = $this->genreRepository->findAllWithGenres($genreName);
    //     $data = $this->serializer->serialize($genres, "json", ["groups" => "default"]);


    //     return new JsonResponse($data, json: true);
    // }

}
