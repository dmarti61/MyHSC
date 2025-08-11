'use client';

import Link from 'next/link';
import '@/styles/collegeguide.css'; // <-- Import the guide-specific CSS

const Careers = () => {
  return (
    <div className="college-guide-container">
      <h2>Your Future Starts Now: High School Grads, No College Degree Needed!</h2>
      <p className="intro">
        Congratulations, high school graduates! You've reached a major milestone, and now, an exciting world of career possibilities awaits you – even without a four-year college degree. Many rewarding paths offer direct entry, on-the-job training, and excellent growth potential. All it takes is a clear plan, a willingness to learn, and the determination to build a successful future.
      </p>
      <p className="intro">
        This page is your guide to exploring diverse fields where your diploma is your ticket to getting started. We'll show you how to find opportunities, gain essential skills, and kickstart a fulfilling career right out of the gate.
      </p>
      <hr />
      <div className="career-section">
        <h2>🛠️ Skilled Trades & Apprenticeships: Build Your Future with Your Hands</h2>
        <p>
          If you enjoy hands-on work, problem-solving, and seeing tangible results, the **skilled trades** offer incredible stability, high demand, and excellent earning potential. Many roles begin with an **apprenticehip**, a "learn-while-you-earn" model where you get paid to train directly on the job, often alongside experienced professionals. This means little to no student debt!
        </p>
        <ul>
          <li>**Common Roles:**
            <ul>
              <li>**Electrician's Apprentice:** Learn to install and maintain electrical systems.</li>
              <li>**Plumber's Apprentice:** Master the installation and repair of piping systems.</li>
              <li>**HVAC Technician Helper:** Assist with heating, ventilation, and air conditioning systems.</li>
              <li>**Welder:** Join metals using various welding techniques.</li>
              <li>**Carpenter's Helper:** Learn to construct and repair building frameworks and structures.</li>
              <li>**Mason's Apprentice:** Work with brick, stone, and concrete.</li>
              <li>**Automotive Technician Apprentice:** Learn vehicle diagnostics and repair.</li>
              <li>**Heavy Equipment Operator:** Operate machinery like excavators and bulldozers (often requires specific training/licensing).</li>
              <li>**Machinist:** Operate machine tools to produce precision parts.</li>
            </ul>
          </li>
          <li>**Key Skills:** Reliability, physical stamina, mechanical aptitude, strong problem-solving, attention to detail, safety consciousness.</li>
          <li>**Training:** Hands-on experience, often alongside certified professionals; formal apprenticeships typically last 2-5 years and include classroom instruction. Look for programs through local unions, trade organizations, or the Department of Labor's <a href="[https://www.apprenticeship.gov/](https://www.apprenticeship.gov/)" target="_blank" rel="noopener noreferrer">Apprenticeship.gov</a>.</li>
          <li>**Pathways:** Become a journeyman, specialize in a niche, earn certifications, or even start your own business.</li>
        </ul>
        <p className="cta-link">
          <Link href="/tradeschoolguide">
            Discover more about Trade School here!
          </Link>
        </p>
      </div>

      <hr />
      <div className="career-section">
        <h2>📦 Logistics & Transportation: Keep the World Moving</h2>
        <p>
          The backbone of our economy, **logistics and transportation** fields are constantly in need of organized, reliable individuals. If you're comfortable on the go and can manage tasks efficiently, there are many entry points to a stable career.
        </p>
        <ul>
          <li>**Common Roles:**
            <ul>
              <li>**Warehouse Associate/Worker:** Handle shipping, receiving, and inventory.</li>
              <li>**Package Sorter/Handler:** Sort and prepare packages for delivery.</li>
              <li>**Local Delivery Driver (Non-CDL):** Deliver goods using smaller vehicles (e.g., vans, cars).</li>
              <li>**Forklift Operator:** Operate forkllifts to move materials (often requires certification, which employers may provide).</li>
              <li>**Order Picker/Packer:** Fulfill customer orders in a warehouse setting.</li>
              <li>**Dispatcher Assistant:** Support dispatchers in coordinating routes and schedules.</li>
              <li>**Freight Handler:** Load and unload cargo.</li>
            </ul>
          </li>
          <li>**Key Skills:** Time management, attention to detail, physical capability, basic technology use, reliability, good driving record (for drivers).</li>
          <li>**Training:** Often provided on the job; certifications like forklift operation are commonly offered by employers. Some roles may require a clean driving record and a standard driver's license.</li>
          <li>**Pathways:** Move into supervisory roles, specialized equipment operation, or pursue a Commercial Driver's License (CDL) for higher-paying truck driving jobs (long-haul, local, specialized freight).</li>
        </ul>
      </div>

      <hr />
      <div className="career-section">
        <h2>🏢 Administrative & Office Support: The Backbone of Every Business</h2>
        <p>
          Every successful business relies on organized, efficient people to manage daily operations. If you're detail-oriented, enjoy supporting a team, and have strong communication skills, **office support roles** are an excellent starting point.
        </p>
        <ul>
          <li>**Common Roles:**
            <ul>
              <li>**Administrative Assistant:** Manage schedules, organize files, prepare documents.</li>
              <li>**Office Clerk:** Handle mail, data entry, basic filing, and general office tasks.</li>
              <li>**Receptionist:** Greet visitors, answer phones, manage front desk operations.</li>
              <li>**Data Entry Specialist:** Input and maintain accurate information in databases.</li>
              <li>**File Clerk:** Organize and maintain physical and digital filing systems.</li>
              <li>**Mailroom Clerk:** Process incoming and outgoing mail and packages.</li>
            </ul>
          </li>
          <li>**Key Skills:** Strong organization, computer proficiency (Microsoft Office Suite is a major plus!), excellent communication (written and verbal), professional attitude, attention to detail, time management.</li>
          <li>**Training:** Typically on-the-job training; some roles might benefit from short online courses in specific software, office procedures, or basic bookkeeping.</li>
          <li>**Pathways:** Advance to executive assistant, office manager, or specialize in areas like human resources support, accounting support, or project coordination.</li>
        </ul>
      </div>

      <hr />
      <div className="career-section">
        <h2>🤝 Customer Service & Sales: Connect with People</h2>
        <p>
          If you thrive on interacting with people, enjoy solving problems, and have a friendly demeanor, **customer-facing roles** are abundant and offer valuable experience in almost any industry.
        </p>
        <ul>
          <li>**Common Roles:**
            <ul>
              <li>**Retail Sales Associate:** Assist customers, manage inventory, process sales in stores.</li>
              <li>**Customer Service Representative (Call Center/In-Person):** Help customers with inquiries, issues, and product information.</li>
              <li>**Bank Teller:** Process transactions, assist customers with banking needs.</li>
              <li>**Restaurant Host/Hostess:** Greet and seat guests, manage reservations.</li>
              <li>**Barista:** Prepare and serve beverages in coffee shops.</li>
              <li>**Food Service Worker:** Prepare and serve food in various settings (e.g., fast food, cafeterias).</li>
              <li>**Front Desk Associate (Hotels, Gyms):** Manage check-ins, answer questions, provide information.</li>
            </ul>
          </li>
          <li>**Key Skills:** Excellent communication (listening and speaking), patience, empathy, problem-solving, friendly and helpful demeanor, conflict resolution.</li>
          <li>**Training:** Primarily on-the-job training; many companies offer structured customer service or sales training programs.</li>
          <li>**Pathways:** Move into team lead roles, sales management, customer relations management, or specialize in product knowledge and customer experience.</li>
        </ul>
      </div>

      <hr />
      <div className="career-section">
        <h2>🏥 Healthcare Support: Make a Difference in Lives</h2>
        <p>
          Want to contribute to people's well-being and work in a high-demand field? Many essential roles in **healthcare** don't require a four-year degree and offer a direct path to employment after high school, often with short-term certifications.
        </p>
        <ul>
          <li>**Common Roles (with typical certification duration):**
            <ul>
              <li>**Certified Nursing Assistant (CNA):** Provide basic patient care in hospitals, nursing homes (4-12 weeks certification).</li>
              <li>**Medical Assistant (entry-level):** Perform administrative and clinical tasks in clinics (certificate programs weeks to 9 months).</li>
              <li>**Home Health Aide (HHA):** Assist clients with daily living activities in their homes (often on-the-job training or short certification).</li>
              <li>**Phlebotomist:** Draw blood for tests, transfusions, and donations (weeks to 3 months certification).</li>
              <li>**Pharmacy Technician:** Assist pharmacists with dispensing medications (few months to 1 year certification).</li>
              <li>**Sterile Processing Technician:** Sterilize medical equipment for procedures (short certificate).</li>
              <li>**Patient Transporter:** Move patients within healthcare facilities.</li>
              <li>**Medical Biller/Coder (entry-level):** Translate medical services into billing codes (several months certification).</li>
            </ul>
          </li>
          <li>**Key Skills:** Compassion, empathy, strong communication, attention to detail, reliability, willingness to learn medical procedures and terminology, adherence to privacy rules.</li>
          <li>**Training:** Many roles require short certification programs (weeks to months) from community colleges or vocational schools. Some roles offer extensive on-the-job training.</li>
          <li>**Pathways:** Gain experience and potentially pursue further education to become a Licensed Practical Nurse (LPN), Registered Nurse (RN), or other specialized healthcare professionals.</li>
        </ul>
      </div>

      <hr />
      <div className="career-section">
        <h2>💻 Tech & Digital Skills: Your Gateway to Innovation</h2>
        <p>
          The digital world is booming, and you don't always need a four-year degree to get started! If you're tech-savvy, enjoy solving puzzles, or have a knack for online creativity, many roles can be learned through self-study, online courses, and bootcamps.
        </p>
        <ul>
          <li>**Common Roles:**
            <ul>
              <li>**IT Support/Help Desk Technician:** Troubleshoot computer and software issues for users (often requires certifications like CompTIA A+).</li>
              <li>**Web Designer (Front-End/Basic):** Create and maintain websites (focus on HTML, CSS, JavaScript).</li>
              <li>**Social Media Manager (Entry-Level):** Manage and create content for social media platforms.</li>
              <li>**Digital Content Creator:** Produce videos, blogs, or graphics for online platforms.</li>
              <li>**Data Entry Specialist (Advanced/Technical):** Handle complex data input and basic database management.</li>
              <li>**Cybersecurity Support Analyst (Entry-Level):** Assist with basic cybersecurity monitoring (certifications like CompTIA Security+ are helpful).</li>
              <li>**Quality Assurance (QA) Tester:** Test software or websites for bugs and functionality.</li>
            </ul>
          </li>
          <li>**Key Skills:** Logical thinking, problem-solving, computer proficiency, creativity, self-discipline, strong research skills, desire to learn new technologies, communication (especially for IT support).</li>
          <li>**Training:** Online courses (Coursera, Udemy, edX), YouTube tutorials, coding bootcamps (some are short-term, intensive programs), building a portfolio of your work, industry certifications (e.g., CompTIA, Google IT Support Professional Certificate).</li>
          <li>**Pathways:** Specialize in web development, digital marketing, cybersecurity, data analysis, or expand your freelance business.</li>
        </ul>
      </div>

      <hr />
      <div className="career-section">
        <h2>🏛️ Government & Public Service: Serve Your Community</h2>
        <p>
          Serving your community directly through a variety of public service roles can provide great stability, valuable benefits, and a sense of purpose. Many of these positions offer comprehensive training and clear career ladders.
        </p>
        <ul>
          <li>**Common Roles:**
            <ul>
              <li>**Corrections Officer:** Supervise individuals in correctional facilities.</li>
              <li>**Postal Service Worker:** Sort and deliver mail.</li>
              <li>**Military Enlistee:** Join a branch of the armed forces (Army, Navy, Air Force, Marines, Coast Guard).</li>
              <li>**Police Dispatcher:** Answer emergency calls and calls and dispatch first responders.</li>
              <li>**Public Works Laborer:** Maintain infrastructure (roads, parks, sanitation).</li>
              <li>**Firefighter (Entry-Level/Volunteer):** Assist with fire suppression and emergency response (often requires certifications and physical fitness).</li>
              <li>**Emergency Medical Technician (EMT):** Provide immediate medical care at emergency scenes (requires certification).</li>
            </ul>
          </li>
          <li>**Key Skills:** Strong sense of responsibility, integrity, good communication, ability to follow procedures, physical fitness (for many roles), passing relevant background checks and exams.</li>
          <li>**Training:** Extensive on-the-job training provided by the specific agency or branch of service. Certifications (e.g., EMT, Firefighter I) are often part of the training or a prerequisite.</li>
          <li>**Pathways:** Opportunities for advancement within the agency, specialized training, and career-long stability and benefits (including pensions and healthcare).</li>
        </ul>
      </div>

      <hr />
      <div className="career-section">
        <h2>🛠️ General Labor & Manufacturing: Hands-On & Essential</h2>
        <p>
          Many industries rely on skilled and dedicated individuals to produce goods, maintain facilities, and handle day-to-day operations. These roles often offer on-the-job training and a clear path to gaining valuable skills.
        </p>
        <ul>
          <li>**Common Roles:**
            <ul>
              <li>**Factory Worker/Assembler:** Assemble products on a production line.</li>
              <li>**Machine Operator:** Operate and monitor machinery in manufacturing settings.</li>
              <li>**Janitor/Custodian:** Maintain cleanliness and order in buildings.</li>
              <li>**Landscaper/Groundskeeper:** Maintain outdoor areas, operate lawn equipment.</li>
              <li>**Construction Laborer:** Assist skilled tradespeople on construction sites.</li>
              <li>**Warehouse Maintenance Worker:** Perform basic repairs and upkeep in warehouses.</li>
              <li>**Laundry Worker:** Process laundry for various institutions (hospitals, hotels).</li>
            </ul>
          </li>
          <li>**Key Skills:** Physical stamina, reliability, attention to safety, ability to follow instructions, teamwork, basic mechanical aptitude.</li>
          <li>**Training:** Mostly on-the-job training, sometimes with short safety certifications.</li>
          <li>**Pathways:** Specialize in operating specific machinery, move into supervisory roles, or cross-train into more skilled trades.</li>
        </ul>
      </div>

      <hr />
      <div className="career-section">
        <h2>Ready to Get Started? Your Game Plan:</h2>
        <p>Entering the workforce directly after high school is a smart and viable option for many. Here’s how you can prepare and succeed:</p>
        <ol>
          <li>**Identify Your Interests & Strengths:** Which of these fields sounds most appealing to you? What are you good at? What do you enjoy doing? Don't be afraid to try different entry-level jobs to find your fit.</li>
          <li>**Build Your Resume (Even Without Experience!):**
            <ul>
              <li>**Highlight Academics:** Good grades, relevant courses (shop class, computer science).</li>
              <li>**Extracurriculars:** Sports, clubs, volunteer work – show teamwork, leadership, dedication.</li>
              <li>**Part-time Jobs/Gigs:** Babysitting, lawn mowing, dog walking – show responsibility and initiative.</li>
              <li>**Soft Skills:** Emphasize communication, problem-solving, reliability, willingness to learn.</li>
            </ul>
          </li>
          <li>**Look for Certifications:** Many entry-level jobs benefit from short-term certifications (e.g., forklift operation, CNA, CompTIA A+). These show you're serious and ready to work. Your local community college or vocational school is a great resource.</li>
          <li>**Network:** Tell everyone you know (family, friends, teachers, counselors) that you're looking for work. Many opportunities come from connections.</li>
          <li>**Prepare for Interviews:**
            <ul>
              <li>Research the company and the role.</li>
              <li>Practice answering common interview questions (e.g., "Tell me about yourself," "Why are you interested in this job?").</li>
              <li>Dress professionally, arrive on time, and make eye contact.</li>
              <li>Have questions to ask *them* at the end of the interview.</li>
            </ul>
          </li>
          <li>**Utilize Resources:**
            <ul>
              <li>**Your High School Counselor:** They can offer guidance, connect you with local programs, and help with resume building.</li>
              <li>**American Job Centers / One-Stop Career Centers:** These government-funded centers offer free career counseling, job search assistance, resume workshops, and training resources. Find one near you at <a href="[https://www.careeronestop.org/](https://www.careeronestop.org/)" target="_blank" rel="noopener noreferrer">CareerOneStop.org</a>.</li>
              <li>**Online Job Boards:** Indeed, LinkedIn, ZipRecruiter, Glassdoor are great for finding entry-level positions.</li>
              <li>**Company Websites:** Many companies post openings directly on their own "Careers" pages.</li>
              <li>**Local Businesses:** Don't underestimate walking into local shops, restaurants, or businesses and asking about job opportunities.</li>
            </ul>
          </li>
          <li>**Be Persistent and Positive:** Finding the right job takes time and effort. Don't get discouraged by rejections. Every interview is a learning experience!</li>
        </ol>
      </div>
    </div>
  );
};
export default Careers;
