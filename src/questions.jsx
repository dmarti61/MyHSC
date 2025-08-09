// questions.js
const questions = [
  // E vs I
  {
    id: 'q1',
    dimension: 'EI',
    text: 'At a big school event, you...',
    options: [
      { label: 'Mingle with lots of people—you’re energized!', value: 'E' },
      { label: 'Stick with a few close friends and keep it chill.', value: 'I' }
    ]
  },
  {
    id: 'q2',
    dimension: 'EI',
    text: 'Your weekends are best spent...',
    options: [
      { label: 'Out with a bunch of people doing something fun.', value: 'E' },
      { label: 'At home, recharging with solo activities.', value: 'I' }
    ]
  },
  {
    id: 'q3',
    dimension: 'EI',
    text: 'People usually say you...',
    options: [
      { label: 'Are loud, open, and outgoing.', value: 'E' },
      { label: 'Are calm, reflective, or shy.', value: 'I' }
    ]
  },
  {
    id: 'q4',
    dimension: 'EI',
    text: 'In a new group project, you...',
    options: [
      { label: 'Jump in to lead or speak up.', value: 'E' },
      { label: 'Observe and contribute quietly.', value: 'I' }
    ]
  },
  {
    id: 'q5',
    dimension: 'EI',
    text: 'You recharge your energy by...',
    options: [
      { label: 'Hanging out with others.', value: 'E' },
      { label: 'Spending time alone.', value: 'I' }
    ]
  },

  // S vs N
  {
    id: 'q6',
    dimension: 'SN',
    text: 'When learning something new, you...',
    options: [
      { label: 'Prefer step-by-step instructions and facts.', value: 'S' },
      { label: 'Go with your gut and think of big-picture ideas.', value: 'N' }
    ]
  },
  {
    id: 'q7',
    dimension: 'SN',
    text: 'Which excites you more?',
    options: [
      { label: 'Stuff that’s proven, practical, and real.', value: 'S' },
      { label: 'Theories, possibilities, and what-ifs.', value: 'N' }
    ]
  },
  {
    id: 'q8',
    dimension: 'SN',
    text: 'In group work, you’re the one who...',
    options: [
      { label: 'Focuses on the details and checks things twice.', value: 'S' },
      { label: 'Dreams up creative angles and connects ideas.', value: 'N' }
    ]
  },
  {
    id: 'q9',
    dimension: 'SN',
    text: 'When something goes wrong, you...',
    options: [
      { label: 'Look for what actually happened.', value: 'S' },
      { label: 'Try to understand the meaning behind it.', value: 'N' }
    ]
  },
  {
    id: 'q10',
    dimension: 'SN',
    text: 'Your friends say your thinking is more...',
    options: [
      { label: 'Logical, practical, down to earth.', value: 'S' },
      { label: 'Imaginative, abstract, “out there.”', value: 'N' }
    ]
  },

  // T vs F
  {
    id: 'q11',
    dimension: 'TF',
    text: 'When making tough choices, you tend to...',
    options: [
      { label: 'Analyze pros and cons logically.', value: 'T' },
      { label: 'Go with what feels right emotionally.', value: 'F' }
    ]
  },
  {
    id: 'q12',
    dimension: 'TF',
    text: 'In an argument, you’re more concerned with...',
    options: [
      { label: 'Who’s factually right.', value: 'T' },
      { label: 'People’s feelings and relationships.', value: 'F' }
    ]
  },
  {
    id: 'q13',
    dimension: 'TF',
    text: 'Others describe you as...',
    options: [
      { label: 'Logical and objective.', value: 'T' },
      { label: 'Empathetic and caring.', value: 'F' }
    ]
  },
  {
    id: 'q14',
    dimension: 'TF',
    text: 'In debates, you enjoy...',
    options: [
      { label: 'Winning with solid arguments.', value: 'T' },
      { label: 'Finding common ground and fairness.', value: 'F' }
    ]
  },
  {
    id: 'q15',
    dimension: 'TF',
    text: 'You’re more comfortable with decisions that are...',
    options: [
      { label: 'Logical and fair.', value: 'T' },
      { label: 'Kind and caring.', value: 'F' }
    ]
  },

  // J vs P
  {
    id: 'q16',
    dimension: 'JP',
    text: 'Which describes your style more?',
    options: [
      { label: 'Planner—organized and scheduled.', value: 'J' },
      { label: 'Explorer—flexible and spontaneous.', value: 'P' }
    ]
  },
  {
    id: 'q17',
    dimension: 'JP',
    text: 'At school, you...',
    options: [
      { label: 'Like checking off to-do lists early.', value: 'J' },
      { label: 'Finish stuff at the last minute—under pressure is best.', value: 'P' }
    ]
  },
  {
    id: 'q18',
    dimension: 'JP',
    text: 'How do you feel about rules?',
    options: [
      { label: 'They create structure—let’s stick to them.', value: 'J' },
      { label: 'They’re fine… but sometimes they’re made to be bent.', value: 'P' }
    ]
  },
  {
    id: 'q19',
    dimension: 'JP',
    text: 'When plans change last second...',
    options: [
      { label: 'That’s frustrating—why didn’t we plan?', value: 'J' },
      { label: 'Cool, let’s roll with it.', value: 'P' }
    ]
  },
  {
    id: 'q20',
    dimension: 'JP',
    text: 'You prefer assignments that are...',
    options: [
      { label: 'Structured with clear rubrics.', value: 'J' },
      { label: 'Open-ended with lots of creative freedom.', value: 'P' }
    ]
  }
];

export default questions;
