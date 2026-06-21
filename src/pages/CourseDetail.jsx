import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, CalendarClock, MapPin, UserRound, UsersRound } from 'lucide-react';
import Navbar from '../components/Navbar.jsx';
import { sampleCourses } from '../interfaces/CourseModel.js';
import { getCoursesFromStorage } from '../utils/localStorage.js';
import { formatDate } from '../utils/formatDate.js';

function CourseDetail() {
  const { id } = useParams();
  const courses = getCoursesFromStorage(sampleCourses);
  const course = courses.find((item) => String(item.id) === String(id));

  if (!course) {
    return (
      <main className="page">
        <Navbar />
        <div className="emptyState">
          Ders bulunamadı. <Link to="/">Ana sayfaya dön</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="page">
      <Navbar />

      <section className="detailHero">
        <Link className="backButton" to="/"><ArrowLeft size={20} /> Geri</Link>
        <span className="detailCode">{course.code}</span>
        <h1>{course.title}</h1>
        <p><UsersRound size={18} /> {course.capacity} üye bilgisi</p>
      </section>

      <section className="detailCard">
        <h2>Ders Detayları</h2>
        <div className="detailRows">
          <div>
            <CalendarClock size={22} />
            <span>Ne Zaman</span>
            <strong>{formatDate(course.date)}</strong>
          </div>
          <div>
            <MapPin size={22} />
            <span>Nerede</span>
            <strong>{course.location}</strong>
          </div>
          <div>
            <UserRound size={22} />
            <span>Eğitmen</span>
            <strong>{course.instructor}</strong>
          </div>
        </div>
      </section>

      <section className="aboutCard">
        <h2>Ders Hakkında</h2>
        <p>{course.description}</p>
      </section>
    </main>
  );
}

export default CourseDetail;
