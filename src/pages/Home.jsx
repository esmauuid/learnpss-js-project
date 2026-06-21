import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import CourseForm from '../components/CourseForm.jsx';
import CourseCard from '../components/CourseCard.jsx';
import { emptyCourse, sampleCourses } from '../interfaces/CourseModel.js';
import { getCoursesFromStorage, saveCoursesToStorage } from '../utils/localStorage.js';

function Home() {
  const [courses, setCourses] = useState(() => getCoursesFromStorage(sampleCourses));
  const [formData, setFormData] = useState(emptyCourse);
  const [editingCourseId, setEditingCourseId] = useState(null);

  useEffect(() => {
    saveCoursesToStorage(courses);
  }, [courses]);

  const resetForm = () => {
    setFormData(emptyCourse);
    setEditingCourseId(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editingCourseId) {
      setCourses((prev) =>
        prev.map((course) =>
          course.id === editingCourseId ? { ...formData, id: editingCourseId } : course
        )
      );
      resetForm();
      return;
    }

    const newCourse = {
      ...formData,
      id: Date.now()
    };

    setCourses((prev) => [newCourse, ...prev]);
    resetForm();
  };

  const handleEdit = (course) => {
    setEditingCourseId(course.id);
    setFormData({
      code: course.code,
      title: course.title,
      date: course.date,
      location: course.location,
      capacity: course.capacity,
      instructor: course.instructor,
      description: course.description
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (courseId) => {
    const isConfirmed = window.confirm('Bu dersi silmek istediğine emin misin?');
    if (!isConfirmed) return;
    setCourses((prev) => prev.filter((course) => course.id !== courseId));
  };

  return (
    <main className="page">
      <Navbar />

      <section className="hero">
        <div>
          <h1>LearnPSS Ders Takip</h1>
          <p>
            Ders ekle, yaklaşan dersleri listele, bilgileri güncelle ve istemediğin kayıtları sil.
          </p>
        </div>
        <div className="heroStats">
          <strong>{courses.length}</strong>
          <span>Aktif Ders</span>
        </div>
      </section>

      <CourseForm
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
        editingCourseId={editingCourseId}
        onCancel={resetForm}
      />

      <section className="listSection">
        <div className="sectionHeader">
          <div>
            <h2>Gelecek Dersler</h2>
          </div>
          <p>{courses.length} kayıt gösteriliyor</p>
        </div>

        {courses.length === 0 ? (
          <div className="emptyState">Henüz ders eklenmedi. Formu kullanarak yeni ders ekleyebilirsin.</div>
        ) : (
          <div className="courseGrid">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default Home;
