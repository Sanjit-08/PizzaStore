import React from "react";

const Navbar=()=>{
    const [scrolled,setScrolled]=React.useState(false);
    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset >=500 ){
          setScrolled(true);
          document.body.style.paddingTop=100 + 'px';
        }
        else{
          setScrolled(false);
          document.body.style.paddingTop=0;
        }
      }
    
    window.addEventListener('scroll',handleScroll)
    let navbarClasses=['navbar'];
      if(scrolled){
        navbarClasses.push('scrolled');
      }
      return(
    <header className={navbarClasses.join(" ")}>
    <nav className="navbar">
        <p className="welcome">WELCOME!!</p>
        <h1>PI<span class="z"><span class="z1">Z</span>Z</span>A OF THE DAY</h1>
    </nav>
    </header>
);

      }

export default Navbar;