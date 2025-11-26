import React from 'react'
import '../styles.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
export default function Header() {
  const menuItems = [
    {
      label: 'Home ',
      path:'/'
    },
    {
      label: 'Services ',
      children: [
        { label: 'Software Training Services', children: [
            { label: 'Training and Talent management', path: '/training-talent'},
            { label: 'Academic Training Programs', path: '/academic-training' },
            { label: 'Corporate Training', path: '/corporate-training'},
          ], path: '/software-training-services' },
        
        { label: 'Software and Technology Solutions',
          children: [
            { label: 'Application Development' },
            { label: 'Managed IT Services'},
            { label: 'Consulting & Support' },
            { label: 'Digital Transformation' },
            { label: 'Cloud Solutions'},
            { label: 'Cybersecurity & Digital Forensics' },
          ], path: '/software-technology-solutions' 
        },
        { label: 'Research and Development' ,  path:'/research-development' },
      ],
    },
    {  label: 'Careers', path: '/careers'},
    {  label: 'About Us', path: '/aboutus'},
    { label: 'Contact' , path: '/contact'},
  ];

  return (
    <div className='header'>
        <div className='nav'>
          <Link to='/' className='flex' >
          <img src='logo.png' style={{height:"55px", width:"65px", marginTop:"23px"}}></img>
          <h1 className='mt-7 font-bold text-3xl '>IMMT</h1>
          </Link>
        </div>
          <Navbar  menuItems={menuItems}/>
    </div>
  )
}
