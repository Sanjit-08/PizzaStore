import React from "react";
import Navbar from "./Navbar";


const useSticky = (props) =>{
    window.onscroll = function() {myFunction()};
    var navbar=document.getElementsByClassName("navbar");
    var sticky=navbar.offsetTop;
    function myFunction() {
        if (window.scrollY >= sticky) {
          navbar.classList.add("sticky")
        } else {
          navbar.classList.remove("sticky");
        }
      }

}

export default useSticky;