import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main className="page centerPage">
      <h1>Sayfa bulunamadı</h1>
      <p>Aradığın sayfa mevcut değil.</p>
      <Link className="primaryButton linkButton" to="/">Ana sayfaya dön</Link>
    </main>
  );
}

export default NotFound;
