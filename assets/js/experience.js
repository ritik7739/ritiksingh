AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Martian Internship Program",
    cardImage: "assets/images/experience-page/Persistent_Systems.png",
    place: " Persistent",
    time: "(June, 2023 - August, 2023)",
    desp: "<li>Equipped with industry-aligned knowledge through an internship program.</li><li>focused on tools such as DSA, CN, Core Java, OS, and RDBMS</li>",
  },
  {
    title: "Technical Writer Intern",
    cardImage: "assets/images/experience-page/gfglogo.png",
    place: "Geeks For Geeks",
    time: "(May,2023- December, 2023)",
    desp: "<li>As a Technical Writer Intern, I have published content on the website, specifically focusing on Data Structures and Algorithms (DSA).</li><li>My published content demonstrates my proficiency in explaining complex DSA concepts clearly and concisely.</li><li>I have utilized my strong research and analytical skills to ensure the accuracy and comprehensiveness of the content.</li>",
  },
  {
    title: "Web Developer Intern",
    cardImage: "assets/images/experience-page/sparks_foudation.png",
    place: "Sparks Foundation",
    time: "(May, 2022 - July, 2023)",
    desp: "<li>Our project aims to build a payment gateway integration web and mobile application using Full Stack Development.</li><li>With a comprehensive technology stack encompassing front-end frameworks like React and Angular, back-end frameworks such as Node.js and Django, and databases like MySQL and MongoDB, we will create seamless user interfaces that provide a secure payment experience.</li><li>By integrating the chosen payment gateway's APIs and implementing robust data security measures, we will enable transactions using various payment methods and handle functionalities like capturing payments, processing refunds, and managing recurring payments. Thorough testing, documentation, and scalability considerations will ensure a reliable and scalable solution.</li>",
  },
  {
    title: "Campus Ambassader",
    cardImage: "assets/images/experience-page/coding_ninjas logo.png",
    place: "Coding Ninjas",
    time: "(Nov, 2022 - Mar, 2023)",
    desp: "<li>Leadership, communication, networking, marketing, teamwork, organization, initiative, public speaking, social media, and brand ambassadorship skills. </li><li>Organising Event, Coding contest, Seminar,Workshop.</li>",
  },
  {
    title: "CA Entreprenuer",
    cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
    place: "IIT BOMBAY",
    time: "(July, 2022 - May, 2023)",
    desp: "<li>Entrepreneurship, innovation, business development, strategic planning, market research, financial analysis, networking, start-up operations, problem-solving, leadership.</li>",
  },
  
  
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "GirlScript Summer Of Code 2024",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Contributor in GSSoC: Collaborate, code, learn, network, and enhance open-source skills.",
  },
  {
    title: "Social Summer Of Code",
    cardImage: "assets/images/experience-page/ssoc.png",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section
const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
