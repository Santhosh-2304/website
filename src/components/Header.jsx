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
      path:'/services'
    },
    {  label: 'Careers', path: '/careers'},
    {  label: 'About Us', path: '/aboutus'},
    { label: 'Contact' , path: '/contact'},
  ];

  return (
    <div className='header' > 
    <div className='socialmediatool' style={{height:"40px", width:"100%",backgroundColor:"black"}}>
       <ul style={{display:'block', textAlign:'Right'}}>
          <li style={{display:'inline-block'}}><img src='facebook.png' style={{height:"30px", width:"30px", marginTop:"4px",marginRight:"6px"}}></img></li>
          <li style={{display:'inline-block'}}><img src='instagram.png' style={{height:"30px", width:"30px", marginTop:"4px",marginRight:"6px"}}></img></li>
          <li style={{display:'inline-block'}}><img src='social.png' style={{height:"30px", width:"30px", marginTop:"4px",marginRight:"6px"}}></img></li>
          <li style={{display:'inline-block'}}><img src='youtube.png' style={{height:"30px", width:"30px", marginTop:"4px",marginRight:"6px"}}></img></li>        
        </ul>  
      </div>     
        <div className='header-div' >
          <Link to='/' className='flex' >
            <img src='logo.png' style={{height:"120px", width:"125px", marginTop:"0px"}}></img>            
            <h1  className='mt-7 font-bold text-4xl text-white' style={{ marginTop:"40px",marginLeft:"70px"}}>INNOVATIONAL METTLE MINDS TECH PRIVATE LIMITED</h1>
          </Link>
        </div>
        <Navbar  menuItems={menuItems}/>
    </div>

  )
}
