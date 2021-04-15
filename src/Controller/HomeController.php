<?php

namespace App\Controller;

date_default_timezone_set('Europe/Vilnius');

use App\Entity\Comment;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="home_route")
     */
    public function index(): Response
    {
        $comments = $this->getDoctrine()->getRepository(Comment::class)->findAll();

        return $this->render('home.html.twig', ['title' => 'All Comments', 'comments' => $comments]);
    }
}
