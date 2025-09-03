import React from 'react';
import Link from 'next/link';
import '@/styles/collegeguide.css'; // Imports the base guide styles

// This is the metadata object for SEO.
export const metadata = {
  title: 'Thank You for Taking Our Quiz! | MyHSCounselor.com',
  description: 'Thank you for taking the first step towards a confident future. Explore your options with our comprehensive guides on college, skilled trades, and more.',
  openGraph: {
    title: 'Thank You for Taking the Quiz',
    description: 'You\'ve completed the quiz and are on your way to a clearer future. Explore our personalized guides to find your next step, from college to trades and beyond.',
    url: 'https://myhscounselor.com/thankyou',
    siteName: 'MyHSCounselor.com',
    images: [
      {
        url: 'https://myhscounselor.com/og-image-quiz-thank-you.jpg', // Create a specific image for this page
        width: 1200,
        height: 630,
        alt: 'A welcoming image for quiz takers, showing a path forward.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://myhscounselor.com/thankyou',
  },
};

const QuizThankYou = () => {
  return (
    <div className="college-guide-container">
      <h2 className="title">Thank You for Taking Our Quiz!</h2>
      <p className="intro-text">
        That was a great first step! You've just invested a little bit of time into your future, and now you're ready to explore. Below are some of our most popular guides to help you start your journey.
      </p>

      <hr className="divider" />

      <h3 className="section-title">✨ Where Do You Want to Go Next?</h3>
      <p className="section-intro">
        Your quiz results are a fantastic starting point, but they are not the final word. We encourage you to explore all of these guides.
      </p>
      
      <div className="exploration-steps">
        <div className="exploration-item">
          <p className="exploration-step-title">
            <span className="step-number">1.</span>
            <strong>College & University Guide</strong>
          </p>
          <p className="exploration-step-text">
            Dive into the process of applying to and attending a 4-year university. Learn about applications, campus life, and what to expect.
          </p>
          <Link href="/collegeguide" className="cta-button">
            Start the Guide
          </Link>
        </div>

        <div className="exploration-item">
          <p className="exploration-step-title">
            <span className="step-number">2.</span>
            <strong>Skilled Trades & Trade School Guide</strong>
          </p>
          <p className="exploration-step-text">
            Discover a direct path to a high-demand career. Learn about trade schools, certifications, and hands-on training.
          </p>
          <Link href="/tradeschoolguide" className="cta-button">
            Start the Guide
          </Link>
        </div>

        <div className="exploration-item">
          <p className="exploration-step-title">
            <span className="step-number">3.</span>
            <strong>Military & Service Paths</strong>
          </p>
          <p className="exploration-step-text">
            Explore the different branches and how a career in the military can offer both professional development and financial benefits.
          </p>
          <Link href="/military" className="cta-button">
            Start the Guide
          </Link>
        </div>

        <div className="exploration-item">
          <p className="exploration-step-title">
            <span className="step-number">4.</span>
            <strong>Gap Year & Direct Entry Careers</strong>
          </p>
          <p className="exploration-step-text">
            Not sure about a structured program? Find out what it's like to take a year off or jump directly into the workforce.
          </p>
          <Link href="/gapyear" className="cta-button">
            Start the Guide
          </Link>
        </div>
      </div>

      <hr className="divider" />

      <h3 className="section-title">🚀 Ready for More?</h3>
      <p className="conclusion-text">
        Don't forget to check out our <Link href="/financialaid">financial aid guide</Link> and our <Link href="/careers">career explorer</Link> to help you make your final decision. You've got this!
      </p>
      <div className="final-cta">
        <p>You can come back to this page anytime you need to.</p>
        <Link href="/" className="cta-button">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default QuizThankYou;
