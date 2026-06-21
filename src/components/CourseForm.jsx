function CourseForm({ formData, setFormData, onSubmit, editingCourseId, onCancel }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="courseForm" onSubmit={onSubmit}>
      <div className="formHeader">
        <div>
          <span className="eyebrow">Ders Yönetimi</span>
          <h2>{editingCourseId ? 'Dersi Güncelle' : 'Yeni Ders Ekle'}</h2>
        </div>
        {editingCourseId && (
          <button type="button" className="ghostButton" onClick={onCancel}>
            Vazgeç
          </button>
        )}
      </div>

      <div className="formGrid">
        <label>
          Ders Kodu
          <input name="code" value={formData.code} onChange={handleChange} placeholder="MAT-1024" required />
        </label>

        <label>
          Ders Adı
          <input name="title" value={formData.title} onChange={handleChange} placeholder="Matematik Tekrar" required />
        </label>

        <label>
          Tarih ve Saat
          <input name="date" type="datetime-local" value={formData.date} onChange={handleChange} required />
        </label>

        <label>
          Konum
          <input name="location" value={formData.location} onChange={handleChange} placeholder="LearnPSS-M" required />
        </label>

        <label>
          Kontenjan
          <input name="capacity" value={formData.capacity} onChange={handleChange} placeholder="2/9" required />
        </label>

        <label>
          Eğitmen
          <input name="instructor" value={formData.instructor} onChange={handleChange} placeholder="Cem Kaan Çoban" required />
        </label>
      </div>

      <label>
        Açıklama
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Ders içeriği ve kısa açıklama"
          rows="3"
          required
        />
      </label>

      <button className="primaryButton" type="submit">
        {editingCourseId ? 'Güncelle' : 'Ekle'}
      </button>
    </form>
  );
}

export default CourseForm;
