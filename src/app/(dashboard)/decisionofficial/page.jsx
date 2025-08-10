// src/pages/DecisionOfficialGuide.js
import React from 'react';
// Changed to import the dedicated guide stylesheet for consistent styling.
import '../../../styles/collegeguide.css';

const DecisionOfficialGuide = () => (
  <div className="college-guide-container">
    {/* Removed tabIndex="0" from the h1 as it's not needed for a heading */}
    <h1>✅ Making Your Decision Official: Your Next Steps After Graduation</h1>
    <p>
      Congratulations! You’ve explored your options, received offers, and are now ready to commit to your next big step after high school. This stage is exciting, but it also comes with important deadlines and details. Let’s make sure you nail the next steps, no matter which path you’ve chosen.
    </p>

    <section>
      <h2>Understanding & Comparing Your Offers</h2>
      <p>
        If you’ve applied to multiple places, you might have different offers on the table. It's time to compare your options to find the best fit.
      </p>
      <ul>
        <li>
          <strong>Review the Offer Details:</strong> Whether it's a college award letter, a trade school contract, or a job offer, read every detail carefully. For colleges, this includes the financial aid package and "net price" (cost minus grants/scholarships).
        </li>
        <li>
          <strong>Consider the Total Cost:</strong> For educational paths, factor in tuition, housing, fees, and living expenses. For jobs, look at the salary, benefits, and potential relocation costs.
        </li>
        <li>
          <strong>Think Beyond Money:</strong> Which program or opportunity truly excites you? Where do you feel you'll thrive? What are the long-term career outcomes?
        </li>
        <li>
          <strong>Don't Be Afraid to Ask Questions:</strong> If something in an offer is unclear, contact the admissions office, financial aid department, or HR representative directly.
        </li>
      </ul>
      <p className="emphasis">
        <strong>Wise Tip:</strong> Create a simple spreadsheet to list out the key details of each offer—costs, aid, benefits, and pros/cons. It helps visualize the differences!
      </p>
    </section>

    <section>
      <h2>Confirming Your Commitment: Deposits & Deadlines</h2>
      <p>
        Once you’ve made your final decision, it's time to officially accept your spot. Pay close attention to the deadlines!
      </p>
      <ul>
        <li>
          <strong>Acceptance Deposit/Paperwork:</strong> Most colleges and trade schools require a non-refundable deposit to secure your spot. Military branches and jobs will have specific contracts or onboarding documents to sign.
        </li>
        <li>
          <strong>Key Dates:</strong> Note the specific deadlines to accept your offer. For colleges, this is often a "Candidate Reply Date" (typically May 1st), but you should always check your specific acceptance letter. For other paths, this will be your contract signing date or a specific onboarding deadline.
        </li>
        <li>
          <strong>Notify Other Places:</strong> It's good etiquette to let other institutions or employers know you won't be accepting their offer. A simple email is usually sufficient and helps them offer the spot to someone else.
        </li>
      </ul>
    </section>

    <section>
      <h2>What Comes Next? Preparing for the Transition</h2>
      <p>
        You've made it official—now what? Each path has its own set of immediate next steps.
      </p>
      <ul>
        <li>
          <strong>For College:</strong>
          <ul>
            <li><strong>Housing:</strong> Apply for on-campus housing or start looking for off-campus options.</li>
            <li><strong>Orientation:</strong> Sign up for new student orientation, which is crucial for course registration and getting to know campus.</li>
            <li><strong>Final Transcripts:</strong> Ensure your high school sends your final transcript to your chosen institution.</li>
          </ul>
        </li>
        <li>
          <strong>For Trade School:</strong>
          <ul>
            <li><strong>Orientation:</strong> Attend any required orientation or welcome sessions.</li>
            <li><strong>Tool Kits/Supplies:</strong> Find out if specific tools or materials are required for your program and how to acquire them.</li>
            <li><strong>Schedule:</strong> Get your class schedule and understand the daily routine.</li>
          </ul>
        </li>
        <li>
          <strong>For Military Service:</strong>
          <ul>
            <li><strong>MEPS & Enlistment:</strong> Complete the Military Entrance Processing Station (MEPS) process and formally enlist.</li>
            <li><strong>Basic Training Dates:</strong> You'll get your ship date for basic training.</li>
            <li><strong>Preparations:</strong> Your recruiter will guide you on what to do before basic training, like physical fitness and paperwork.</li>
          </ul>
        </li>
        <li>
          <strong>For Direct Entry Job:</strong>
          <ul>
            <li><strong>Onboarding Paperwork:</strong> Complete HR documents (W-4, I-9, direct deposit).</li>
            <li><strong>Training:</strong> Understand any initial training or probationary periods.</li>
            <li><strong>Start Date:</strong> Confirm your official first day and what to expect.</li>
          </ul>
        </li>
      </ul>
      <p>
        Taking these next steps calmly and deliberately will set you up for a smooth and successful transition into your chosen future. You've got this!
      </p>
    </section>
  </div>
);

export default DecisionOfficialGuide;
