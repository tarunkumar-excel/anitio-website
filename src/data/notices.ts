import { Notice } from '@/types';

export const notices: Notice[] = [
  {
    id: 'n001',
    title: 'Admissions Open for July 2024 Batch – BCA, MCA, PGDCA',
    content: 'Applications are now open for the July 2024 batch of BCA, MCA, and PGDCA programs. Limited seats available. Apply online before 30th June 2024.',
    category: 'admission',
    date: '2024-06-01',
    important: true,
  },
  {
    id: 'n002',
    title: 'Internal Examination Schedule – June 2024',
    content: 'Internal examinations for all ongoing batches will be held from June 20–28, 2024. Students must carry their admit cards. Late entries will not be permitted.',
    category: 'exam',
    date: '2024-06-05',
    important: true,
  },
  {
    id: 'n003',
    title: 'Result Declared – PGDCA Semester II (January 2024 Batch)',
    content: 'Results for PGDCA Semester II have been published. Students can view their results in the Results section using their enrollment number.',
    category: 'result',
    date: '2024-05-28',
    important: false,
  },
  {
    id: 'n004',
    title: 'Workshop on Artificial Intelligence & ChatGPT – June 15, 2024',
    content: 'ANITIO is organizing a free workshop on AI and ChatGPT for registered students. The workshop will be held at the main campus from 10 AM – 2 PM.',
    category: 'event',
    date: '2024-06-03',
    important: false,
  },
  {
    id: 'n005',
    title: 'Holiday Notice – Eid-ul-Adha (June 17, 2024)',
    content: 'Classes will remain suspended on June 17, 2024 on account of Eid-ul-Adha. Online classes will resume from June 18, 2024.',
    category: 'general',
    date: '2024-06-10',
    important: false,
  },
  {
    id: 'n006',
    title: 'New Franchise Opportunity – Apply Now for 2024-25',
    content: 'ANITIO is accepting franchise applications for new centers across all states. Attractive ROI, complete support, and marketing assistance provided. Contact our franchise team.',
    category: 'general',
    date: '2024-05-20',
    important: true,
  },
  {
    id: 'n007',
    title: 'Online Payment Gateway Updated – Now Accept UPI & Net Banking',
    content: 'We have upgraded our payment gateway. Students can now pay fees via UPI, Net Banking, Debit/Credit Card, and wallets. Instant payment confirmation via SMS.',
    category: 'general',
    date: '2024-05-15',
    important: false,
  },
  {
    id: 'n008',
    title: 'Scholarship Programme – Merit-Based Fee Concession Available',
    content: 'ANITIO offers merit-based scholarships for students with 80%+ in their qualifying examination. Apply through the admission form and upload your marksheet.',
    category: 'admission',
    date: '2024-06-01',
    important: true,
  },
];

export const getNoticesByCategory = (category: string) =>
  notices.filter(n => n.category === category);

export const getImportantNotices = () => notices.filter(n => n.important);
