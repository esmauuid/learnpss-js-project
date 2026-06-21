import { CalendarClock, MapPin, UsersRound, Pencil, Trash2, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatDate } from '../utils/formatDate.js';

function CourseCard({ course, onEdit, onDelete }) {
  return (
    <article className="courseCard">
      <div className="cardTop">
        <span className="courseCode">{course.code}</span>
        <span className="capacity"><UsersRound size={16} /> {course.capacity}</span>
      </div>

      <h3>{course.title}</h3>

      <div className="metaList">
        <p><CalendarClock size={18} /> {formatDate(course.date)}</p>
        <p><MapPin size={18} /> {course.location}</p>
      </div>

      <div className="cardActions">
        <Link className="detailButton" to={`/course/${course.id}`}>
          <Eye size={16} /> Detay
        </Link>
        <button className="editButton" onClick={() => onEdit(course)}>
          <Pencil size={16} /> Düzenle
        </button>
        <button className="deleteButton" onClick={() => onDelete(course.id)}>
          <Trash2 size={16} /> Sil
        </button>
      </div>
    </article>
  );
}

export default CourseCard;
