import React from 'react'
import '../styles.css';
import Navbar from './Navbar';
export default function Header() {
  const menuItems = [
    {
      label: 'Home ',
      href: '#home',
    },
    {
      label: 'About Us ',
      children: [
        { label: 'Company', href: '#company' },
        { label: 'Team', href: '#team' },
        {
          label: 'History',
          children: [
            { label: 'Founding', href: '#founding' },
            { label: 'Milestones', href: '#milestones' },
          ],
        },
      ],
    },
    {
      label: 'Services',
      children: [
        { label: 'Consulting', href: '#consulting' },
        { label: 'Design', href: '#design' },
        {
          label: 'Development',
          children: [
            { label: 'Frontend', href: '#frontend' },
            { label: 'Backend', href: '#backend' },
          ],
        },
      ],
    },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className='header'>
        <div className='nav'>
          <h1 style={{paddingLeft:"10px"}}>IMMT</h1>
          <Navbar  menuItems={menuItems}/>
        </div>   
    </div>
  )
}
