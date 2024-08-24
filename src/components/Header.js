import React from 'react'

function Header() {
  return (
    <header className='header'>
        <h1>Shivang's Portfolio</h1>
        <nav>
            <ul>
                <li><a href='#about'>About</a></li>
                <li><a href='#projects'>Project</a></li>
                <li><a href='#contact'>Contact</a></li>
                <li><a href='/resume.pdf'download='resume.pdf'>Resume</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header