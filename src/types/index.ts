export interface Project {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  category: 'Financial Modeling' | 'Startups & Ventures' | 'Equity Research' | 'FinTech Tools' | 'Social Welfare' | 'Business Operations' | 'Community Literacy';
  featured: boolean;
  size: 'large' | 'medium' | 'wide';
  description: string;
  longDescription?: string;
  role: string;
  timeline: string;
  metrics: {
    label: string;
    value: string;
  }[];
  tags: string[];
  skillsApplied: string[];
  demoUrl?: string;
  githubUrl?: string;
  previewType: 'dcf-valuation' | 'compound-growth' | 'unit-economics' | 'equity-matrix' | 'emergency-dispatch' | 'guldasta-network';
  highlights: string[];
  breakdown: {
    title: string;
    description: string;
  }[];
}

export interface LabItem {
  id: string;
  title: string;
  description: string;
  category: 'Valuation Models' | 'Accounting & Ratios' | 'Startup Math' | 'Macro & Markets' | 'CFA Prep';
  tags: string[];
  version: string;
  status: 'Completed' | 'In Progress' | 'Research';
  downloads?: number;
  githubUrl: string;
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  category: 'Education' | 'Professional Training' | 'Startup & Ventures' | 'Competitions & Leadership' | 'Business Management' | 'Social Impact' | 'Academic Delegations';
  summary: string;
  achievements: string[];
  skills: string[];
  metrics?: { label: string; value: string };
}

export interface SIPCalculatorState {
  monthlyInvestment: number; // e.g. 5000 INR
  expectedReturnRate: number; // e.g. 12% to 18%
  timePeriodYears: number; // e.g. 5 to 25 years
}
