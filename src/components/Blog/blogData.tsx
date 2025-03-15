import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Las mejores noticias sobre la industria petrolera en Bolivia",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/01/Engineer_of_petroleum.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Ingeniero de campo",
    },
    tags: ["Petrolera"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Las formas de perforar un pozo",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT26qSlXPqhgsosqb0VBcQvicxdu2A6Vgk-Jw&s",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Ingeniero de Perforacion",
    },
    tags: ["Perforación"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Tips para progresar en las energias alternativas.",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhB9YjNBldVmY9s2FRYn6xciJ6uaFQ0btBJU6ifG_Xx6ephRO7V1szoYGDtiW6pWxFzlVFtEm5JyXsenXpV6BnzFrKCiUZq2jRQwCbBAC5v7061xHeE21q459uThjmftuFCWui8HhZe_I0w/s1600/ENERGIA-RENOVABLES-3.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Ingeniero en Energias",
    },
    tags: ["Energias Alternativas"],
    publishDate: "2025",
  },
];
export default blogData;
