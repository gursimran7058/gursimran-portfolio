export interface Article {
  id: string;
  title: string;
  slug: string;
  date: string;
  readTime: string;
  tag: string;
  tagColor: 'green' | 'purple' | 'yellow' | 'blue';
  summary: string;
  keyPoints: string[];
}

export const FINANCIAL_ESSAYS: Article[] = [
  {
    id: 'essay-1',
    title: 'Why Starting an SIP at 18 Crushes Starting at 30: The Exponential Math',
    slug: 'sip-compounding-at-18',
    date: 'August 2024',
    readTime: '3 min read',
    tag: 'Compounding',
    tagColor: 'green',
    summary: 'A mathematical deconstruction showing how investing ₹5,000/month from age 18 to 28 produces more wealth than investing ₹15,000/month from age 30 to 50 due to time horizon compounding.',
    keyPoints: [
      'Time in the market beats timing the market exponentially.',
      'The initial 10-year compounding headstart acts as an irreversible flywheel.',
      'Rule of 72: At 12% CAGR, money doubles every 6 years.'
    ]
  },
  {
    id: 'essay-2',
    title: 'Deconstructing High-ROCE Compounders with 5-Stage DuPont Analysis',
    slug: 'dupont-analysis-guide',
    date: 'July 2024',
    readTime: '4 min read',
    tag: 'Equity Analysis',
    tagColor: 'purple',
    summary: 'How to separate genuine operational excellence from dangerous financial leverage by breaking Return on Equity into Operating Margin, Asset Turnover, Tax Burden, and Financial Leverage.',
    keyPoints: [
      'High ROE driven solely by leverage carries solvency risk in down-cycles.',
      'True wealth creators compound via high Asset Turnover and Pricing Power.',
      'Case study comparisons of Indian consumer and IT blue chips.'
    ]
  },
  {
    id: 'essay-3',
    title: 'DCF vs P/E Multiples: Why Free Cash Flow is the Ultimate Truth',
    slug: 'dcf-vs-pe-multiples',
    date: 'June 2024',
    readTime: '5 min read',
    tag: 'CFA Valuation',
    tagColor: 'blue',
    summary: 'Why headline accounting earnings can be easily manipulated through accruals and depreciation, while Free Cash Flow to Firm (FCFF) represents the true intrinsic cash generated for shareholders.',
    keyPoints: [
      'Accounting profit is an opinion, cash flow is a hard fact.',
      'WACC sensitivity analysis prevents overpaying for high-growth narratives.',
      'Terminal growth assumptions must strictly respect long-term GDP constraints.'
    ]
  },
  {
    id: 'essay-4',
    title: 'Discipline on the Pitch & Gym: What Cricket & Fitness Taught Me About Investing',
    slug: 'cricket-gym-investing-mindset',
    date: 'May 2024',
    readTime: '3 min read',
    tag: 'Personal Mindset',
    tagColor: 'yellow',
    summary: 'How batting through swing bowling in cricket and progressive overload in the gym mirror the patience and emotional control required during stock market drawdowns.',
    keyPoints: [
      'You cannot hit every ball for a six; patience in shot selection is like waiting for fat-pitch stock valuations.',
      'Consistent daily workout sets equal disciplined monthly SIPs.',
      'Emotional composure under pressure separates long-term winners from gamblers.'
    ]
  }
];
