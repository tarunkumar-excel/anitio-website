import type { Metadata } from 'next';
import { Calendar, Clock, Wifi, MapPin, User, Video, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Class Schedule | ANITIO',
  description: 'View online and offline class schedules for all ANITIO courses. Join live sessions and track your batch timings.',
};

const schedules = [
  { id: 1, course: 'BCA Semester III', instructor: 'Prof. Rajesh Kumar', day: 'Monday', time: '10:00 AM – 12:00 PM', mode: 'offline', room: 'Lab A-101', batch: 'July 2023', subject: 'Data Structures' },
  { id: 2, course: 'BCA Semester III', instructor: 'Prof. Rajesh Kumar', day: 'Wednesday', time: '10:00 AM – 12:00 PM', mode: 'offline', room: 'Lab A-101', batch: 'July 2023', subject: 'Web Technologies' },
  { id: 3, course: 'PGDCA Sem II', instructor: 'Mr. Vikash Singh', day: 'Monday', time: '2:00 PM – 4:00 PM', mode: 'hybrid', room: 'Class B-201', meetLink: 'https://meet.google.com/abc-defg-hij', batch: 'Jan 2024', subject: 'Advanced Java' },
  { id: 4, course: 'Python Programming', instructor: 'Mr. Amit Joshi', day: 'Tuesday', time: '11:00 AM – 1:00 PM', mode: 'online', meetLink: 'https://meet.google.com/xyz-abcd-efg', batch: 'April 2024', subject: 'OOP Concepts' },
  { id: 5, course: 'Python Programming', instructor: 'Mr. Amit Joshi', day: 'Thursday', time: '11:00 AM – 1:00 PM', mode: 'online', meetLink: 'https://meet.google.com/xyz-abcd-efg', batch: 'April 2024', subject: 'Web Scraping & APIs' },
  { id: 6, course: 'Full Stack Web Dev', instructor: 'Ms. Neha Kapoor', day: 'Monday', time: '5:00 PM – 7:00 PM', mode: 'online', meetLink: 'https://meet.google.com/pqr-stuv-wxy', batch: 'May 2024', subject: 'React Hooks' },
  { id: 7, course: 'Full Stack Web Dev', instructor: 'Ms. Neha Kapoor', day: 'Wednesday', time: '5:00 PM – 7:00 PM', mode: 'online', meetLink: 'https://meet.google.com/pqr-stuv-wxy', batch: 'May 2024', subject: 'Node.js & Express' },
  { id: 8, course: 'Full Stack Web Dev', instructor: 'Ms. Neha Kapoor', day: 'Friday', time: '5:00 PM – 7:00 PM', mode: 'online', meetLink: 'https://meet.google.com/pqr-stuv-wxy', batch: 'May 2024', subject: 'MongoDB & Projects' },
  { id: 9, course: 'Tally Prime + GST', instructor: 'Mr. Suresh Agarwal', day: 'Saturday', time: '9:00 AM – 11:00 AM', mode: 'offline', room: 'Accounts Lab', batch: 'May 2024', subject: 'GST Filing' },
  { id: 10, course: 'Data Science & ML', instructor: 'Dr. Kavita Rao', day: 'Tuesday', time: '3:00 PM – 5:00 PM', mode: 'online', meetLink: 'https://meet.google.com/lmn-opqr-stu', batch: 'April 2024', subject: 'Machine Learning Models' },
  { id: 11, course: 'Data Science & ML', instructor: 'Dr. Kavita Rao', day: 'Saturday', time: '11:00 AM – 1:00 PM', mode: 'online', meetLink: 'https://meet.google.com/lmn-opqr-stu', batch: 'April 2024', subject: 'Deep Learning Basics' },
  { id: 12, course: 'DCA', instructor: 'Ms. Priya Patel', day: 'Monday', time: '8:00 AM – 10:00 AM', mode: 'offline', room: 'Class C-101', batch: 'March 2024', subject: 'MS Office Practical' },
];

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function SchedulePage() {
  const grouped = days.reduce((acc, day) => {
    const daySchedules = schedules.filter(s => s.day === day);
    if (daySchedules.length > 0) acc[day] = daySchedules;
    return acc;
  }, {} as Record<string, typeof schedules>);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-14">
        <div className="container-custom">
          <div className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-2">Timetable</div>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-3">
            Class <span className="text-gold-400">Schedule</span>
          </h1>
          <p className="text-gray-300 text-sm max-w-2xl">
            Weekly schedule for all active batches. Online classes are conducted via Google Meet.
            Offline classes at the main campus. Hybrid = both options available.
          </p>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Legend */}
        <div className="flex flex-wrap items-center gap-6 mb-8 p-4 bg-white rounded-xl shadow-card">
          <span className="text-sm font-semibold text-gray-700">Legend:</span>
          {[
            { icon: Wifi, label: 'Online', color: 'text-green-600', bg: 'bg-green-100' },
            { icon: MapPin, label: 'Offline / In-Person', color: 'text-blue-600', bg: 'bg-blue-100' },
            { icon: Video, label: 'Hybrid (Both)', color: 'text-purple-600', bg: 'bg-purple-100' },
          ].map(({ icon: Icon, label, color, bg }) => (
            <div key={label} className="flex items-center gap-2 text-sm text-gray-600">
              <div className={`w-7 h-7 ${bg} rounded-lg flex items-center justify-center`}>
                <Icon size={14} className={color} />
              </div>
              {label}
            </div>
          ))}
        </div>

        {/* Timetable */}
        <div className="space-y-8">
          {Object.entries(grouped).map(([day, dayClasses]) => (
            <div key={day}>
              <h2 className="font-display font-bold text-xl text-primary-900 mb-4 flex items-center gap-2">
                <Calendar size={18} className="text-primary-600" />
                {day}
                <span className="text-xs font-normal text-gray-400 ml-1 font-body">({dayClasses.length} classes)</span>
              </h2>
              <div className="grid gap-3">
                {dayClasses.map((cls) => (
                  <div key={cls.id} className="card p-5 flex items-start gap-5 flex-wrap hover:shadow-card-lg transition-all">
                    {/* Time */}
                    <div className="flex-shrink-0 w-36">
                      <div className="flex items-center gap-1.5 text-sm font-bold text-primary-700">
                        <Clock size={13} className="text-primary-500" />
                        {cls.time}
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className={`badge text-[10px] ${
                          cls.mode === 'online' ? 'bg-green-100 text-green-700' :
                          cls.mode === 'offline' ? 'bg-blue-100 text-blue-700' :
                          'bg-purple-100 text-purple-700'
                        }`}>
                          {cls.mode === 'online' ? <Wifi size={9} /> : cls.mode === 'offline' ? <MapPin size={9} /> : <Video size={9} />}
                          {cls.mode}
                        </span>
                        <span className="badge badge-blue text-[10px]">Batch: {cls.batch}</span>
                      </div>
                      <div className="font-display font-bold text-gray-900">{cls.course}</div>
                      <div className="text-sm text-primary-600 font-medium">{cls.subject}</div>
                      <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                        <span className="flex items-center gap-1"><User size={11} /> {cls.instructor}</span>
                        {cls.room && <span className="flex items-center gap-1"><MapPin size={11} /> {cls.room}</span>}
                        {cls.meetLink && (
                          <a href={cls.meetLink} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-1 text-green-600 hover:text-green-800 font-semibold transition-colors">
                            <Video size={11} /> Join Meeting <ExternalLink size={10} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-10 bg-yellow-50 border border-yellow-200 rounded-2xl p-5 text-sm text-yellow-800">
          <strong>Note:</strong> Class schedules may be updated. Students will be notified via SMS/WhatsApp for any changes.
          For batch-specific schedules, please contact your class coordinator or check the student portal.
        </div>
      </div>
    </div>
  );
}
