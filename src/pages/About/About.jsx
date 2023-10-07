import React from 'react' ;
import "./About.css";
import aboutImg from "../../Images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>Welcome to BookHub, your digital sanctuary for literature and learning. At BookHub, we believe in the transformative power of books and knowledge. Whether you're an avid reader, a student seeking resources, or simply curious about the world, our web library is designed to be your trusted companion on your intellectual journey.</p>
            <p className='fs-17'>BookHub is not just a library; it's your doorway to a universe of stories, ideas, and insights. Our carefully curated collection spans diverse genres, from timeless classics to contemporary bestsellers. With easy access to a vast repository of books, articles, and educational materials, you can explore, engage, and evolve at your own pace. Join us in celebrating the written word and the boundless possibilities it offers. Embrace the joy of reading, discover new horizons, and let BookHub be your guide on a lifelong adventure of learning and imagination. Welcome to BookHub, where books come to life, and knowledge knows no limits.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About ;
