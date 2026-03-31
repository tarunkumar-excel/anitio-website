// Course Types
export interface Course {
  id: string;
  slug: string;
  title: string;
  category: CourseCategory;
  type: CourseType;
  duration: string;
  fees: number;
  originalFees?: number;
  mode: 'online' | 'offline' | 'hybrid';
  level: 'beginner' | 'intermediate' | 'advanced';
  certification: string;
  university?: string;
  description: string;
  shortDesc: string;
  modules: Module[];
  syllabus: SyllabusSection[];
  instructor: Instructor;
  rating: number;
  students: number;
  thumbnail: string;
  badge?: string;
  featured?: boolean;
  startDate?: string;
}

export type CourseCategory =
  | 'university'
  | 'institute'
  | 'vocational'
  | 'diploma'
  | 'degree'
  | 'certification'
  | 'short-term';

export type CourseType =
  | 'BCA' | 'MCA' | 'BSc-IT' | 'MSc-IT' | 'BBA' | 'MBA'
  | 'DCA' | 'PGDCA' | 'ADCA' | 'CCC' | 'Tally' | 'AutoCAD'
  | 'Python' | 'Web Development' | 'Data Science' | 'AI-ML'
  | 'Hardware' | 'Networking' | 'Graphic Design' | 'Video Editing'
  | 'MS Office' | 'Typing' | 'Other';

export interface Module {
  title: string;
  duration: string;
  topics: string[];
}

export interface SyllabusSection {
  unit: string;
  title: string;
  topics: string[];
}

export interface Instructor {
  name: string;
  designation: string;
  experience: string;
  photo: string;
}

// Admission Types
export interface AdmissionForm {
  // Personal Info
  firstName: string;
  lastName: string;
  dob: string;
  gender: string;
  category: string;
  nationality: string;
  // Contact
  email: string;
  phone: string;
  alternatePhone?: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  // Education
  lastQualification: string;
  percentage: string;
  passingYear: string;
  board: string;
  // Course
  courseId: string;
  mode: string;
  preferredBatch: string;
  // Documents
  photo?: File;
  signature?: File;
  certificate?: File;
  idProof?: File;
}

// Exam Types
export interface ExamSchedule {
  id: string;
  examName: string;
  courseId: string;
  date: string;
  time: string;
  duration: string;
  center: string;
  mode: 'online' | 'offline';
  type: 'internal' | 'external' | 'university';
  maxMarks: number;
  passingMarks: number;
}

export interface Result {
  enrollmentNo: string;
  studentName: string;
  courseName: string;
  examName: string;
  semester?: string;
  subjects: SubjectResult[];
  totalMarks: number;
  obtainedMarks: number;
  percentage: string;
  grade: string;
  status: 'pass' | 'fail' | 'absent';
  datePublished: string;
}

export interface SubjectResult {
  subjectCode: string;
  subjectName: string;
  maxMarks: number;
  obtainedMarks: number;
  grade: string;
}

// Franchise Types
export interface FranchiseData {
  id: string;
  centerName: string;
  ownerName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  address: string;
  code: string;
  type: 'master' | 'sub' | 'associate';
  status: 'active' | 'pending' | 'suspended';
  joinDate: string;
  studentsCount: number;
  revenue: number;
}

// Payment Types
export interface Payment {
  id: string;
  enrollmentNo: string;
  studentName: string;
  amount: number;
  type: 'admission' | 'tuition' | 'exam' | 'certificate';
  status: 'pending' | 'success' | 'failed';
  method: 'upi' | 'netbanking' | 'card' | 'cash';
  transactionId?: string;
  date: string;
}

// Schedule Types
export interface ClassSchedule {
  id: string;
  courseId: string;
  courseName: string;
  instructor: string;
  day: string;
  startTime: string;
  endTime: string;
  mode: 'online' | 'offline';
  meetLink?: string;
  room?: string;
  batch: string;
}

// Notice / Update Types
export interface Notice {
  id: string;
  title: string;
  content: string;
  category: 'admission' | 'exam' | 'result' | 'event' | 'general';
  date: string;
  important: boolean;
  attachment?: string;
}
