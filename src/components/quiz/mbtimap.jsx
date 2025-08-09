import React from 'react';

// Helper function to get more user-friendly names for pathways
export const getPathwayDisplay = (path) => {
  switch (path) {
    case "college":
      return "College";
    case "community":
      return "Community College";
    case "trade":
      return "Trade School";
    case "job":
      return "Direct Job Entry";
    default:
      return path; // Fallback for any unexpected paths
  }
};

// **UPDATED** Function to generate the recommended next step phrase dynamically, now considering user preference
export const generateNextStepPhrase = (mbtiTypeData, preferredPathway) => {
  const pathways = new Set();
  mbtiTypeData.careers.forEach((career) => {
    if (career.postSchoolPath) {
      pathways.add(career.postSchoolPath.toLowerCase());
    }
  });

  const sortedPathways = Array.from(pathways).sort((a, b) => {
    const order = { "college": 1, "community": 2, "trade": 3, "job": 4 };
    return (order[a] || 99) - (order[b] || 99);
  });

  let phrase = "The most common educational paths for your type are ";
  const pathwayCount = sortedPathways.length;

  if (pathwayCount === 0) {
    return "No specific post-school paths are listed for this type. Consider exploring various educational and career avenues.";
  }

  // Check if the user's preferred pathway is in the list of valid paths for this MBTI type
  const hasPreferredPath = pathways.has(preferredPathway);
  
  if (hasPreferredPath) {
      // Prioritize the preferred pathway in the phrase
      if (pathwayCount === 1) {
          phrase = `Based on your preference, your journey could involve **${getPathwayDisplay(sortedPathways[0])}**.`;
      } else {
          // Construct a phrase that leads with the preferred pathway and mentions others
          const otherPathways = sortedPathways.filter(p => p !== preferredPathway);
          const otherPathwaysPhrase = otherPathways.map(p => getPathwayDisplay(p)).join(", ");

          if (otherPathways.length > 0) {
              phrase = `Based on your interest in **${getPathwayDisplay(preferredPathway)}**, this is a viable path for your type. Other great options include ${otherPathwaysPhrase}.`;
          } else {
              // This case handles when the preferred path is the only path
              phrase = `Based on your interest, a **${getPathwayDisplay(preferredPathway)}** is the primary path for careers associated with your type.`;
          }
      }
  } else {
      // If the user's preferred pathway is not a direct match, give a general recommendation
      // and gently guide them to the most common paths for their type.
      const displayPaths = sortedPathways.map(p => getPathwayDisplay(p));
      if (pathwayCount === 1) {
          phrase = `While your preference may not be a direct match, a **${displayPaths[0]}** is the primary path for careers associated with your type.`;
      } else if (pathwayCount === 2) {
          phrase = `While your preference may not be a direct match, your journey most commonly involves **${displayPaths[0]}** or **${displayPaths[1]}**.`;
      } else {
          const lastPathway = displayPaths.pop();
          phrase = `While your preference may not be a direct match, your journey could involve **${displayPaths.join(", ")}**, or **${lastPathway}**.`;
      }
  }

  return phrase;
};

// **UPDATED** Function to generate the recommended next step link dynamically
export const generateNextStepLink = (mbtiTypeData, preferredPathway) => {
  const pathways = new Set();
  mbtiTypeData.careers.forEach((career) => {
    if (career.postSchoolPath) {
      pathways.add(career.postSchoolPath.toLowerCase());
    }
  });

  // Prioritize the user's preferred pathway for the link, if it's a valid path
  if (pathways.has(preferredPathway)) {
      if (preferredPathway === "college") return "/college-guide";
      if (preferredPathway === "community") return "/two-year";
      if (preferredPathway === "trade") return "/trade-school-guide";
      if (preferredPathway === "job") return "/direct-entry-careers";
  }

  // Fallback to the most common/highest-level pathway if the preferred path is not found
  if (pathways.has("college")) return "/college-guide";
  if (pathways.has("community")) return "/two-year";
  if (pathways.has("trade")) return "/trade-school-guide";
  if (pathways.has("job")) return "/direct-entry-careers";

  return "/education-paths"; // A general fallback link
};

