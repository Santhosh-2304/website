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
    path:'/services',
    children: [
      
      {
        label: 'Software Training Services',
        path: '/software-training-services',
        singlePage: false,
        children: [
          { label: 'Training and Talent management', path: '/training-talent'},
          { label: 'Academic Training Programs', path: '/academic-training' },
          { label: 'Corporate Training', path: '/corporate-training'},
        ]
      },

      {
        label: 'Software and Technology Solutions',
        path: '/software-technology-solutions',
        singlePage: true,  
        children: [
          { label: 'Application Development' },
          { label: 'Managed IT Services'},
          { label: 'Consulting & Support' },
          { label: 'Digital Transformation' },
          { label: 'Cloud Solutions'},
          { label: 'Cybersecurity & Digital Forensics' },
        ]
      },

      { 
        label: 'Research and Development',
        path:'/research-development',
        singlePage: false
      },
    ]
  },
  {  label: 'Careers', path: '/careers'},
  {  label: 'About Us', path: '/aboutus'},
  { label: 'Contact Us' , path: '/contact'},
];


  return (
    <div className='header' > 
    <div className='socialmediatool bg-gradient-to-r from-black via-gray-600 to-gray-300 pt-1 h-[30px] w-full '>
       <ul className='block text-right px-2'>
          <li style={{display:'inline-block'}}><i className="fa-brands fa-instagram text-2xl"></i></li>
          <li style={{display:'inline-block'}}><i class="fa-brands fa-youtube text-2xl"></i></li>
          <li style={{display:'inline-block'}}><i class="fa-brands fa-linkedin text-2xl"></i></li>
          <li style={{display:'inline-block'}}><i class="fa-brands fa-facebook text-2xl"></i></li>
          <li style={{display:'inline-block'}}><i class="fa-brands fa-x-twitter text-2xl"></i></li>
        </ul>  
      </div>     
        <div className='header-div' >
          <Link to='/' className='flex' >
            <img src='logo.png' className='md:h-[110px] md:w-[125px] h-20 w-20'></img>            
            <h1 className='md:mt-7 font-bold md:text-4xl text-white md:ml-25 pt-2 text-lg text-center mr-5'>INNOVATIONAL METTLE MINDS TECH PRIVATE LIMITED</h1>
          </Link>
        </div>
        <Navbar  menuItems={menuItems}/>
    </div>

  )
}