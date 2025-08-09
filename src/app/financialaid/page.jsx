import React from 'react';
import '../styles/global.css'; // Assuming you have a global CSS for consistent styling

const FinancialAid = () => (
  <div className="page-container">
    <h1 tabIndex="0">💰 Understanding Financial Aid & Funding Your Future</h1>
    <p>
      Thinking about college or trade school, but wondering how to pay for it? You're not alone! Figuring out financial aid can seem like a puzzle, but it's totally manageable. Let's break down the key ways to fund your education.
    </p>

    <section>
      <h2>What is FAFSA and Why It's Crucial</h2>
      <p>
        The **Free Application for Federal Student Aid (FAFSA)** is your gateway to most financial assistance from the government and many schools. It's not just for loans; it determines your eligibility for grants, scholarships, and work-study programs too.
      </p>
      <ul>
        <li>
          <strong>It's Essential (and Requires Parental Info):</strong> The FAFSA is free to fill out, and you should never pay a third party to complete it. You will need your parents' tax information to complete the form, so be prepared to collaborate with them and provide reminders as necessary.
        </li>
        <li>
          <strong>The Deadline is Key:</strong> While the federal deadline to submit the FAFSA is in late June of the academic year, the deadline to qualify for state and school aid, scholarships, and work-study is often much earlier—sometimes as early as **March 1st**. This early submission is crucial because many funds are allocated on a first-come, first-served basis, increasing your likelihood of securing available aid.
        </li>
        <li>
          <strong>Everyone Should Apply:</strong> Even if you think your family makes too much money, apply! Many schools use FAFSA data for their own aid, and sometimes you're eligible for more than you think.
        </li>
      </ul>
      <p className="emphasis">
        <strong>Wise Tip:</strong> Gather all necessary financial documents (tax returns, W-2s, bank statements) for both you and your parents (if applicable) before you start. It makes the process much smoother!
      </p>
      <p>
        <a href="https://studentaid.gov/h/apply-for-aid/fafsa" target="_blank" rel="noopener noreferrer">
          <strong>Start your FAFSA application here.</strong>
        </a>
      </p>
      <p>
        For many private colleges, you'll also need to complete the{" "}
        <a href="https://cssprofile.collegeboard.org/" target="_blank" rel="noopener noreferrer">
          <strong>CSS Profile,</strong>
        </a> which helps institutions determine eligibility for their own aid.
      </p>
    </section>

    <section>
      <h2>Navigating the Different Types of Aid</h2>
      <p>
        Not all money for school needs to be paid back. It's super important to understand the difference!
      </p>
      <ul>
        <li>
          <strong>Grants:</strong> This is free money, usually based on financial need. You don't have to pay it back! Examples include the Pell Grant.
        </li>
        <li>
          <strong>Scholarships:</strong> Also free money, but typically awarded based on merit (academics, talents), specific criteria (e.g., leadership, ethnicity), or community involvement. You apply for these directly from various organizations, not just your school.
        </li>
        <li>
          <strong>Work-Study:</strong> If you qualify for work-study, this is a significant benefit. You'll be eligible for flexible on-campus jobs and can earn money to help with expenses like transportation and groceries.
          <p className="advice-box">
            **Practical Insight:** Work-study jobs are particularly valuable due to their flexibility with your academic schedule and the elimination of commute time. They also build your resume and facilitate networking. Ideally, seek work with a company or department where you could envision your first full-time role; having prior experience and established relationships significantly improves your chances of being offered a position after graduation.
          </p>
        </li>
        <li>
          <strong>Federal Student Loans:</strong> Money you borrow from the government that you *do* have to pay back, usually with interest, after you finish school.
          <ul>
            <li>
              **Subsidized vs. Unsubsidized:** Whenever possible, opt for **subsidized loans** over unsubsidized ones. Subsidized loans are based on financial need, and the government pays the interest while you're in school and during grace periods, which means less interest will have accrued by the time you graduate. With unsubsidized loans, interest starts accruing the moment the loan is disbursed. You'll likely have a mix of both, which is generally manageable.
            </li>
            <li>
              **Parent PLUS Loans:** These are federal loans taken out by your parents, and they are the sole responsibility of the parent, not the student. It's critical to have an open and thorough conversation with your family about the responsibilities of this loan before considering it. Always prioritize grants, scholarships, and federal student loans in your own name first.
            </li>
            <li>
              **Repayment:** For most federal loans, you have a six-month grace period after you graduate or drop below half-time enrollment before you must begin making payments. You've prepared for this; you can handle it.
            </li>
          </ul>
        </li>
      </ul>
    </section>

    <section>
      <h2>Smart Strategies for Scholarship Searching</h2>
      <p>
        Scholarships are out there for almost everything! It just takes a bit of focused effort.
      </p>
      <ul>
        <li>
          <strong>Start Local:</strong> Check with your high school counselor, local community foundations, churches, and civic organizations. Local scholarships often have less competition.
        </li>
        <li>
          <strong>Online Databases:</strong> Websites like{" "}
          <a href="https://www.fastweb.com/" target="_blank" rel="noopener noreferrer">Fastweb</a>,{" "}
          <a href="https://bigfuture.collegeboard.org/scholarship-search" target="_blank" rel="noopener noreferrer">College Board's BigFuture</a>,{" "}
          <a href="https://www.niche.com/colleges/scholarships/" target="_blank" rel="noopener noreferrer">Niche</a>, and{" "}
          <a href="https://www.scholarships.com/" target="_blank" rel="noopener noreferrer">Scholarships.com</a> are great starting points, but be prepared to filter.
        </li>
        <li>
          <strong>Your College/Trade School's Website:</strong> Many institutions have their own scholarships for admitted students.
        </li>
        <li>
          <strong>Match Your Passions & Background:</strong> Look for scholarships related to your intended major, hobbies, volunteer work, ethnicity, or unique talents.
        </li>
        <li>
          <strong>Essay Tips:</strong> Reuse and adapt essays for multiple applications. Proofread carefully!
        </li>
      </ul>
      <p>
        Finding money for your education is an investment in your future. Take it step-by-step, and don't hesitate to ask your high school counselor or college financial aid office for help!
      </p>
    </section>
  </div>
);

export default FinancialAid;
