const menu = document.querySelector('.menu');
const bars = document.querySelector('.bars');
const h2_1 = document.querySelector('.h2_1');
const h2_2 = document.querySelector('.h2_2');
const h2_3 = document.querySelector('.h2_3');
const h2_4 = document.querySelector('.h2_4');
const pas_1 = document.querySelector('.pas_1');
const pas_2 = document.querySelector('.pas_2');
const pas_3 = document.querySelector('.pas_3');
const pas_4 = document.querySelector('.pas_4');
const email = document.querySelector('.email');
const Whoops = document.querySelector('.Whoops');
const Contact = document.querySelector('.Contact');
const x_bars = document.querySelector('.x_bars');

// link 
const Simple_Bookmarking_clik = document.querySelector('.Simple_Bookmarking_clik');
const section_bookmark = document.querySelector('.section_bookmark');
const Speedy_Searching_clik = document.querySelector('.Speedy_Searching_clik');
const Organize_section = document.querySelector('.Organize_section');
const Easy_Sharing_clik = document.querySelector('.Easy_Sharing_clik');
const however_section = document.querySelector('.however_section');

// menu bosilganda 
menu.addEventListener("click", function() {
    bars.style.display = "block"; 
});
// menudan chiqish 
x_bars.addEventListener("click", function() {
    bars.style.display = "none"; 
});

// linklar clik bo'lganda 

// menu bosilganda - 1
Simple_Bookmarking_clik.addEventListener("click", function(e) {
    section_bookmark.style.display = "block"; 
    however_section.style.display = "none";
    Organize_section.style.display = "none"; 
    e.preventDefault()
});
// menudan chiqish - 2
Speedy_Searching_clik.addEventListener("click", function(e) {
    Organize_section.style.display = "block"; 
    section_bookmark.style.display = "none"; 
    however_section.style.display = "none";
    e.preventDefault()
});
// menudan chiqish - 3
Easy_Sharing_clik.addEventListener("click", function(e) {
    however_section.style.display = "block"; 
    Organize_section.style.display = " none"; 
    section_bookmark.style.display = "none";
    e.preventDefault()
});


// pas bosilganda 


// pas - 1 
pas_1.addEventListener("click", function(e) {
    h2_1.style.display = "block"; 
    h2_2.style.display = "none";
    h2_3.style.display = "none"; 
    h2_4.style.display = "none"; 
    e.preventDefault()
});
// pas - 2 
pas_2.addEventListener("click", function(e) {
    h2_2.style.display = "block"; 
    h2_1.style.display = "none";
    h2_3.style.display = "none"; 
    h2_4.style.display = "none"; 
    e.preventDefault()
});
// pas - 3
pas_3.addEventListener("click", function(e) {
    h2_3.style.display = "block"; 
    h2_2.style.display = "none";
    h2_1.style.display = "none"; 
    h2_4.style.display = "none"; 
    e.preventDefault()
});
// pas - 4 
pas_4.addEventListener("click", function(e) {
    h2_4.style.display = "block"; 
    h2_2.style.display = "none";
    h2_3.style.display = "none"; 
    h2_1.style.display = "none"; 
    e.preventDefault()
});




    // var result = document.getElementById("result");
    // let emailInput = document.getElementById("emailInput");
    // // let Contact = document.querySelector('.Contact');
    // // let email = emailInput.value;

    // Contact.addEventListener("click", function(e)  {
    //     e.preventDefault();
    //     // Emailni tekshirish
    //     if (email.endsWith('.gmail.com') && email.includes('@')) {
    //         result.textContent = "Hato yozdinggiz!";
    //     } else {
    //         result.textContent = "To'g'ri email!";
    //     }
    // });



// Frequently bosilganda 

