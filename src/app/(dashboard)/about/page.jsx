import React from 'react';
import '@/styles/about.css'; // Make sure this path is correct

// Metadata for the About page
export const metadata = {
  title: 'My Story: A Personal Journey to Help High School Students Find Their Path | My HS Counselor',
  description: "Learn the story behind My HS Counselor. Founder Daniel Martinez shares his personal journey from career uncertainty to creating a proven framework that helps students confidently find a path that's right for them.",
  // You can also add more Open Graph tags here for social media sharing
  openGraph: {
    title: 'A Personal Journey, a Proven Solution | My HS Counselor',
    description: 'Founder Daniel Martinez shares his story and the mission behind My HS Counselor.',
    url: 'https://www.myhscounselor.com/about',
    // ... add an OG image specific to this page if you have one
  },
};

const About = () => {
  return (
    <section className="about-page">
      <div className="about-intro-section">
        <h1>My Story: From Feeling Lost to Finding My Path</h1>
        <p>
          I didn't know what I was truly good at or what I was meant to do. Like many students, I picked a college major that seemed safe—one that any company could use. But after I graduated and started my first job, I realized it wasn't for me. I felt like my career path was missing something, and I was just going through the motions.
        </p>
        <p>
          Everything changed when my son was born. I realized that to be a better parent and have a more fulfilling career, I needed to understand myself first. I took a personality test, dug into my strengths, and finally began piecing together what truly motivated me. That's when I had my "aha!" moment: I needed an MBA because I loved business. I kept thinking, "I wish I had known this stuff beforehand!"
        </p>
        <p>
          When my younger brothers began asking me for advice, I didn't want them to feel as lost as I once did. In 2014, I drafted a detailed email for them—a step-by-step framework to help them find a path that was the right fit. That email became the blueprint for MyHSCounselor.com.
        </p>
        <p>
          My mission is to help every student find the same clarity and self-awareness I found. You deserve to know yourself, understand your options, and make a plan that feels right for you.
        </p>
      </div>

      <div className="what-makes-us-different">
        <h2>What Makes My Website Different</h2>
        <p>
          I believe every student deserves a personalized roadmap for their future. My approach is built on three core pillars:
        </p>
        <ul>
          <li><strong>Personalized Clarity:</strong> My unique quiz goes beyond simple personality types. It helps you uncover directions that are genuinely aligned with your strengths and interests.</li>
          <li><strong>Actionable Roadmaps:</strong> I don't just give you a list of careers. My step-by-step guides are built directly from my personal framework, providing you with a proven and reliable path forward, whether you're thinking about college, a trade, the military, or something in-between.</li>
          <li><strong>All Paths Honored:</strong> There is no single "right" path. Whether you choose a four-year degree, a trade certification, a military career, or direct entry into the workforce, I provide honest guidance to help you build a future that truly excites you.</li>
        </ul>
      </div>

      <p className="about-closing-statement">
        MyHSCounselor.com is more than a website—it's the culmination of a personal journey and a proven framework designed to remove the guesswork and help you find a plan that's right for you.
      </p>

      <p className="founder-signature">
        — Daniel Martinez, Founder
      </p>
    </section>
  );
};

export default About;
