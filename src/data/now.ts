export interface NowData {
  lastUpdated: string;
  location: string;
  school: string;
  studying: string[];
  aiming: string[];
  building: string[];
  fitnessAndSports: string[];
  delegations: string[];
}

export const NOW_DATA: NowData = {
  lastUpdated: 'August 2026',
  location: 'Ludhiana, Punjab, India',
  school: 'B.C.M. Arya Model Sr. Sec. School, Ludhiana',
  studying: [
    'Class 11 Commerce at B.C.M. Arya Model Sr. Sec. School: Accountancy, Economics & Business Studies (Class 10th: 96.2%)',
    'Financial markets fundamentals, trading mechanics, and capital allocation learned during Ludhiana Stock and Capital Limited internship',
    'Real-world business management and operational workflows through New Era Electronics'
  ],
  aiming: [
    'Scaling BookMyEmergency into an indispensable, rapid-response public welfare platform',
    'Excelling in Class 11 & 12 Commerce with top academic honors at B.C.M. Arya Model Sr. Sec. School',
    'Expanding commercial operations and financial controls at New Era Electronics',
    'Deepening equity research and institutional market knowledge'
  ],
  building: [
    'BookMyEmergency: Civic tech & social welfare platform for rapid emergency response',
    'New Era Electronics: Managing operations, inventory flow, and customer relationships',
    'Youth Capital Foundation: Empowering underprivileged students and making everyone financially aware'
  ],
  fitnessAndSports: [
    '🏏 Playing Cricket: Passionate all-rounder on the pitch on weekends',
    '🏋️‍♂️ Gym & Strength Training: 5 days/week progressive overload discipline',
    '⚡ High physical endurance, mental grit, and athletic stamina'
  ],
  delegations: [
    'Visited premier campuses: IIT Ropar, IIT Delhi, IIT Mandi, IIIT Delhi',
    'Stayed 1 day in student hostels at each campus to experience collegiate atmosphere firsthand',
    'Interacted with resident students and observed university campus culture'
  ]
};
