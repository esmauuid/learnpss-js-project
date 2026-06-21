const STORAGE_KEY = 'learnpss_courses';

export function getCoursesFromStorage(defaultCourses = []) {
  try {
    const storedCourses = localStorage.getItem(STORAGE_KEY);
    return storedCourses ? JSON.parse(storedCourses) : defaultCourses;
  } catch (error) {
    console.error('LocalStorage okunamadı:', error);
    return defaultCourses;
  }
}

export function saveCoursesToStorage(courses) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
  } catch (error) {
    console.error('LocalStorage kaydedilemedi:', error);
  }
}
