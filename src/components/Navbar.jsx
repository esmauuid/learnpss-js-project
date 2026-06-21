import { BookOpenCheck } from 'lucide-react';

function Navbar() {
  return (
    <header className="navbar">
      <div className="brand">
        <span className="brandIcon"><BookOpenCheck size={22} /></span>
        <div>
          <strong>LearnPSS</strong>
          <p>Ders Takip Paneli</p>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
