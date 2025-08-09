// NotSure.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../../styles/collegeguide.css'; // ADDED: Imports the base guide styles
import '../../../styles/notsure.css';      // ADDED: Imports the specific layout styles

const NotSure = () => {
  return (
    <div className="college-guide-container"> {/* CHANGED: Uses the base guide container class */}
      <h2 className="title">Not Sure What's Next? That's Totally Okay!</h2>
      <p className="intro-text">
        Feeling unsure after high school is completely normal. Most people don't have it all figured out, and that's a good thing! This page is here to help you slow down, explore your options, and find some calm without all the pressure. You're not behind—you're just taking a moment to get things right for you.
      </p>

      <hr className="divider" />

      <h3 className="section-title">🧠 First, Take a Deep Breath</h3>
      <p className="section-intro">
        When you're feeling overwhelmed, the best thing you can do is pause. Here are some quick, simple ways to find your calm.
      </p>

      <div className="action-list">
        <div className="action-item">
          <p className="action-step">
            <span className="step-number">1.</span>
            <strong>Acknowledge Your Feelings:</strong> It's okay to feel stressed or confused. Just saying, "I'm feeling overwhelmed right now," can make the feeling less powerful.
          </p>
        </div>
        <div className="action-item">
          <p className="action-step">
            <span className="step-number">2.</span>
            <strong>Move Your Body:</strong> Step away from the screen and do something physical. Go for a walk, stretch, or dance to your favorite song. It's a huge stress reliever.
          </p>
        </div>
        <div className="action-item">
          <p className="action-step">
            <span className="step-number">3.</span>
            <strong>Try Mindful Breathing:</strong> Inhale slowly through your nose, hold for a few seconds, then exhale slowly through your mouth. Repeat this 5-10 times to calm your nervous system.
          </p>
        </div>
      </div>
      <div className="cta-container">
        <h4 className="cta-title">Ready to explore?</h4>
        <p className="cta-text">When you feel a bit calmer, try one of the steps below. The goal isn't to decide everything today, but just to take a small, pressure-free step forward.</p>
      </div>

      <hr className="divider" />

      <h3 className="section-title">🔍 Next, Let's Explore!</h3>
      <p className="section-intro">
        Now that you're feeling a bit calmer, let's explore your options. These steps are small and easy—no pressure to commit to anything!
      </p>

      <div className="exploration-steps">
        <div className="exploration-item">
          <p className="exploration-step-title">
            <span className="step-number">1.</span>
            <strong>Browse Our Career Explorer Toolkit</strong>
          </p>
          <p className="exploration-step-text">
            Think of this as window shopping for your future. Click on a few careers that sound even mildly interesting. You don't have to choose anything right now—just see what's out there.
          </p>
          <NavLink to="/explore-careers" className="cta-button">
            Start Exploring Careers
          </NavLink>
        </div>

        <div className="exploration-item">
          <p className="exploration-step-title">
            <span className="step-number">2.</span>
            <strong>Compare the Main Pathways</strong>
          </p>
          <p className="exploration-step-text">
            Don't worry about applications. Just get a general sense of the different paths this website covers.
          </p>
          <div className="pathway-links">
            <div className="pathway-item">
              <NavLink to="/college-guide" className="pathway-link">
                <strong>College:</strong> What's a typical 4-year degree timeline?
              </NavLink>
            </div>
            <div className="pathway-item">
              <NavLink to="/trade" className="pathway-link">
                <strong>Skilled Trades:</strong> How long are trade programs?
              </NavLink>
            </div>
            <div className="pathway-item">
              <NavLink to="/direct-entry-careers" className="pathway-link">
                <strong>Direct Entry:</strong> What jobs can you get right after high school?
              </NavLink>
            </div>
            <div className="pathway-item">
              <NavLink to="/military" className="pathway-link">
                <strong>Military:</strong> What are the basic options and timeframes?
              </NavLink>
            </div>
            <div className="pathway-item">
              <NavLink to="/gap-year" className="pathway-link">
                <strong>Gap Year:</strong> What's it like to take a year off?
              </NavLink>
            </div>
          </div>
        </div>

        <div className="exploration-item">
          <p className="exploration-step-title">
            <span className="step-number">3.</span>
            <strong>See How to Fund Your Future</strong>
          </p>
          <p className="exploration-step-text">
            Money can be a big source of stress, but there are tons of options to help you pay for your next step, no matter what it is. Learn about scholarships, grants, and other financial aid resources.
          </p>
          <NavLink to="/financial-aid" className="cta-button">
            Learn About Funding
          </NavLink>
        </div>
      </div>

      <hr className="divider" />

      <h3 className="section-title">✨ Remember: You're in Control</h3>
      <p className="conclusion-text">
        You're not behind; you're just taking a different path—one that prioritizes thoughtfulness over rushing. Every step you take, even just pausing to breathe, is progress. You have time, support, and a world of choices. Keep exploring, keep learning about yourself, and come back to these resources whenever you need them.
      </p>
      <div className="final-cta">
        <p>Ready to get started?</p>
        <NavLink to="/quiz" className="cta-button">
          Take the Quiz
        </NavLink>
      </div>
    </div>
  );
};

export default NotSure;
