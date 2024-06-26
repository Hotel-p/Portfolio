// ProjectData.jsx
import developer from './developer.svg';
import cvimg1 from '../../assets/cv-maker-img1.png';
import cvimg2 from '../../assets/cv-maker-img2.png';
import etchasketch1 from '../../assets/etchasketch-img1.png';
import etchasketch2 from '../../assets/etchasketch-img2.png';
import bookstoreimg1 from '../../assets/bookstore-img1.png';
import bookstoreimg2 from '../../assets/bookstore-img2.png';
import estateimg1 from '../../assets/estate-img1.png';
import estateimg2 from '../../assets/estate-img2.png';

const ProjectDa = [
    {
        title: "CV-Maker",
        image: [cvimg1,cvimg2], // Path to the image file
        tech: ["React","Css","HTML","JS"], // Array of technologies used
        desc: ["A Site to help make customizable resumes for users, which can downloaded in pdf format.", 
                "Visit site to know more!."], // Array of project descriptions
        link: ["https://cv-maker-hotelp.netlify.app/"]
    },
    {
        title: "Etch-a-sketch",
        image: [etchasketch1,etchasketch2], // Path to the image file
        tech: ["HTML", "CSS", "JavaScript"], // Array of technologies used
        desc: ["A Frontend Project which allows to make simple pixalated drawings.", 
                "Visit site to know more!."], // Array of project descriptions
        link: ["https://hotel-p.github.io/etch-a-sketch/"]
    },
    {
        title: "Image Caption Generator",
        image: [developer,developer], // Path to the image file
        tech: ["ML", "Python", "PyTorch"], // Array of technologies used
        desc: ["A machine learning model which returns an appropriate caption describing input image.", 
                "Uses CNN models for extracting image features and RNN for forming sentences based on extracted features."] // Array of project descriptions
    },
    {
        title: "CICD Pipeline with Jenkins",
        image: [developer,developer], // Path to the image file
        tech: ["Jenkins", "Maven", "Docker", "AWS"], // Array of technologies used
        desc: ["A CICD Pipeline built for a java application.",
               "Uses EC2 instances for running Jenkins and ECR for pushing docker images."] // Array of project descriptions
    },
    {
        title: "Real Estate Website",
        image: [estateimg1,estateimg2], // Path to the image file
        tech: ["React", "Node", "Express", "MongoDB"], // Array of technologies used
        desc: ["A real estate website which allows listing properties for buying or renting.",
               "Includes implementation of JWT authentication and other requirements"], // Array of project descriptions
        link: ["https://mern-estate-291n.onrender.com/"]
    },
    {
        title: "Library Website",
        image: [bookstoreimg1,bookstoreimg2], // Path to the image file
        tech: ["React", "Node", "Express", "MongoDB"], // Array of technologies used
        desc: ["A simple full-stack web application for maintaining a list of books, with CRUD operations included",
               "Visit Site to know more!"], // Array of project descriptions
        link: ["https://bookstore-frontend-j282.onrender.com/"]
    },
];

export default ProjectDa;
