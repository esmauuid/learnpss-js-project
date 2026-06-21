// Projede TypeScript kullanılmadığı için bu dosya model dokümantasyonu amacıyla eklenmiştir.
// Bir ders kaydı aşağıdaki alanlardan oluşur:
// {
//   id: number,
//   code: string,
//   title: string,
//   date: string,
//   location: string,
//   capacity: string,
//   instructor: string,
//   description: string
// }

export const emptyCourse = {
  code: '',
  title: '',
  date: '',
  location: '',
  capacity: '',
  instructor: '',
  description: ''
};

export const sampleCourses = [
  {
    id: 1012,
    code: 'KLTR-1012',
    title: 'Kültür Medeniyet',
    date: '2026-06-21T12:45',
    location: 'LearnPSS-F',
    capacity: '3/9',
    instructor: 'Cem Kaan Çoban',
    description:
      '2 saat sürecek olan bu derste Kültür-Medeniyet konusunun son dersi işlenecek ve soru çözümleri yapılacaktır.'
  },
  {
    id: 1024,
    code: 'MAT-1024',
    title: 'Matematik Tekrar',
    date: '2026-06-24T14:00',
    location: 'LearnPSS-M',
    capacity: '2/9',
    instructor: 'Ayşe Demir',
    description:
      'Matematik tekrar dersinde problemler, oran-orantı ve yüzde konuları üzerinden örnek soru çözümü yapılacaktır.'
  }
];