export const MBTI_MAP = {
  INTJ: {
    vibe: "You're a strategic mastermind who loves solving complex problems with logic and innovation.",
    strengths: ["Strategic", "Analytical", "Independent"],
    careers: [
      {
        title: "Software Developer",
        pathway: "Technology",
        postSchoolPath: "college",
        description: "Ideal for your logical approach to creating and building systems."
      },
      {
        title: "Architect",
        pathway: "Art & Design",
        postSchoolPath: "college",
        description: "Perfect for designing complex structures with precision and vision."
      },
      {
        title: "Data Scientist",
        pathway: "Technology",
        postSchoolPath: "college",
        description: "Suits your analytical mind in uncovering insights from data."
      },
      {
        title: "IT Support Specialist",
        pathway: "Technology",
        postSchoolPath: "community",
        description: "Applies problem-solving skills to technical issues, often through structured training."
      },
      {
        title: "Technical Writer",
        pathway: "Communications",
        postSchoolPath: "job",
        description: "Translates complex technical information into clear, concise documentation."
      }
    ],
    relevantMajors: ["Computer Science", "Engineering", "Mathematics", "Architecture", "Information Technology"]
  },
  INTP: {
    vibe: "You're a curious and innovative thinker, always dissecting ideas and exploring new theories.",
    strengths: ["Logical", "Innovative", "Curious"],
    careers: [
      {
        title: "Academic Researcher",
        pathway: "Research & Academia",
        postSchoolPath: "college",
        description: "Fits your desire to delve deep into subjects and uncover new knowledge."
      },
      {
        title: "Engineer (R&D)",
        pathway: "Engineering",
        postSchoolPath: "college",
        description: "Great for applying logical principles to design and build solutions."
      },
      {
        title: "Philosopher/Theorist",
        pathway: "Research & Academia",
        postSchoolPath: "college",
        description: "Matches your love for exploring fundamental questions and concepts."
      },
      {
        title: "Lab Technician",
        pathway: "Science & Research",
        postSchoolPath: "community",
        description: "Conducts experiments and analyses, supporting scientific research."
      },
      {
        title: "Scientific Journalist",
        pathway: "Journalism & Media",
        postSchoolPath: "job",
        description: "Communicates complex scientific concepts to a general audience."
      }
    ],
    relevantMajors: ["Physics", "Philosophy", "Computer Science", "Engineering", "Chemistry", "Biology"]
  },
  ENTJ: {
    vibe: "You're a natural-born leader, decisive and efficient, who thrives on achieving ambitious goals.",
    strengths: ["Decisive", "Efficient", "Leadership-oriented"],
    careers: [
      {
        title: "Business Executive",
        pathway: "Business & Management",
        postSchoolPath: "college",
        description: "Ideal for steering organizations and implementing strategic visions."
      },
      {
        title: "Lawyer",
        pathway: "Legal",
        postSchoolPath: "college",
        description: "Suits your argumentative skill and ability to lead complex cases."
      },
      {
        title: "Management Consultant",
        pathway: "Consulting",
        postSchoolPath: "college",
        description: "Perfect for analyzing businesses and guiding them to success."
      },
      {
        title: "Construction Manager",
        pathway: "Construction & Trades",
        postSchoolPath: "trade",
        description: "Oversees building projects, ensuring efficiency and timely completion."
      },
      {
        title: "Sales Director",
        pathway: "Marketing & Sales",
        postSchoolPath: "job",
        description: "Leads sales teams and develops strategies to achieve revenue goals."
      }
    ],
    relevantMajors: ["Business Administration", "Law", "Economics", "Management", "Finance"]
  },
  ENTP: {
    vibe: "You're an energetic and inventive debater, always seeking new challenges and innovative solutions.",
    strengths: ["Energetic", "Inventive", "Quick-witted"],
    careers: [
      {
        title: "Entrepreneur",
        pathway: "Business & Management",
        postSchoolPath: "college",
        description: "Great for taking initiative and building new ventures from the ground up."
      },
      {
        title: "Marketing Strategist",
        pathway: "Marketing & Sales",
        postSchoolPath: "college",
        description: "Fits your creative mind in developing compelling campaigns."
      },
      {
        title: "Creative Director",
        pathway: "Art & Design",
        postSchoolPath: "college",
        description: "Ideal for leading artistic visions and inspiring creative teams."
      },
      {
        title: "Patent Agent",
        pathway: "Legal",
        postSchoolPath: "community",
        description: "Combines technical understanding with legal principles to draft patent applications."
      },
      {
        title: "Innovations Consultant",
        pathway: "Consulting",
        postSchoolPath: "job",
        description: "Helps businesses develop and implement new ideas and technologies."
      }
    ],
    relevantMajors: ["Business", "Marketing", "Communications", "Design", "Innovation", "Engineering"]
  },
  INFJ: {
    vibe: "You're an insightful and compassionate advocate, driven by your values to make a meaningful difference.",
    strengths: ["Insightful", "Compassionate", "Value-driven"],
    careers: [
      {
        title: "Psychologist",
        pathway: "Healthcare",
        postSchoolPath: "college",
        description: "Suits your deep understanding of human behavior and desire to help."
      },
      {
        title: "Nonprofit Director",
        pathway: "Community & Social Services",
        postSchoolPath: "college",
        description: "Perfect for leading initiatives that align with your strong values."
      },
      {
        title: "Writer/Editor",
        pathway: "Art & Design",
        postSchoolPath: "college",
        description: "Ideal for expressing complex ideas and emotions through storytelling."
      },
      {
        title: "Social Worker Assistant",
        pathway: "Community & Social Services",
        postSchoolPath: "community",
        description: "Provides direct support to individuals and families, helping them access resources."
      },
      {
        title: "Community Organizer",
        pathway: "Community & Social Services",
        postSchoolPath: "job",
        description: "Mobilizes communities to advocate for social change and address local issues."
      }
    ],
    relevantMajors: ["Psychology", "Social Work", "English", "Sociology", "Counseling"]
  },
  INFP: {
    vibe: "You're a creative and idealistic dreamer, driven by your personal values and a desire for harmony.",
    strengths: ["Creative", "Compassionate", "Idealistic"],
    careers: [
      {
        title: "Author/Novelist",
        pathway: "Art & Design",
        postSchoolPath: "college",
        description: "Fits your imaginative spirit in crafting compelling narratives and worlds."
      },
      {
        title: "Therapist/Counselor",
        pathway: "Healthcare",
        postSchoolPath: "college",
        description: "Great for connecting deeply with others and guiding them to well-being."
      },
      {
        title: "Art Director",
        pathway: "Art & Design",
        postSchoolPath: "college",
        description: "Perfect for bringing artistic visions to life and inspiring creative teams."
      },
      {
        title: "Librarian Assistant",
        pathway: "Education & Training",
        postSchoolPath: "community",
        description: "Supports library operations, helping patrons and organizing resources."
      },
      {
        title: "Freelance Artist",
        pathway: "Art & Design",
        postSchoolPath: "job",
        description: "Creates visual art for clients across various mediums, expressing unique vision."
      }
    ],
    relevantMajors: ["Creative Writing", "Fine Arts", "Psychology", "Counseling", "Liberal Arts"]
  },
  ENFJ: {
    vibe: "You're a charismatic and empathetic leader, inspiring others and building strong, positive connections.",
    strengths: ["Charismatic", "Empathetic", "Inspiring"],
    careers: [
      {
        title: "Teacher (K-12)",
        pathway: "Education & Training",
        postSchoolPath: "college",
        description: "Ideal for guiding and motivating students with your natural warmth."
      },
      {
        title: "Public Relations Specialist",
        pathway: "Marketing & Sales",
        postSchoolPath: "college",
        description: "Suits your ability to connect with people and manage public image."
      },
      {
        title: "HR Manager",
        pathway: "Business & Management",
        postSchoolPath: "college",
        description: "Perfect for fostering a positive work environment and supporting employees."
      },
      {
        title: "Youth Program Coordinator",
        pathway: "Community & Social Services",
        postSchoolPath: "community",
        description: "Organizes and leads activities that foster positive development in young people."
      },
      {
        title: "Flight Attendant",
        pathway: "Travel & Hospitality",
        postSchoolPath: "job",
        description: "Ensures passenger safety and comfort, excelling in service and communication."
      }
    ],
    relevantMajors: ["Education", "Communications", "Human Resources", "Marketing", "Social Sciences"]
  },
  ENFP: {
    vibe: "You're an imaginative and energetic enthusiast, always seeking new possibilities and exciting experiences.",
    strengths: ["Imaginative", "Energetic", "Empathetic"],
    careers: [
      {
        title: "Actor/Performer",
        pathway: "Art & Design",
        postSchoolPath: "job",
        description: "Great for your expressive nature and ability to entertain audiences."
      },
      {
        title: "Journalist/Reporter",
        pathway: "Journalism & Media",
        postSchoolPath: "college",
        description: "Fits your curiosity and ability to tell compelling stories."
      },
      {
        title: "Social Entrepreneur",
        pathway: "Community & Social Services",
        postSchoolPath: "college",
        description: "Ideal for combining your innovative ideas with a passion for social impact."
      },
      {
        title: "Event Coordinator",
        pathway: "Hospitality & Events",
        postSchoolPath: "community",
        description: "Organizes and manages events, bringing creative concepts to life."
      },
      {
        title: "Tour Guide",
        pathway: "Travel & Hospitality",
        postSchoolPath: "job",
        description: "Shares knowledge and enthusiasm about places of interest with groups."
      }
    ],
    relevantMajors: ["Drama", "Journalism", "Communications", "Business", "Marketing"]
  },
  ISTJ: {
    vibe: "You're a responsible and detail-oriented organizer, valuing structure and dependable execution.",
    strengths: ["Responsible", "Detail-Oriented", "Practical"],
    careers: [
      {
        title: "Accountant",
        pathway: "Business & Finance",
        postSchoolPath: "college",
        description: "Perfect for your precision and focus on maintaining order in finances."
      },
      {
        title: "Police Officer",
        pathway: "Public Service",
        postSchoolPath: "trade",
        description: "Suits your strong sense of duty and commitment to upholding rules."
      },
      {
        title: "Civil Engineer",
        pathway: "Engineering",
        postSchoolPath: "college",
        description: "Ideal for designing and overseeing essential infrastructure projects."
      },
      {
        title: "Paralegal",
        pathway: "Legal",
        postSchoolPath: "community",
        description: "Assists lawyers with legal research, documentation, and case preparation."
      },
      {
        title: "Bookkeeper",
        pathway: "Business & Finance",
        postSchoolPath: "job",
        description: "Maintains financial records, ensuring accuracy and compliance."
      }
    ],
    relevantMajors: ["Accounting", "Criminal Justice", "Engineering", "Business Administration", "Paralegal Studies"]
  },
  ISFJ: {
    vibe: "You're a nurturing and reliable supporter, always ready to care for others and maintain harmony.",
    strengths: ["Nurturing", "Reliable", "Supportive"],
    careers: [
      {
        title: "Registered Nurse (RN)",
        pathway: "Healthcare",
        postSchoolPath: "college",
        description: "Great for providing direct care and support to those in need."
      },
      {
        title: "Librarian",
        pathway: "Education & Training",
        postSchoolPath: "college",
        description: "Fits your organized nature and desire to provide accessible information."
      },
      {
        title: "Elementary School Teacher",
        pathway: "Education & Training",
        postSchoolPath: "college",
        description: "Perfect for patiently guiding young learners and creating a supportive environment."
      },
      {
        title: "Dental Assistant",
        pathway: "Healthcare",
        postSchoolPath: "trade",
        description: "Assists dentists during procedures, prepares patients, and manages records."
      },
      {
        title: "Child Care Worker",
        pathway: "Community & Social Services",
        postSchoolPath: "job",
        description: "Provides care and supervision to children in various settings."
      }
    ],
    relevantMajors: ["Nursing", "Library Science", "Education", "Social Work", "Early Childhood Education"]
  },
  ESTJ: {
    vibe: "You're an organized and practical leader, focused on efficiency and getting things done effectively.",
    strengths: ["Organized", "Practical", "Leadership-oriented"],
    careers: [
      {
        title: "Operations Manager",
        pathway: "Business & Management",
        postSchoolPath: "college",
        description: "Ideal for overseeing processes and ensuring smooth execution."
      },
      {
        title: "School Principal",
        pathway: "Education & Training",
        postSchoolPath: "college",
        description: "Suits your leadership skills in guiding educational institutions."
      },
      {
        title: "Project Manager",
        pathway: "Business & Management",
        postSchoolPath: "college",
        description: "Perfect for planning, executing, and closing projects efficiently."
      },
      {
        title: "Electrical Lineman",
        pathway: "Trades & Technical",
        postSchoolPath: "trade",
        description: "Installs and repairs electrical power lines, ensuring reliable power supply."
      },
      {
        title: "Office Manager",
        pathway: "Business & Management",
        postSchoolPath: "job",
        description: "Oversees daily office operations, maintaining efficiency and order."
      }
    ],
    relevantMajors: ["Business Administration", "Education Leadership", "Management", "Construction Management"]
  },
  ESFJ: {
    vibe: "You're a social and caring individual, excelling at connecting with people and organizing community efforts.",
    strengths: ["Social", "Caring", "Organized"],
    careers: [
      {
        title: "Event Planner",
        pathway: "Hospitality & Events",
        postSchoolPath: "college",
        description: "Great for organizing memorable experiences and delighting guests."
      },
      {
        title: "Nurse Educator",
        pathway: "Education & Training",
        postSchoolPath: "college",
        description: "Fits your nurturing side in teaching and guiding future healthcare professionals."
      },
      {
        title: "Customer Success Manager",
        pathway: "Business & Management",
        postSchoolPath: "college",
        description: "Ideal for building strong relationships and ensuring client satisfaction."
      },
      {
        title: "Medical Assistant",
        pathway: "Healthcare",
        postSchoolPath: "community",
        description: "Performs administrative and clinical tasks in healthcare settings, assisting patients."
      },
      {
        title: "Retail Manager",
        pathway: "Business & Management",
        postSchoolPath: "job",
        description: "Oversees daily operations of a retail store, focusing on customer service and sales."
      }
    ],
    relevantMajors: ["Hospitality Management", "Nursing", "Business", "Communications", "Marketing"]
  },
  ISTP: {
    vibe: "You're a tactical and observant problem-solver, excelling at hands-on tasks and figuring out how things work.",
    strengths: ["Tactical", "Observant", "Efficient"],
    careers: [
      {
        title: "Automotive Mechanic",
        pathway: "Trades & Technical",
        postSchoolPath: "trade",
        description: "Perfect for your practical skills in diagnosing and fixing mechanical issues."
      },
      {
        title: "Pilot (Commercial)",
        pathway: "Transportation",
        postSchoolPath: "college",
        description: "Suits your calm under pressure and precision in operating complex machinery."
      },
      {
        title: "HVAC Technician",
        pathway: "Trades & Technical",
        postSchoolPath: "trade",
        description: "Installs, maintains, and repairs heating, ventilation, air conditioning, and refrigeration systems."
      },
      {
        title: "Computer Repair Technician",
        pathway: "Technology",
        postSchoolPath: "community",
        description: "Diagnoses and repairs computer hardware and software issues."
      },
      {
        title: "Machinist",
        pathway: "Manufacturing & Trades",
        postSchoolPath: "job",
        description: "Operates machine tools to produce precision metal parts."
      }
    ],
    relevantMajors: ["Automotive Technology", "Aviation", "Electronics", "Vocational Training", "Engineering Technology"]
  },
  ISFP: {
    vibe: "You're an artistic and sensitive free spirit, expressing yourself creatively and enjoying the present moment.",
    strengths: ["Artistic", "Sensitive", "Easygoing"],
    careers: [
      {
        title: "Graphic Designer",
        pathway: "Art & Design",
        postSchoolPath: "college",
        description: "Great for blending your artistic eye with practical digital skills."
      },
      {
        title: "Veterinary Technician",
        pathway: "Healthcare",
        postSchoolPath: "community",
        description: "Fits your compassionate nature in caring for animals."
      },
      {
        title: "Florist",
        pathway: "Art & Design",
        postSchoolPath: "job",
        description: "Perfect for your artistic touch in creating beautiful arrangements."
      },
      {
        title: "Ceramic Artist",
        pathway: "Art & Design",
        postSchoolPath: "trade",
        description: "Creates pottery, sculpture, and other art forms from clay."
      },
      {
        title: "Photographer",
        pathway: "Art & Design",
        postSchoolPath: "job",
        description: "Captures images for artistic, commercial, or journalistic purposes."
      }
    ],
    relevantMajors: ["Graphic Design", "Fine Arts", "Veterinary Technology", "Photography", "Horticulture"]
  },
  ESTP: {
    vibe: "You're an energetic and practical adventurer, thriving in dynamic environments and hands-on situations.",
    strengths: ["Energetic", "Practical", "Adventurous"],
    careers: [
      {
        title: "Sales Representative",
        pathway: "Marketing & Sales",
        postSchoolPath: "job",
        description: "Ideal for your persuasive communication and quick thinking on the go."
      },
      {
        title: "Paramedic",
        pathway: "Healthcare",
        postSchoolPath: "trade",
        description: "Suits your ability to act swiftly and decisively in emergency situations."
      },
      {
        title: "Construction Supervisor",
        pathway: "Construction & Trades",
        postSchoolPath: "trade",
        description: "Perfect for leading teams and managing hands-on building projects."
      },
      {
        title: "Firefighter",
        pathway: "Public Service",
        postSchoolPath: "job",
        description: "Responds to emergencies, fights fires, and provides emergency medical services."
      },
      {
        title: "Recreation & Fitness Instructor",
        pathway: "Sports & Fitness",
        postSchoolPath: "community",
        description: "Leads groups in physical activities and promotes healthy lifestyles."
      }
    ],
    relevantMajors: ["Business", "Emergency Medical Services", "Construction Management", "Fire Science", "Kinesiology"]
  },
  ESFP: {
    vibe: "You're a fun-loving and warm performer, bringing joy and energy to every situation.",
    strengths: ["Fun-Loving", "Energetic", "Warm"],
    careers: [
      {
        title: "Performer/Entertainer",
        pathway: "Art & Design",
        postSchoolPath: "job",
        description: "Great for your expressive nature and ability to entertain audiences."
      },
      {
        title: "Recreation Coordinator",
        pathway: "Community & Social Services",
        postSchoolPath: "college",
        description: "Fits your enthusiasm for organizing fun activities and events."
      },
      {
        title: "Hospitality Manager",
        pathway: "Hospitality & Events",
        postSchoolPath: "job",
        description: "Ideal for creating welcoming experiences and leading service teams."
      },
      {
        title: "Travel Agent",
        pathway: "Travel & Hospitality",
        postSchoolPath: "community",
        description: "Helps clients plan and book travel arrangements."
      },
      {
        title: "Hairdresser/Cosmetologist",
        pathway: "Personal Care Services",
        postSchoolPath: "trade",
        description: "Uses creative skills to style hair, apply makeup, and provide beauty services."
      }
    ],
    relevantMajors: ["Theater", "Recreation Management", "Hospitality Management", "Cosmetology", "Tourism"]
  }
};
