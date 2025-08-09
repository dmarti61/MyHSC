export const CAREER_STATS = {
  // STEM & Tech
  "Software Developer": {
    soc_code: "15-1256", // Software Developers and Quality Assurance Analysts and Testers
    salary: "$132,270", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Much faster than average (25%)", // 2022-2032 (BLS OOH)
    education: "Bachelor’s degree",
    skills: ["Problem-solving", "Coding", "Software Testing", "Agile Methodologies", "Debugging"],
    certifications: ["CompTIA A+", "AWS Certified Developer - Associate", "Microsoft Certified: Azure Developer Associate"],
    environment: "Office or hybrid tech setting, often collaborative and fast-paced",
  },
  "Architect": {
    soc_code: "17-1011", // Architects, Except Landscape and Naval
    salary: "$97,270", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Slower than average (1%)", // 2022-2032 (BLS OOH)
    education: "Bachelor’s degree in Architecture",
    skills: ["Design thinking", "AutoCAD/Revit", "Visualization", "Building Codes", "Project Management"],
    certifications: ["State Licensure (ARE)"],
    environment: "Architecture firms, construction sites, or city planning offices, often requiring site visits",
  },
  "Data Scientist": {
    soc_code: "15-2051", // Data Scientists
    salary: "$108,700", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Much faster than average (35%)", // 2022-2032 (BLS OOH)
    education: "Bachelor’s or Master’s in Data Science, Statistics, or CS",
    skills: ["Data analysis", "Python/R", "Machine learning", "Statistical Modeling", "SQL"],
    certifications: ["Google Data Analytics Professional Certificate", "Microsoft Certified: Azure Data Scientist Associate"],
    environment: "Corporate offices, tech startups, or research settings, often working with large datasets",
  },
  "IT Support Specialist": {
    soc_code: "15-1232", // Computer User Support Specialists
    salary: "$59,660", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Average (4%)", // 2022-2032 (BLS OOH)
    education: "Associate's degree or certification",
    skills: ["Troubleshooting", "Customer Service", "Network Basics", "Hardware/Software Installation", "Problem-solving"],
    certifications: ["CompTIA A+", "ITIL Foundation"],
    environment: "Office settings, help desks, or on-site support, often interacting directly with users",
  },
  "Technical Writer": {
    soc_code: "27-3042", // Technical Writers
    salary: "$79,160", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Average (5%)", // 2022-2032 (BLS OOH)
    education: "Bachelor's degree (preferred) or strong portfolio",
    skills: ["Writing", "Editing", "Research", "Technical Concepts", "Information Design"],
    certifications: ["Certified Professional Technical Communicator (CPTC)"],
    environment: "Corporate offices, tech companies, or freelance, focusing on clear documentation",
  },

  // College & Research
  "Academic Researcher": { // Often falls under various research categories
    soc_code: "25-1000", // Postsecondary Teachers (as a proxy, given the academic context)
    salary: "$84,380", // Median Annual Wage for Postsecondary Teachers (overall), May 2023 (BLS OES)
    outlook: "Faster than average (8%)", // 2022-2032 (BLS OOH)
    education: "Master’s or Ph.D.",
    skills: ["Research methodology", "Statistical analysis", "Academic writing", "Critical Thinking", "Grant Writing"],
    certifications: [],
    environment: "Universities, research institutions, think tanks, often self-directed work",
  },
  "Engineer (R&D)": {
    soc_code: "17-2199", // Engineers, All Other (to capture R&D breadth)
    salary: "$105,970", // Median Annual Wage for Engineers, All Other, May 2023 (BLS OES)
    outlook: "Faster than average (6%)", // 2022-2032 (BLS OOH for Engineers, All Other)
    education: "Bachelor’s degree in Engineering",
    skills: ["Problem-solving", "Design", "Analytical thinking", "Innovation", "Prototyping"],
    certifications: ["Professional Engineer (PE) License (for some fields)"],
    environment: "Labs, corporate R&D departments, often focused on new product development",
  },
  "Philosopher/Theorist": {
    soc_code: "25-1126", // Philosophy and Religion Teachers, Postsecondary
    salary: "$84,380", // Median Annual Wage for Postsecondary Teachers (overall), May 2023 (BLS OES)
    outlook: "Faster than average (8%)", // 2022-2032 (BLS OOH for Postsecondary Teachers overall)
    education: "Ph.D.",
    skills: ["Critical thinking", "Logic", "Argumentation", "Writing", "Abstract Reasoning"],
    certifications: [],
    environment: "Universities, colleges, research institutions, primarily intellectual work",
  },
  "Lab Technician": {
    soc_code: "19-4021", // Biological Technicians (as an example)
    salary: "$53,880", // Median Annual Wage for Biological Technicians, May 2023 (BLS OES)
    outlook: "Average (5%)", // 2022-2032 (BLS OOH)
    education: "Associate's degree or certificate",
    skills: ["Laboratory procedures", "Data collection", "Equipment Operation", "Attention to Detail", "Safety Protocols"],
    certifications: ["Medical Laboratory Technician (MLT) (for some fields)"],
    environment: "Research labs, hospitals, manufacturing facilities, performing experiments and analyses",
  },
  "Scientific Journalist": {
    soc_code: "27-3022", // Reporters and Correspondents (as closest proxy)
    salary: "$55,960", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Little or no change (-2%)", // 2022-2032 (BLS OOH for Reporters and Correspondents)
    education: "Bachelor's degree (preferred) or strong portfolio",
    skills: ["Reporting", "Interviewing", "Writing", "Research", "Scientific Literacy"],
    certifications: [],
    environment: "News organizations, online media, freelance, communicating complex scientific topics",
  },

  // Business & Law
  "Business Executive": { // Falls under Top Executives
    soc_code: "11-1011", // Chief Executives
    salary: "$206,420", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Slower than average (3%)", // 2022-2032 (BLS OOH)
    education: "Bachelor's or Master's degree",
    skills: ["Strategic planning", "Financial management", "Leadership", "Decision Making", "Vision Setting"],
    certifications: [],
    environment: "Corporate offices across various industries, high-pressure and leadership-focused",
  },
  "Lawyer": {
    soc_code: "23-1011", // Lawyers
    salary: "$145,760", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Faster than average (8%)", // 2022-2032 (BLS OOH)
    education: "Juris Doctor (J.D.)",
    skills: ["Legal research", "Argumentation", "Negotiation", "Client Counseling", "Writing"],
    certifications: ["State Bar Admission"],
    environment: "Law firms, government agencies, corporate legal departments, demanding and detail-oriented",
  },
  "Management Consultant": {
    soc_code: "13-1111", // Management Analysts
    salary: "$99,440", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Faster than average (10%)", // 2022-2032 (BLS OOH)
    education: "Bachelor's degree (often MBA preferred)",
    skills: ["Problem-solving", "Data analysis", "Communication", "Strategic Thinking", "Presentation Skills"],
    certifications: ["Certified Management Consultant (CMC) (optional)"],
    environment: "Consulting firms, corporate offices, often involving extensive travel",
  },
  "Construction Manager": {
    soc_code: "11-9021", // Construction Managers
    salary: "$104,700", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Average (5%)", // 2022-2032 (BLS OOH)
    education: "High school diploma + extensive experience or associate degree",
    skills: ["Project Management", "Budgeting", "Team Leadership", "Safety Regulations", "Blueprint Reading"],
    certifications: ["OSHA 30-Hour Construction Safety"],
    environment: "Construction sites and offices, requiring strong organizational and leadership skills",
  },
  "Sales Director": {
    soc_code: "11-2022", // Sales Managers
    salary: "$136,150", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Average (5%)", // 2022-2032 (BLS OOH)
    education: "Bachelor's degree (often preferred) or extensive sales experience",
    skills: ["Sales Strategy", "Team Leadership", "Negotiation", "CRM Software", "Communication"],
    certifications: ["Certified Professional Sales Person (CPSP) (optional)"],
    environment: "Corporate offices, client sites, target-driven and relationship-focused",
  },
  "Entrepreneur": { // No direct SOC code, often aligns with Business Owners or Managers
    soc_code: "11-1021", // General and Operations Managers (most relevant broad category)
    salary: "$102,950", // Median Annual Wage for General and Operations Managers, May 2023 (BLS OES)
    outlook: "Average (5%)", // 2022-2032 (BLS OOH)
    education: "Varies (often Bachelor's in Business)",
    skills: ["Innovation", "Risk-taking", "Networking", "Business Acumen", "Adaptability", "Problem-solving"],
    certifications: [],
    environment: "Startups, small businesses, self-employed, highly dynamic and challenging",
  },
  "Marketing Strategist": {
    soc_code: "13-1161", // Market Research Analysts and Marketing Specialists
    salary: "$76,930", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Faster than average (13%)", // 2022-2032 (BLS OOH)
    education: "Bachelor’s degree in Marketing or related field",
    skills: ["Market research", "Campaign development", "Data analysis", "Digital Marketing", "Consumer Behavior"],
    certifications: ["Google Ads Certification", "HubSpot Content Marketing Certification"],
    environment: "Marketing agencies, corporate marketing departments, often creative and analytical",
  },
  "HR Manager": {
    soc_code: "11-3121", // Human Resources Managers
    salary: "$136,890", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Average (5%)", // 2022-2032 (BLS OOH)
    education: "Bachelor's degree",
    skills: ["Recruitment", "Employee relations", "Conflict resolution", "HRIS Systems", "Legal Compliance"],
    certifications: ["SHRM-CP", "SPHR"],
    environment: "Corporate human resources departments, focused on people and policy",
  },
  "Operations Manager": {
    soc_code: "11-1021", // General and Operations Managers
    salary: "$102,950", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Average (5%)", // 2022-2032 (BLS OOH)
    education: "Bachelor’s in Business or related field",
    skills: ["Leadership", "Budgeting", "Communication", "Process Improvement", "Supply Chain Management"],
    certifications: ["PMP (Project Management Professional) (optional)"],
    environment: "Corporate settings across industries, ensuring smooth and efficient workflows",
  },
  "Project Manager": { // Often falls under General and Operations Managers
    soc_code: "11-1021", // General and Operations Managers
    salary: "$102,950", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Average (5%)", // 2022-2032 (BLS OOH)
    education: "Bachelor’s in Business or related field",
    skills: ["Project Planning", "Risk Management", "Team Coordination", "Budget Management", "Communication"],
    certifications: ["PMP (Project Management Professional)", "Certified Associate in Project Management (CAPM)"],
    environment: "Corporate settings across industries, leading diverse projects",
  },
  "Customer Success Manager": { // No direct SOC code, often aligns with Sales or Marketing Managers
    soc_code: "11-2022", // Sales Managers (as a close proxy due to client-facing and retention goals)
    salary: "$136,150", // Median Annual Wage for Sales Managers, May 2023 (BLS OES)
    outlook: "Average (5%)", // 2022-2032 (BLS OOH)
    education: "Bachelor's degree",
    skills: ["Relationship management", "Communication", "Problem-solving", "Product Knowledge", "Client Retention"],
    certifications: ["Customer Success Manager Certification (various providers)"],
    environment: "Tech companies, customer service departments, focused on client satisfaction and growth",
  },
  "Hospitality Manager": {
    soc_code: "11-9051", // Lodging Managers
    salary: "$68,960", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Slower than average (1%)", // 2022-2032 (BLS OOH)
    education: "High school diploma or Bachelor's in Hospitality",
    skills: ["Customer service", "Operations management", "Staff supervision", "Guest Relations", "Problem Resolution"],
    certifications: ["Certified Hospitality Administrator (CHA)"],
    environment: "Hotels, resorts, event venues, dynamic and people-centric",
  },

  // Creative Arts
  "Creative Director": { // Often categorized as Art Directors
    soc_code: "27-1011", // Art Directors
    salary: "$108,290", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Slower than average (2%)", // 2022-2032 (BLS OOH)
    education: "Bachelor’s in Art, Design, or Marketing",
    skills: ["Design", "Team leadership", "Creative direction", "Branding", "Visual Communication"],
    certifications: ["None required, portfolio-driven"],
    environment: "Advertising agencies, studios, or media companies, highly collaborative and visionary",
  },
  "Writer": {
    soc_code: "27-3043", // Writers and Authors
    salary: "$73,150", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Average (4%)", // 2022-2032 (BLS OOH)
    education: "Bachelor’s in English, Journalism, or Communications",
    skills: ["Writing", "Editing", "Storytelling", "Research", "Adaptability"],
    certifications: ["None required; strong portfolio is key"],
    environment: "Freelance, publishing, media, or creative agencies, often working independently",
  },
  "Author/Novelist": {
    soc_code: "27-3043", // Writers and Authors
    salary: "$73,150", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Average (4%)", // 2022-2032 (BLS OOH)
    education: "Bachelor’s in English, Creative Writing, or related field",
    skills: ["Writing", "Imagination", "Discipline", "Character Development", "Plotting"],
    certifications: [],
    environment: "Freelance, publishing houses, self-published, requiring significant self-motivation",
  },
  "Art Director": {
    soc_code: "27-1011", // Art Directors
    salary: "$108,290", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Slower than average (2%)", // 2022-2032 (BLS OOH)
    education: "Bachelor’s in Art, Design, or Marketing",
    skills: ["Design", "Team leadership", "Creative direction", "Branding", "Visual Communication"],
    certifications: ["None required, portfolio-driven"],
    environment: "Advertising agencies, studios, or media companies, leading visual projects",
  },
  "Actor/Performer": {
    soc_code: "27-2011", // Actors
    salary: "$27.97/hour", // Median Hourly Wage, May 2023 (BLS OES) - Note: Actors' pay varies greatly.
    outlook: "Slower than average (3%)", // 2022-2032 (BLS OOH)
    education: "Varies; talent and experience are key",
    skills: ["Performance", "Improvisation", "Audience engagement", "Memorization", "Voice Modulation"],
    certifications: ["Acting workshops, drama school (optional)"],
    environment: "Theaters, studios, or live event venues, requiring adaptability and resilience",
  },
  "Graphic Designer": {
    soc_code: "27-1024", // Graphic Designers
    salary: "$63,770", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Slower than average (3%)", // 2022-2032 (BLS OOH)
    education: "Bachelor’s degree",
    skills: ["Design software (Adobe Creative Suite)", "Creativity", "Communication", "Typography", "Layout Design"],
    certifications: ["Adobe Certified Professional (ACP)"],
    environment: "Design studios, marketing departments, freelance, blending art and technology",
  },
  "Florist": {
    soc_code: "41-2031", // Floral Designers
    salary: "$33,620", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Slower than average (2%)", // 2022-2032 (BLS OOH)
    education: "High school diploma or equivalent",
    skills: ["Floral design", "Customer service", "Creativity", "Plant Knowledge", "Arrangement Skills"],
    certifications: ["Certified Floral Designer (CFD) (optional)"],
    environment: "Flower shops, grocery stores, self-employed, hands-on and artistic",
  },
  "Ceramic Artist": { // No direct SOC code, falls under Fine Artists, Including Painters, Sculptors, and Illustrators
    soc_code: "27-1013", // Fine Artists, Including Painters, Sculptors, and Illustrators
    salary: "$73,850", // Median Annual Wage, May 2023 (BLS OES) - for Fine Artists
    outlook: "Average (4%)", // 2022-2032 (BLS OOH for Fine Artists)
    education: "Varies; studio training, workshops, or associate's degree",
    skills: ["Sculpting", "Glazing", "Kiln Operation", "Artistic Vision", "Attention to Detail"],
    certifications: [],
    environment: "Art studios, workshops, self-employed, hands-on and expressive",
  },
  "Photographer": {
    soc_code: "27-4021", // Photographers
    salary: "$44,790", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Slower than average (3%)", // 2022-2032 (BLS OOH)
    education: "Varies; strong portfolio, often self-taught or workshops",
    skills: ["Composition", "Lighting", "Photo Editing (Adobe Photoshop/Lightroom)", "Camera Operation", "Client Communication"],
    certifications: [],
    environment: "Studios, on-location shoots, freelance, combining technical skill with artistic vision",
  },

  // Education & Human Services
  "Psychologist": {
    soc_code: "19-3031", // Psychologists
    salary: "$94,010", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Faster than average (6%)", // 2022-2032 (BLS OOH)
    education: "Doctoral degree (Ph.D. or Psy.D.)",
    skills: ["Therapy techniques", "Research", "Empathy", "Diagnostic Skills", "Active Listening"],
    certifications: ["State Licensure"],
    environment: "Private practice, hospitals, schools, government, focused on mental well-being",
  },
  "Nonprofit Director": { // Often falls under Social and Community Service Managers
    soc_code: "11-9151", // Social and Community Service Managers
    salary: "$76,700", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Faster than average (9%)", // 2022-2032 (BLS OOH)
    education: "Bachelor's degree (Master's often preferred)",
    skills: ["Program development", "Fundraising", "Leadership", "Budget Management", "Community Engagement"],
    certifications: ["Certified Nonprofit Professional (CNP) (optional)"],
    environment: "Nonprofit organizations, community centers, mission-driven and impactful",
  },
  "Writer/Editor": {
    soc_code: "27-3043", // Writers and Authors
    salary: "$73,150", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Average (4%)", // 2022-2032 (BLS OOH)
    education: "Bachelor’s in English, Journalism, or Communications",
    skills: ["Writing", "Editing", "Storytelling", "Grammar", "Research"],
    certifications: ["None required; strong portfolio is key"],
    environment: "Freelance, publishing, media, or creative agencies, often working independently",
  },
  "Social Worker Assistant": {
    soc_code: "21-1093", // Social and Human Service Assistants
    salary: "$37,270", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Faster than average (9%)", // 2022-2032 (BLS OOH)
    education: "Associate's degree or certificate",
    skills: ["Case Management", "Client Support", "Resource Navigation", "Communication", "Empathy"],
    certifications: ["State certification/registration (varies)"],
    environment: "Government agencies, non-profits, healthcare facilities, supporting vulnerable populations",
  },
  "Community Organizer": { // Falls under Social and Community Service Managers (as a proxy)
    soc_code: "11-9151", // Social and Community Service Managers
    salary: "$76,700", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Faster than average (9%)", // 2022-2032 (BLS OOH)
    education: "High school diploma or Bachelor's (preferred)",
    skills: ["Advocacy", "Public Speaking", "Networking", "Event Planning", "Grassroots Mobilization"],
    certifications: [],
    environment: "Nonprofit organizations, grassroots movements, political campaigns, highly collaborative and advocacy-focused",
  },
  "Therapist/Counselor": { // Broad term, using Marriage and Family Therapists (21-1013) as example
    soc_code: "21-1013", // Marriage and Family Therapists
    salary: "$57,070", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Much faster than average (15%)", // 2022-2032 (BLS OOH)
    education: "Master’s degree",
    skills: ["Empathy", "Listening", "Emotional intelligence", "Therapeutic Techniques", "Confidentiality"],
    certifications: ["State Licensure (LPC, LMFT, LCSW)"],
    environment: "Private practice, clinics, or schools, providing mental health support",
  },
  "Teacher (K-12)": { // Broad term, using Elementary School Teachers (25-2021) as primary example
    soc_code: "25-2021", // Elementary School Teachers, Except Special Education
    salary: "$63,680", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Slower than average (1%)", // 2022-2032 (BLS OOH)
    education: "Bachelor’s in Education + State Teaching Credential",
    skills: ["Communication", "Classroom management", "Creativity", "Lesson Planning", "Child Development"],
    certifications: ["State Teacher Certification"],
    environment: "Elementary schools (public or private), engaging and dynamic classrooms",
  },
  "Librarian": {
    soc_code: "25-4022", // Librarians and Media Specialists
    salary: "$64,320", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Faster than average (6%)", // 2022-2032 (BLS OOH)
    education: "Master’s in Library and Information Science (MLIS)",
    skills: ["Organization", "Information retrieval", "Tech literacy", "Research Skills", "Community Engagement"],
    certifications: ["State Licensure (varies)"],
    environment: "Schools, universities, or public libraries, supporting information access",
  },
  "Librarian Assistant": {
    soc_code: "25-9000", // Library Technicians and Library Assistants
    salary: "$38,400", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Slower than average (-2%)", // 2022-2032 (BLS OOH)
    education: "Associate's degree or certificate",
    skills: ["Organization", "Customer Service", "Data Entry", "Book Handling", "Basic Computer Skills"],
    certifications: [],
    environment: "Public, school, or academic libraries, assisting with daily operations",
  },
  "Elementary School Teacher": { // Specific listing
    soc_code: "25-2021", // Elementary School Teachers, Except Special Education
    salary: "$63,680", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Slower than average (1%)", // 2022-2032 (BLS OOH)
    education: "Bachelor’s in Education + State Teaching Credential",
    skills: ["Communication", "Classroom management", "Creativity", "Lesson Planning", "Child Development"],
    certifications: ["State Teacher Certification"],
    environment: "Elementary schools (public or private), nurturing young learners",
  },
  "School Principal": {
    soc_code: "11-9032", // Education Administrators, Elementary and Secondary School
    salary: "$103,100", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Slower than average (1%)", // 2022-2032 (BLS OOH)
    education: "Master's degree + administrative license",
    skills: ["Leadership", "Budgeting", "Curriculum development", "Staff Management", "Community Relations"],
    certifications: ["State Principal's License"],
    environment: "Elementary, middle, or high schools, overseeing all aspects of school operations",
  },
  "Nurse Educator": {
    soc_code: "25-1041", // Nursing Instructors and Teachers, Postsecondary
    salary: "$84,380", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Faster than average (8%)", // 2022-2032 (BLS OOH)
    education: "Master's or doctoral degree in nursing",
    skills: ["Teaching", "Clinical expertise", "Curriculum development", "Mentorship", "Assessment"],
    certifications: ["RN license + Certified Nurse Educator (CNE) (optional)"],
    environment: "Colleges, universities, hospitals, training future healthcare professionals",
  },
  "Youth Program Coordinator": {
    soc_code: "21-1022", // Recreational Therapists (as a proxy, as it involves program planning for well-being)
    salary: "$53,610", // Median Annual Wage for Recreational Therapists, May 2023 (BLS OES)
    outlook: "Faster than average (7%)", // 2022-2032 (BLS OOH)
    education: "Associate's degree or relevant experience",
    skills: ["Program Planning", "Leadership", "Child Supervision", "Communication", "Conflict Resolution"],
    certifications: ["CPR/First Aid"],
    environment: "Community centers, schools, non-profits, creating engaging activities for youth",
  },
  "Flight Attendant": {
    soc_code: "53-2031", // Flight Attendants
    salary: "$68,760", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Faster than average (11%)", // 2022-2032 (BLS OOH)
    education: "High school diploma + airline training",
    skills: ["Customer Service", "Emergency Procedures", "Communication", "Safety Protocols", "Calm Under Pressure"],
    certifications: ["FAA Certification"],
    environment: "Aircraft, constantly traveling, focused on passenger safety and comfort",
  },
  "Recreation Coordinator": {
    soc_code: "21-1022", // Recreational Therapists
    salary: "$53,610", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Faster than average (7%)", // 2022-2032 (BLS OOH)
    education: "Bachelor's degree",
    skills: ["Program planning", "Leadership", "Communication", "Activity Design", "Group Facilitation"],
    certifications: ["Certified Therapeutic Recreation Specialist (CTRS) (optional)"],
    environment: "Recreation centers, hospitals, nursing homes, promoting active lifestyles",
  },
  "Child Care Worker": {
    soc_code: "39-9011", // Childcare Workers
    salary: "$30,180", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Average (4%)", // 2022-2032 (BLS OOH)
    education: "High school diploma or equivalent; some postsecondary education preferred",
    skills: ["Child Development", "Patience", "Communication", "Safety Awareness", "Creative Play"],
    certifications: ["CPR/First Aid"],
    environment: "Homes, daycare centers, schools, providing direct care and supervision",
  },

  // Communication & Media
  "Public Relations Specialist": {
    soc_code: "13-1073", // Public Relations Specialists
    salary: "$70,050", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Faster than average (6%)", // 2022-2032 (BLS OOH)
    education: "Bachelor’s degree in Public Relations, Journalism, or Communications",
    skills: ["Media relations", "Crisis communication", "Writing", "Strategic Planning", "Social Media Management"],
    certifications: ["Accredited in Public Relations (APR) (optional)"],
    environment: "PR firms, corporate communications, non-profits, focused on public image and messaging",
  },
  "Journalist/Reporter": {
    soc_code: "27-3022", // Reporters and Correspondents
    salary: "$55,960", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Little or no change (-2%)", // 2022-2032 (BLS OOH) - Note: This category faces significant industry changes.
    education: "Bachelor’s degree in Journalism or Communications",
    skills: ["Reporting", "Interviewing", "Writing", "Digital media", "Investigative Skills", "Ethical Judgment"],
    certifications: [],
    environment: "News organizations, online media, freelance, often deadline-driven and fast-paced",
  },
  "Event Planner": {
    soc_code: "13-1121", // Meeting, Convention, and Event Planners
    salary: "$55,460", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Faster than average (8%)", // 2022-2032 (BLS OOH)
    education: "Bachelor's degree",
    skills: ["Organization", "Negotiation", "Attention to detail", "Budgeting", "Vendor Management"],
    certifications: ["Certified Meeting Professional (CMP) (optional)"],
    environment: "Event management companies, hotels, corporate events, highly dynamic and detail-oriented",
  },
  "Tour Guide": {
    soc_code: "39-7011", // Tour Guides and Escorts
    salary: "$34,220", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Average (5%)", // 2022-2032 (BLS OOH)
    education: "High school diploma or equivalent",
    skills: ["Public Speaking", "Customer Service", "Knowledge of Attractions", "Storytelling", "Group Management"],
    certifications: [],
    environment: "Tourist destinations, historical sites, outdoor settings, interacting with diverse groups",
  },
  "Travel Agent": {
    soc_code: "41-3041", // Travel Agents
    salary: "$48,190", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Little or no change (0%)", // 2022-2032 (BLS OOH)
    education: "High school diploma + travel school/certificate",
    skills: ["Customer Service", "Destination Knowledge", "Booking Systems", "Problem-solving", "Sales"],
    certifications: ["Certified Travel Associate (CTA) (optional)"],
    environment: "Travel agencies, call centers, remote work, helping clients plan trips",
  },


  // Public Service & Safety
  "Police Officer": {
    soc_code: "33-3051", // Police and Sheriff's Patrol Officers
    salary: "$72,280", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Slower than average (3%)", // 2022-2032 (BLS OOH)
    education: "High school diploma + Police Academy",
    skills: ["Decision-making", "Law knowledge", "Stamina", "Communication", "Physical Fitness"],
    certifications: ["POST Certification (varies by state)"],
    environment: "Police departments, patrol routes, or investigations, demanding and often high-stress",
  },
  "Firefighter": {
    soc_code: "33-2011", // Firefighters
    salary: "$57,170", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Average (4%)", // 2022-2032 (BLS OOH)
    education: "High school diploma + fire academy training",
    skills: ["Emergency Response", "Teamwork", "Physical Strength", "Problem-solving", "First Aid"],
    certifications: ["State Firefighter Certification", "EMT certification"],
    environment: "Fire stations, emergency sites, physically demanding and high-stakes",
  },


  // Health & Wellness
  "Registered Nurse (RN)": {
    soc_code: "29-1141", // Registered Nurses
    salary: "$86,070", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Faster than average (6%)", // 2022-2032 (BLS OOH)
    education: "Bachelor’s in Nursing (BSN) + RN license",
    skills: ["Patient care", "Clinical skills", "Critical thinking", "Medication Administration", "Empathy"],
    certifications: ["Registered Nurse (RN) License"],
    environment: "Hospitals, clinics, or home care, direct patient interaction and demanding hours",
  },
  "Veterinary Technician": {
    soc_code: "29-2056", // Veterinary Technologists and Technicians
    salary: "$43,760", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Much faster than average (21%)", // 2022-2032 (BLS OOH)
    education: "Associate’s degree or postsecondary non-degree award",
    skills: ["Animal care", "Medical procedures", "Customer service", "Diagnostic Testing", "Restraint Techniques"],
    certifications: ["State Credential (RVT, LVT, CVT)"],
    environment: "Veterinary clinics, animal hospitals, hands-on and compassionate work with animals",
  },
  "Paramedic": {
    soc_code: "29-2043", // Emergency Medical Technicians and Paramedics
    salary: "$49,020", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Average (5%)", // 2022-2032 (BLS OOH)
    education: "EMT certification or Associate’s degree in Paramedicine",
    skills: ["First aid", "Decision-making", "Emergency care", "Patient Assessment", "Life Support"],
    certifications: ["NREMT Certification", "State Paramedic License"],
    environment: "Ambulance services, hospitals, or emergency departments, high-stress and critical situations",
  },
  "Dental Assistant": {
    soc_code: "31-9091", // Dental Assistants
    salary: "$46,540", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Faster than average (7%)", // 2022-2032 (BLS OOH)
    education: "High school diploma + dental assisting program/certificate",
    skills: ["Patient Care", "Dental Procedures Assistance", "Sterilization", "X-ray Imaging", "Record Keeping"],
    certifications: ["Certified Dental Assistant (CDA) (optional)"],
    environment: "Dental offices, clinics, assisting dentists and interacting with patients",
  },
  "Medical Assistant": {
    soc_code: "31-9092", // Medical Assistants
    salary: "$42,000", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Much faster than average (14%)", // 2022-2032 (BLS OOH)
    education: "Postsecondary non-degree award or Associate's degree",
    skills: ["Patient Intake", "Vital Signs", "Medical Terminology", "Administrative Tasks", "Phlebotomy (optional)"],
    certifications: ["Certified Medical Assistant (CMA)"],
    environment: "Physicians' offices, hospitals, outpatient clinics, performing administrative and clinical duties",
  },


  // Skilled Trades & Hands-On Careers
  "Automotive Mechanic": {
    soc_code: "49-3023", // Automotive Service Technicians and Mechanics
    salary: "$49,150", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Slower than average (1%)", // 2022-2032 (BLS OOH)
    education: "High school diploma or equivalent; postsecondary training",
    skills: ["Diagnostic skills", "Repair", "Mechanical aptitude", "Tool Proficiency", "Computer Diagnostics"],
    certifications: ["ASE Certification (optional)"],
    environment: "Automotive repair shops, dealerships, hands-on and problem-solving focused",
  },
  "Pilot (Commercial)": {
    soc_code: "53-2012", // Airline and Commercial Pilots
    salary: "$119,770", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Average (4%)", // 2022-2032 (BLS OOH)
    education: "Bachelor's degree (often) + flight training",
    skills: ["Flight control", "Navigation", "Decision-making", "Weather Analysis", "Communication"],
    certifications: ["FAA certifications (e.g., ATP, Commercial Pilot License)"],
    environment: "Airlines, charter services, private companies, high responsibility and specialized skills",
  },
  "HVAC Technician": {
    soc_code: "49-9021", // Heating, Air Conditioning, and Refrigeration Mechanics and Installers
    salary: "$59,620", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Faster than average (6%)", // 2022-2032 (BLS OOH)
    education: "High school diploma + vocational training/apprenticeship",
    skills: ["Troubleshooting", "Installation", "Repair", "Blueprint Reading", "Electrical Knowledge"],
    certifications: ["EPA Section 608 Certification"],
    environment: "Residential and commercial buildings, often on-site work and problem-solving",
  },
  "Computer Repair Technician": {
    soc_code: "49-2097", // Electronic Equipment Installers and Repairers, Commercial and Industrial Equipment
    salary: "$64,320", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Slower than average (3%)", // 2022-2032 (BLS OOH)
    education: "Associate’s degree or postsecondary non-degree award",
    skills: ["Troubleshooting", "Hardware Repair", "Software Diagnostics", "Network Connectivity", "Customer Service"],
    certifications: ["CompTIA A+"],
    environment: "Repair shops, corporate IT departments, field service, focused on diagnosing and fixing tech issues",
  },
  "Machinist": {
    soc_code: "51-4041", // Machinists
    salary: "$53,840", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Slower than average (2%)", // 2022-2032 (BLS OOH)
    education: "High school diploma + apprenticeship or on-the-job training",
    skills: ["Machine Operation", "Blueprint Reading", "Precision Measurement", "Metalworking", "Problem-solving"],
    certifications: [],
    environment: "Manufacturing plants, workshops, hands-on and detail-oriented",
  },
  "Electrical Lineman": {
    soc_code: "49-9051", // Electrical Power-Line Installers and Repairers
    salary: "$88,720", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Average (4%)", // 2022-2032 (BLS OOH)
    education: "High school diploma + apprenticeship",
    skills: ["Electrical Systems", "Safety Protocols", "Climbing", "Troubleshooting", "Equipment Operation"],
    certifications: [],
    environment: "Outdoor, various weather conditions, physically demanding and safety-critical",
  },


  // Other specific careers from the previous list:
  "Accountant": {
    soc_code: "13-2011", // Accountants and Auditors
    salary: "$79,880", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Average (4%)", // 2022-2032 (BLS OOH)
    education: "Bachelor's degree in accounting",
    skills: ["Financial analysis", "Tax preparation", "Auditing", "Bookkeeping", "Software Proficiency"],
    certifications: ["CPA (Certified Public Accountant) (optional)"],
    environment: "Accounting firms, corporate finance departments, government, detail-oriented and analytical",
  },
  "Paralegal": {
    soc_code: "23-2011", // Paralegals and Legal Assistants
    salary: "$60,900", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Faster than average (7%)", // 2022-2032 (BLS OOH)
    education: "Associate's degree or postsecondary certificate",
    skills: ["Legal research", "Document preparation", "Case Management", "Communication", "Attention to Detail"],
    certifications: ["Certified Paralegal (CP) (optional)"],
    environment: "Law firms, corporate legal departments, government agencies, supporting legal professionals",
  },
  "Bookkeeper": {
    soc_code: "43-3031", // Bookkeeping, Accounting, and Auditing Clerks
    salary: "$47,440", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Little or no change (-2%)", // 2022-2032 (BLS OOH)
    education: "High school diploma; some postsecondary coursework preferred",
    skills: ["Record Keeping", "Data Entry", "Financial Software", "Reconciliation", "Attention to Detail"],
    certifications: ["Certified Bookkeeper (CB) (optional)"],
    environment: "Small businesses, corporate accounting departments, self-employed, organized and meticulous",
  },
  "Retail Manager": {
    soc_code: "41-1011", // First-Line Supervisors of Retail Sales Workers
    salary: "$48,420", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Little or no change (-1%)", // 2022-2032 (BLS OOH)
    education: "High school diploma or Associate's degree",
    skills: ["Customer Service", "Sales", "Inventory Management", "Team Leadership", "Merchandising"],
    certifications: [],
    environment: "Retail stores, managing staff and sales operations",
  },
  "Recreation & Fitness Instructor": {
    soc_code: "39-9031", // Fitness Trainers and Instructors
    salary: "$45,910", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Much faster than average (14%)", // 2022-2032 (BLS OOH)
    education: "Certificate or Associate's degree; relevant certifications",
    skills: ["Exercise Physiology", "Client Motivation", "Lesson Planning", "Safety Protocols", "Communication"],
    certifications: ["ACSM Certified Personal Trainer", "ACE Certified Group Fitness Instructor"],
    environment: "Gyms, health clubs, community centers, active and engaging",
  },
  "Social Entrepreneur": { // Similar to Entrepreneur/Nonprofit Director
    soc_code: "11-9151", // Social and Community Service Managers (as closest proxy)
    salary: "$76,700", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Faster than average (9%)", // 2022-2032 (BLS OOH)
    education: "Varies (often Bachelor's in Business, Social Work, or related field)",
    skills: ["Innovation", "Community engagement", "Business development", "Impact Measurement", "Fundraising", "Adaptability"],
    certifications: [],
    environment: "Nonprofit organizations, impact-driven businesses, community initiatives, driven by social change",
  },
  "Hairdresser/Cosmetologist": {
    soc_code: "39-5012", // Barbers, Hairstylists, and Cosmetologists
    salary: "$35,660", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Average (4%)", // 2022-2032 (BLS OOH)
    education: "High school diploma + cosmetology program",
    skills: ["Hair Styling", "Skincare", "Makeup Application", "Customer Service", "Color Theory", "Sanitation"],
    certifications: ["State Cosmetology License"],
    environment: "Salons, spas, self-employed, creative and client-focused",
  },
};
