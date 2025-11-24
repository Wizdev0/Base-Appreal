# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly
- See the anmation on the button  

### Screenshot

![](./Assets/Bassel%20ss.png)

### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS transitions
- JavaScript
- JavaScript event listeners 

### What I learned

I learnt how to use transitions effectively, I am still learning how to apply a lot of javaScript attritubtes to my website.


```css
.sign-up-btn{
    margin-left: -50px;
    padding: 18px;
    border-radius: 30px;
    border: 1px solid hsl(0, 36%, 70%);
    background: hsl(0, 97%, 71%);
    box-shadow: 0px 3px 15px  hsl(0, 97%, 75%);
    
    transition: all 1s ease-out 0s;
}

.sign-up-btn:hover{
    cursor: pointer;
    background-color: rgb(253, 147, 165);
    scale: 1.1;
}

.end{
    margin-bottom: 90px;
}
```
```js
const input = document.getElementById("input");
const button = document.getElementById("button");
const errorMess = document.getElementById("errorMess");

const emailPattern = /^[^\s@]+@[^\s]+\.[^\s@]+$/;


button.addEventListener("click", () =>{
    const email = input.value.trim();

    if(!emailPattern.test(email)) {
        errorMess.style.display = "flex";
        input.classList.remove("active");
        input.style.border = "1px solid red";
    } else {
        errorMess.style.display = "none";
        input.classList.add("active");
        input.style.border = "1px solid pink";

        alert("Your email have been submitted");

        location.reload();
    }
 
    
   input.addEventListener("input", () => {
    if(!emailPattern.test(email)) {
         errorMess.style.display = "none";
        input.classList.add("active");
        input.style.border = "1px solid pink";
    } else {
        errorMess.style.display = "flex";
        input.classList.remove("active");
        input.style.border = "1px solid red";
    }
       
    });
 
});
```
*

### Continued development

As usual, javaScript development continues........



## Author
- Frontend Mentor - [@Wizdev0](https://www.frontendmentor.io/profile/Wizdev0)
- Twitter - [@otutech](https://www.twitter.com/otutech)ction's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
