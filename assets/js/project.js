AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Zerodha-Clone",
    cardImage: "assets/images/project-page/zerodha.png",
    description: "The Zerodha Clone is a frontend project that replicates the user interface and experience of the popular Indian stockbroking platform, Zerodha. The project is built using React.js, with a focus on creating a clean, responsive, and intuitive design that mirrors Zerodha's platform.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://zerodha-clone-ht6j.onrender.com/",
    Githublink: "https://github.com/ritik7739/Zerodha-Clone",
  },
  {
    title: "WanderLust (Airbnb Clone)",
    cardImage: "assets/images/project-page/ss.png",
    description: "Wanderlust is a travel-focused web application inspired by the Airbnb website. It allows users to create and share listings of travel destinations, as well as review and rate these destinations. The app is built with Node.js, Express, MongoDB, and EJS, utilizing cloud storage for image uploads and implementing user authentication with Passport.js.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://wanderlust-cxo9.onrender.com/listings",
    Githublink: "https://github.com/ritik7739/Wanderlust",
  },
  {
    title: "Shop_it",
    cardImage: "assets/images/project-page/shop_it.png",
    description: "It is a Cart web Application where user can add product to cart and can also remove product from cart",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://shop-it-cart.vercel.app/",
    Githublink: "https://github.com/ritik7739/shop_it_cart",
  },
  {
    title: "Blockchain Explorer",
    cardImage: "assets/images/project-page/block_chain.jpg",
    description: "Displays transaction details and addresses for Ethereum. It uses the alchemyapi.io is used to fetch the data. It is a responsive website.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://block-chain-explorer.vercel.app/",
    Githublink: "https://github.com/ritik7739/BlockChain-Explorer",
  },
  {
    title: "User_Authentication",
    cardImage: "assets/images/project-page/user_authentication.png",
    description: "This project is a simple user authentication system built using Node.js, Express.js, MongoDB, and EJS templates. It allows users to sign up, sign in, view their dashboard, and log out.",
    Previewlink: "https://user-authentication-nf3u.onrender.com/",
    Githublink: "https://github.com/ritik7739/user-authentication",
  },
  
  {
    title: "Coffee_break_website",
    cardImage: "assets/images/project-page/coffee_break.jpg",
    description: "It is a responsive coffee break blog website",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://ritik7739.github.io/Coffe-Break-responsive-website-/",
    Githublink: "https://github.com/ritik7739/Coffe-Break-responsive-website-",
  },
  {
    title: "chhating-engine_codeial",
    cardImage: "assets/images/project-page/codeial.jpg",
    description: "Developed a scalable full-stack chat engine using WebSocket technology for real-time messaging.",
    tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
    Previewlink: "",
    Githublink: "https://github.com/ritik7739/chatting-engine_codeial",
  },
  {
    title: "Suduko_Solver_Master",
    cardImage: "assets/images/project-page/suduko.jpg",
    description: "Suduko solver using c++",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/ritik7739/Suduko_Solver_Master",
  },
  
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
