<?php

namespace App\Controller;

date_default_timezone_set('Europe/Vilnius');

use App\Entity\Comment;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\Routing\Annotation\Route;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;


class CommentsController extends AbstractController
{

    /**
     * @Route("/comments", name="comments_route")
     */
    public function index(Request $request)
    {
        $comment = new Comment();

        $form = $this->createFormBuilder($comment)
            ->add('name', TextType::class)
            ->add('comment', TextareaType::class)
            ->add('submit', SubmitType::class)
            ->getForm();

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $comment = $form->getData();
            $comment->setTimestamp(time());

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($comment);
            $entityManager->flush();

            return $this->redirectToRoute('home_route');
        }

        return $this->render('comments.html.twig', array(
            'form' => $form->createView(), 'title' => 'New Comment'
        ));
    }
    /**
     * @Route("/comments/delete/{id}", name="comments_delete")
     * @Method({"DELETE"})
     */
    public function delete(Request $request, $id)
    {
        $comment = $this->getDoctrine()->getRepository(Comment::class)->find($id);

        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->remove($comment);
        $entityManager->flush();

        $response = new Response();
        $response->send();
    }
    /**
     * @Route("/comments/edit/{id}", name="edit_comment")
     * @Method({"GET", "POST"})
     */
    public function edit(Request $request, $id)
    {
        $comment = new Comment();
        $comment = $this->getDoctrine()->getRepository(Comment::class)->find($id);

        $form = $this->createFormBuilder($comment)
            ->add('name', TextType::class)
            ->add('comment', TextareaType::class)
            ->add('update', SubmitType::class)
            ->getForm();

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $comment->setTimestamp(time());

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->flush();

            return $this->redirectToRoute('home_route');
        }

        return $this->render('edit.html.twig', array(
            'form' => $form->createView(), 'title' => 'Edit Comment'
        ));
    }
    /**
     * @Route("/api/comments", name="comments_api")
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function getUsers()
    {
        $comments = $this->getDoctrine()->getRepository(Comment::class)->findAll();
        $comments = $this->get('serializer')->serialize($comments, 'json');

        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent($comments);

        return $response;
    }
}
