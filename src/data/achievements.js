/**
 * achievements.js
 * Verified achievements — competitive programming, hackathons, leadership.
 * No invented metrics.
 */

export const competitiveProgramming = {
  leetcode: {
    problemsSolved: 196,
    breakdown: { easy: 122, medium: 60, hard: 14 },
    rating: 1460,
    contests: 3,
    maxStreak: 53,
    url: 'https://leetcode.com/u/amogh__kashyap'
  },
  codeforces: {
    problemsSolved: 125,
    url: 'https://codeforces.com/profile/amogh17'
  },
  codechef: {
    status: 'Active Practice',
    url: 'https://www.codechef.com/users/amogh_17'
  }
};

export const competitions = [
  {
    id: 'niat-cp',
    title: 'NIAT CP Contest 1 & 2',
    bullets: [
      'Cleared both contests',
      'Invited to final round in Hyderabad',
      'Selected for NIAT Intensive Competitive Programming Training'
    ]
  },
  {
    id: 'sih-2025',
    title: 'Internal Smart India Hackathon 2025',
    bullets: [
      'Shortlisted'
    ]
  }
];

export const leadership = [
  {
    id: 'phoenix',
    role: 'Captain / Head',
    organization: 'Phoenix Team',
    context: 'VGU National Level Project Exhibition 2025'
  },
  {
    id: 'sports',
    role: 'PR Head',
    organization: 'Sports Club',
    context: null
  },
  {
    id: 'genai',
    role: 'Member',
    organization: 'Gen AI Club',
    context: null
  },
  {
    id: 'advtech',
    role: 'Member',
    organization: 'Advanced Tech Club',
    context: null
  }
];
