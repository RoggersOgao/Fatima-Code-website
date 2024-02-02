import React from 'react'
import Image from "next/image"
import Script from 'next/script'
import Card from '../Card'
import styles from "./HomeC.module.scss"
import {FaPhone} from "react-icons/fa"

function HomeC() {
  const date = new Date().getFullYear()
  return (
    <div id="top">

  {/* <!-- 
    - #HEADER
  --> */}

  <header className="header" data-header>
    <div className="container">

      <a href="#" className="logo">
        <Image src="/images/logo.png" width="162" height="40" alt="EduWeb logo" />
      </a>

      <nav className="navbar" data-navbar>

        <div className="wrapper">
          <a href="#" className="logo">
            <Image src="/images/logo.png" width="162" height="40" alt="EduWeb logo" />
          </a>

          <button className="nav-close-btn" aria-label="close menu" data-nav-toggler>
            <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
          </button>
        </div>

        <ul className="navbar-list">

          <li className="navbar-item">
            <a href="#home" className="navbar-link" data-nav-link>Home</a>
          </li>



          <li className="navbar-item">
            <a href="#about" className="navbar-link" data-nav-link>About</a>
          </li>

          <li className="navbar-item">
            <a href="#courses" className="navbar-link" data-nav-link>Courses</a>
          </li>

          <li className="navbar-item">
            <a href="#blog" className="navbar-link" data-nav-link>Blog</a>
          </li>

          <li className="navbar-item">
            <a href="#" className="navbar-link" data-nav-link>Contact</a>
          </li>

        </ul>

      </nav>

      <div className="header-actions">

        <button className="header-action-btn" aria-label="toggle search" title="Search">
          <ion-icon name="search-outline" aria-hidden="true"></ion-icon>
        </button>

        <button className="header-action-btn" aria-label="cart" title="Cart">
          <ion-icon name="cart-outline" aria-hidden="true"></ion-icon>

          <span className="btn-badge">0</span>
        </button>

        <a href="#" className="btn has-before">
          <span className="span">Try for free</span>

          <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
        </a>

        <button className="header-action-btn" aria-label="open menu" data-nav-toggler>
          <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
        </button>

      </div>

      <div className="overlay" data-nav-toggler data-overlay></div>

    </div>
  </header>





  <main>
    <article>

      {/* <!-- 
        - #HERO
      --> */}

      <section className="section hero has-bg-image" id="home" aria-label="home"
        style={{backgroundImage: "url('/images/hero-bg.svg')"}}>
        <div className="container">

          <div className="hero-content">

            <h1 className="h1 section-title">
              The Best Program to <span className="span">Enroll</span> for Exchange
            </h1>

            <p className="hero-text" style={{paddingLeft:0}}>
            Welcome to Fatima Code Academy, where we believe in empowering Young girls to
break barriers and excel in the exciting world of technology
            </p>

            <a href="#" className="btn has-before">
              <span className="span">Find courses</span>

              <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
            </a>

          </div>

          <figure className="hero-banner">

            <div className="img-holder one" style={{width: "auto", height: 300}}>
              <Image src="/images/hero-banner-1.jpg" width="2700" height="3000" alt="hero banner" className="img-cover" />
            </div>

            <div className="img-holder two" style={{width: "auto", height: 370}}>
              <Image src="/images/hero-banner-2.jpg" width="2400" height="3700" alt="hero banner" className="img-cover" />
            </div>

            {/* Number container */}
            {/* <Image src="/images/hero-shape-1.svg" width="380" height="190" alt="" className="shape hero-shape-1" /> */}
            <div className={styles.numberCont}>
                  <div className={styles.numberContLeft}>
                  <FaPhone  className={styles.icon}/>
                  </div>
                  <div className={styles.numberContRight}>
                    <h4>ONLINE SUPPORT</h4>
                    <h1>+230 (542) 98741</h1>
                  </div>
            </div>

            <Image src="/images/hero-shape-2.png" width="622" height="551" alt="" className="shape hero-shape-2" />

          </figure>

        </div>
      </section>




{/* 
      <!-- 
        - #CATEGORY
      --> */}

      <section className="section category" aria-label="category">
        <div className="container">

          <p className="section-subtitle">Categories</p>

          <h2 className="h2 section-title">
            Online <span className="span">Classes</span> For Remote Learning.
          </h2>

          <p className="section-text">
            Consectetur adipiscing elit sed do eiusmod tempor.
          </p>

          <ul className="grid-list">

            <li>
              <div className="category-card" style={{background: "hsla(170, 75%, 41%, .1)"}}>

                <div className="card-icon">
                  <Image src="/images/category-1.svg" width="40" height="40" loading="lazy"
                    alt="Online Degree Programs" className="img" />
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title">Online Degree Programs</a>
                </h3>

                <p className="card-text">
                  Lorem ipsum dolor consec tur elit adicing sed umod tempor.
                </p>

                <span className="card-badge">7 Courses</span>

              </div>
            </li>

            <li>
              <div className="category-card" style={{background: "hsla(351, 83%, 61%, .1)"}}>

                <div className="card-icon">
                  <Image src="/images/category-2.svg" width="40" height="40" loading="lazy"
                    alt="Non-Degree Programs" className="img" />
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title">Non-Degree Programs</a>
                </h3>

                <p className="card-text">
                  Lorem ipsum dolor consec tur elit adicing sed umod tempor.
                </p>

                <span className="card-badge">4 Courses</span>

              </div>
            </li>

            <li>
              <div className="category-card" style={{background: "hsla(229, 75%, 58%, .1)"}}>

                <div className="card-icon">
                  <Image src="/images/category-3.svg" width="40" height="40" loading="lazy"
                    alt="Off-Campus Programs" className="img" />
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title">Off-Campus Programs</a>
                </h3>

                <p className="card-text">
                  Lorem ipsum dolor consec tur elit adicing sed umod tempor.
                </p>

                <span className="card-badge">8 Courses</span>

              </div>
            </li>

            <li>
              <div className="category-card" style={{background: "hsla(42, 94%, 55%, .1)"}}>

                <div className="card-icon">
                  <Image src="/images/category-4.svg" width="40" height="40" loading="lazy"
                    alt="Hybrid Distance Programs" className="img" />
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title">Hybrid Distance Programs</a>
                </h3>

                <p className="card-text">
                  Lorem ipsum dolor consec tur elit adicing sed umod tempor.
                </p>

                <span className="card-badge">8 Courses</span>

              </div>
            </li>

          </ul>

        </div>
      </section>




{/* 
      <!-- 
        - #ABOUT
      --> */}

      <section className="section about" id="about" aria-label="about">
        <div className="container">

          <figure className="about-banner">

            <div className="img-holder" style={{width: 520, height: 370}}>
              <Image src="/images/about-banner.jpg" width="520" height="370" loading="lazy" alt="about banner"
                className="img-cover" />
            </div>

            <Image src="/images/about-shape-1.svg" width="360" height="420" loading="lazy" alt=""
              className="shape about-shape-1" />

            <Image src="/images/about-shape-2.svg" width="371" height="220" loading="lazy" alt=""
              className="shape about-shape-2" />

            <Image src="/images/about-shape-3.png" width="722" height="528" loading="lazy" alt=""
              className="shape about-shape-3" />

          </figure>

          <div className="about-content">

            <p className="section-subtitle">About Us</p>

            <h2 className="h2 section-title">
              <span className="span">Distant learning</span> for Skill Development
            </h2>

            <p className="section-text">
            Fatima Code Academy is a pioneering educational program dedicated to empowering girls aged
14-17, particularly those facing socio-economic challenges. Our mission is to break through barriers
early in their academic journey and provide a transformative pathway to success in the dynamic field
of technology. This initiative aspires to provide dignified employment opportunities and aims to do
this at the post high school level. <br/>
At the heart of our approach at Fatima Code Academy, we are harnessing teaching resources from
current tech students in universities and recent graduates. This unique give-back ecosystem not only
allows these teenage girls to develop crucial skills but also fosters a community where knowledge is
shared for the common good.
            </p>

            <ul className="about-list">

              <li className="about-item">
                <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>

                <span className="span">Expert Trainers</span>
              </li>

              <li className="about-item">
                <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>

                <span className="span">Online Remote Learning</span>
              </li>

              <li className="about-item">
                <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>

                <span className="span">Lifetime Access</span>
              </li>

            </ul>

            <Image src="/images/about-shape-4.svg" width="100" height="100" loading="lazy" alt=""
              className="shape about-shape-4" />

          </div>

        </div>
      </section>




{/* 
      <!-- 
        - #COURSE
      --> */}

      <section className="section course" id="courses" aria-label="course">
        <div className="container">

          <p className="section-subtitle">Popular Courses</p>

          <h2 className="h2 section-title">Pick A Course To Get Started</h2>

          <ul className="grid-list">

           
            <Card />

          </ul>

          <a href="#" className="btn has-before">
            <span className="span">Browse more courses</span>

            <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
          </a>

        </div>
      </section>





      {/* <!-- 
        - #VIDEO
      --> */}

      <section className="video has-bg-image" aria-label="video"
        style={{backgroundImage: "url('/images/video-bg.png')"}}>
        <div className="container">

          <div className="video-card">

            <div className="video-banner img-holder has-after" style={{width: "", height: ""}}>
              <Image src="/images/video-banner.jpg" width="970" height="550" loading="lazy" alt="video banner"
                className="img-cover" />

              <button className="play-btn" aria-label="play video">
                <ion-icon name="play" aria-hidden="true"></ion-icon>
              </button>
            </div>

            <Image src="/images/video-shape-1.png" width="1089" height="605" loading="lazy" alt=""
              className="shape video-shape-1" />

            <Image src="/images/video-shape-2.png" width="158" height="174" loading="lazy" alt=""
              className="shape video-shape-2" />

          </div>

        </div>
      </section>





      {/* <!-- 
        - #STATE
      --> */}

      <section className="section stats" aria-label="stats">
        <div className="container">

          <ul className="grid-list">

            <li>
              <div className="stats-card" style={{background: "hsla(170, 75%, 41%, .1)"}}>
                <h3 className="card-title">29.3k</h3>

                <p className="card-text">Student Enrolled</p>
              </div>
            </li>

            <li>
              <div className="stats-card" style={{background: "hsla(351, 83%, 61%, .1)"}}>
                <h3 className="card-title">32.4K</h3>

                <p className="card-text">Class Completed</p>
              </div>
            </li>

            <li>
              <div className="stats-card" style={{background: "hsla(260, 100%, 67%, .1)"}}>
                <h3 className="card-title">100%</h3>

                <p className="card-text">Satisfaction Rate</p>
              </div>
            </li>

            <li>
              <div className="stats-card" style={{background: "hsla(42, 94%, 55%, .1)"}}>
                <h3 className="card-title">354+</h3>

                <p className="card-text">Top Instructors</p>
              </div>
            </li>

          </ul>

        </div>
      </section>





      {/* <!-- 
        - #BLOG
      --> */}

      <section className="section blog has-bg-image" id="blog" aria-label="blog"
        style={{backgroundImage: "url('/images/blog-bg.svg')"}}>
        <div className="container">

          <p className="section-subtitle">Latest Articles</p>

          <h2 className="h2 section-title">Updates and Newsletters from Fatima Code Academy</h2>

          <ul className="grid-list">

            <li>
              <div className="blog-card">

                <figure className="card-banner img-holder has-after" style={{width: "100%", height: 370}}>
                  <Image src="/images/blog-1.jpg" width="370" height="370" loading="lazy"
                    alt="Become A Better Blogger: Content Planning" className="img-cover" />
                </figure>

                <div className="card-content">

                  <a href="#" className="card-btn" aria-label="read more">
                    <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                  </a>

                  <a href="#" className="card-subtitle">Online</a>

                  <h3 className="h3">
                    <a href="#" className="card-title">Become A Better Blogger: Content Planning</a>
                  </h3>

                  <ul className="card-meta-list">

                    <li className="card-meta-item">
                      <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>

                      <span className="span">Oct 10, 2021</span>
                    </li>

                    <li className="card-meta-item">
                      <ion-icon name="chatbubbles-outline" aria-hidden="true"></ion-icon>

                      <span className="span">Com 09</span>
                    </li>

                  </ul>

                  <p className="card-text">
                    Lorem Ipsum Dolor Sit Amet Cons Tetur Adipisicing Sed.
                  </p>

                </div>

              </div>
            </li>

            <li>
              <div className="blog-card">

                <figure className="card-banner img-holder has-after" style={{width: "100%", height: 370}}>
                  <Image src="/images/blog-2.jpg" width="370" height="370" loading="lazy"
                    alt="Become A Better Blogger: Content Planning" className="img-cover" />
                </figure>

                <div className="card-content">

                  <a href="#" className="card-btn" aria-label="read more">
                    <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                  </a>

                  <a href="#" className="card-subtitle">Online</a>

                  <h3 className="h3">
                    <a href="#" className="card-title">Become A Better Blogger: Content Planning</a>
                  </h3>

                  <ul className="card-meta-list">

                    <li className="card-meta-item">
                      <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>

                      <span className="span">Oct 10, 2021</span>
                    </li>

                    <li className="card-meta-item">
                      <ion-icon name="chatbubbles-outline" aria-hidden="true"></ion-icon>

                      <span className="span">Com 09</span>
                    </li>

                  </ul>

                  <p className="card-text">
                    Lorem Ipsum Dolor Sit Amet Cons Tetur Adipisicing Sed.
                  </p>

                </div>

              </div>
            </li>

            <li>
              <div className="blog-card">

                <figure className="card-banner img-holder has-after" style={{width: "100%", height: 370}}>
                  <Image src="/images/blog-3.jpg" width="370" height="370" loading="lazy"
                    alt="Become A Better Blogger: Content Planning" className="img-cover" />
                </figure>

                <div className="card-content">

                  <a href="#" className="card-btn" aria-label="read more">
                    <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                  </a>

                  <a href="#" className="card-subtitle">Online</a>

                  <h3 className="h3">
                    <a href="#" className="card-title">Become A Better Blogger: Content Planning</a>
                  </h3>

                  <ul className="card-meta-list">

                    <li className="card-meta-item">
                      <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>

                      <span className="span">Oct 10, 2021</span>
                    </li>

                    <li className="card-meta-item">
                      <ion-icon name="chatbubbles-outline" aria-hidden="true"></ion-icon>

                      <span className="span">Com 09</span>
                    </li>

                  </ul>

                  <p className="card-text">
                    Lorem Ipsum Dolor Sit Amet Cons Tetur Adipisicing Sed.
                  </p>

                </div>

              </div>
            </li>

          </ul>

          <Image src="/images/blog-shape.png" width="186" height="186" loading="lazy" alt=""
            className="shape blog-shape" />

        </div>
      </section>

    </article>
  </main>



{/* 

  <!-- 
    - #FOOTER
  --> */}

  <footer className="footer" style={{backgroundImage: "url('/images/footer-bg.png')"}}>

    <div className="footer-top section">
      <div className="container grid-list">

        <div className="footer-brand">

          <a href="#" className="logo">
            <Image src="/images/logo.png" width="162" height="50" alt="EduWeb logo" />
          </a>

          <p className="footer-brand-text">
            Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor incidid unt labore dolore.
          </p>

          <div className="wrapper">
            <span className="span">Add:</span>

            <address className="address">: Beau Plan Business Park, Beau Plan, Mauritius</address>
          </div>

          <div className="wrapper">
            <span className="span">Call:</span>
            <a href="tel:+230 54298741" className="footer-link">+230 (542) 98741</a>
          </div>

          <div className="wrapper">
            <span className="span">Email:</span>

            <a href="mailto:info@fatima-codeacademy" className="footer-link">info@fatima-codeacademy</a>
          </div>

        </div>

        <ul className="footer-list">

          <li>
            <p className="footer-list-title">Online Platform</p>
          </li>

          <li>
            <a href="#" className="footer-link">About</a>
          </li>

          <li>
            <a href="#" className="footer-link">Courses</a>
          </li>

          <li>
            <a href="#" className="footer-link">Instructor</a>
          </li>

          <li>
            <a href="#" className="footer-link">Events</a>
          </li>

          <li>
            <a href="#" className="footer-link">Instructor Profile</a>
          </li>

          <li>
            <a href="#" className="footer-link">Purchase Guide</a>
          </li>

        </ul>

        <ul className="footer-list">

          <li>
            <p className="footer-list-title">Links</p>
          </li>

          <li>
            <a href="#" className="footer-link">Contact Us</a>
          </li>

          <li>
            <a href="#" className="footer-link">Gallery</a>
          </li>

          <li>
            <a href="#" className="footer-link">News & Articles</a>
          </li>

          <li>
            <a href="#" className="footer-link">FAQ&apos;s</a>
          </li>

          <li>
            <a href="#" className="footer-link">Sign In/Registration</a>
          </li>

          <li>
            <a href="#" className="footer-link">Coming Soon</a>
          </li>

        </ul>

        <div className="footer-list">

          <p className="footer-list-title">Contacts</p>

          <p className="footer-list-text">
            Enter your email address to register to our newsletter subscription
          </p>

          <form action="" className="newsletter-form">
            <input type="email" name="email_address" placeholder="Your email" required className="input-field" /> 

            <button type="submit" className="btn has-before">
              <span className="span">Subscribe</span>

              <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
            </button>
          </form>

          <ul className="social-list">

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/company/101487594/admin/feed/posts/" className="social-link" >
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-youtube"></ion-icon>
              </a>
            </li>

          </ul>

        </div>

      </div>
    </div>

    <div className="footer-bottom">
      <div className="container">
<hr  />
        <p className="copyright" style={{marginTop:"2rem"}}>
          Copyright &copy;{date} All Rights Reserved by <a href="#" className="copyright-link">FatimaCode</a>
        </p>

      </div>
    </div>

  </footer>





  {/* <!-- 
    - #BACK TO TOP
  --> */}

  <a href="#top" className="back-top-btn" aria-label="back top top" data-back-top-btn>
    <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
  </a>





  {/* <!-- 
    - custom js link
  --> */}
  <script src="/js/script.js" defer></script>


  <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
  <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>

</div>
  )
}

export default HomeC