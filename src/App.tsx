import { useEffect, useRef, useState } from 'react'

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500&display=swap');

  :root {
    --bg: #0A0A0F;
    --surface: #12121A;
    --surface2: #1A1A26;
    --accent: #C8FB4A;
    --text: #F0EEF8;
    --muted: #8887A0;
    --border: rgba(255,255,255,0.07);
    --font-head: 'Syne', sans-serif;
    --font-body: 'DM Sans', sans-serif;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { background: var(--bg); color: var(--text); font-family: var(--font-body); font-size: 16px; line-height: 1.7; overflow-x: hidden; }
  .portfolio-root { background: var(--bg); min-height: 100vh; }

  body, h1, h2, h3, h4, h5, h6, p, span, a, li, div, section, nav, footer { color: #F0EEF8; }
  .pf-btn-primary { color: #0A0A0F; }
  .pf-accent, .pf-nav-logo span, .pf-stat-num, .pf-badge { color: #C8FB4A; }
  .pf-hero-sub, .pf-stat-label, .pf-section-tag, .pf-contact-label, .pf-footer p, .pf-footer-links a { color: #8887A0; }

  .pf-nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; padding: 1rem 2rem; display: flex; align-items: center; justify-content: space-between; background: rgba(10,10,15,0.95); backdrop-filter: blur(14px); border-bottom: 1px solid var(--border); }
  .pf-nav-logo { font-family: var(--font-head); font-weight: 800; font-size: 1.1rem; letter-spacing: -0.02em; color: var(--text); text-decoration: none; }
  .pf-nav-logo span { color: var(--accent); }
  .pf-nav-links { display: flex; gap: 2rem; list-style: none; }
  .pf-nav-links a { color: var(--muted); font-size: 0.9rem; text-decoration: none; transition: color 0.2s; }
  .pf-nav-links a:hover { color: var(--accent); }

  .pf-hero { min-height: 100vh; display: flex; align-items: center; padding: 7rem 2rem 4rem; position: relative; overflow: hidden; }
  .pf-hero-bg { position: absolute; top: 0; right: 0; width: 60%; height: 100%; background: linear-gradient(135deg, transparent 40%, rgba(123,94,167,0.08) 100%); pointer-events: none; }
  .pf-hero-dots { position: absolute; inset: 0; background-image: radial-gradient(circle, rgba(200,251,74,0.06) 1px, transparent 1px); background-size: 40px 40px; pointer-events: none; }
  .pf-hero-inner { max-width: 1100px; margin: 0 auto; width: 100%; position: relative; z-index: 1; }
  .pf-badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(200,251,74,0.08); border: 1px solid rgba(200,251,74,0.2); color: var(--accent); font-size: 0.7rem; font-weight: 500; letter-spacing: 0.08em; padding: 4px 12px; border-radius: 999px; margin-bottom: 1.5rem; text-transform: uppercase; }
  .pf-badge-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); animation: pfpulse 2s infinite; }
  @keyframes pfpulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.3)} }
  .pf-hero-name { font-family: var(--font-head); font-size: clamp(2.5rem,7vw,5rem); font-weight: 800; line-height: 1.0; letter-spacing: -0.03em; margin-bottom: 1rem; }
  .pf-hero-name .pf-accent { color: var(--accent); }
  .pf-hero-sub { font-size: 1rem; color: var(--muted); max-width: 540px; margin-bottom: 2rem; font-weight: 300; }
  .pf-hero-cta { display: flex; flex-wrap: wrap; gap: 1rem; }
  .pf-btn-primary { background: var(--accent); color: #0A0A0F; padding: .7rem 1.5rem; border-radius: 8px; font-weight: 700; font-family: var(--font-head); text-decoration: none; font-size: .85rem; transition: transform .2s,opacity .2s; display: inline-block; }
  .pf-btn-primary:hover { transform: translateY(-2px); opacity: .9; }
  .pf-btn-outline { border: 1px solid var(--border); color: var(--text); padding: .7rem 1.5rem; border-radius: 8px; font-weight: 500; text-decoration: none; font-size: .85rem; transition: border-color .2s,background .2s; display: inline-block; }
  .pf-btn-outline:hover { border-color: rgba(255,255,255,.25); background: rgba(255,255,255,.04); }
  .pf-hero-stats { display: flex; gap: 2rem; margin-top: 2.5rem; padding-top: 1.5rem; border-top: 1px solid var(--border); flex-wrap: wrap; }
  .pf-stat-num { font-family: var(--font-head); font-size: 1.5rem; font-weight: 800; color: var(--accent); }
  .pf-stat-label { font-size: .7rem; color: var(--muted); margin-top: 2px; }

  .pf-section { padding: 4rem 2rem; }
  .pf-section-alt { padding: 4rem 2rem; background: var(--surface); }
  .pf-container { max-width: 1100px; margin: 0 auto; }
  .pf-section-tag { font-size: .7rem; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; color: var(--accent); margin-bottom: .5rem; }
  .pf-section-title { font-family: var(--font-head); font-size: clamp(1.5rem,4vw,2.2rem); font-weight: 800; letter-spacing: -0.02em; margin-bottom: 2rem; line-height: 1.1; }
  .pf-divider { height: 1px; background: var(--border); }

  .pf-about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; }
  .pf-about-text p { color: var(--muted); margin-bottom: 1rem; line-height: 1.7; font-size: 0.9rem; }
  .pf-about-text strong { color: var(--text); font-weight: 500; }
  .pf-photo-wrap { position: relative; display: flex; justify-content: center; }
  .pf-photo-frame { width: 200px; height: 250px; border-radius: 16px; background: var(--surface2); border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; overflow: hidden; position: relative; }
  .pf-photo-frame img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .pf-accent-corner { position: absolute; bottom: -10px; right: -10px; width: 60px; height: 60px; border: 2px solid var(--accent); border-radius: 12px; opacity: .4; }

  .pf-skills-grid { display: grid; grid-template-columns: repeat(auto-fill,minmax(200px,1fr)); gap: 1rem; }
  .pf-skill-card { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 1rem; transition: border-color .25s,transform .25s; }
  .pf-skill-card:hover { border-color: rgba(200,251,74,.25); transform: translateY(-3px); }
  .pf-skill-icon { font-size: 1.2rem; margin-bottom: .5rem; display: block; }
  .pf-skill-card h3 { font-family: var(--font-head); font-size: .85rem; font-weight: 700; color: var(--text); margin-bottom: .5rem; }
  .pf-tags { display: flex; flex-wrap: wrap; gap: 4px; }
  .pf-tag { font-size: .65rem; padding: 2px 8px; background: rgba(255,255,255,.05); border: 1px solid var(--border); border-radius: 999px; color: var(--muted); }

  .pf-featured { display: flex; flex-direction: column; gap: 1.5rem; }
  .pf-feat-card { border-radius: 16px; overflow: hidden; border: 1px solid; transition: transform .3s; }
  .pf-feat-card:hover { transform: translateY(-4px); }
  .pf-feat-card.forge { border-color: rgba(99,102,241,.25); background: linear-gradient(135deg,#0A0A14 0%,#10101E 100%); }
  .pf-feat-card.beauty { border-color: rgba(236,72,153,.25); background: linear-gradient(135deg,#0F0A10 0%,#180D16 100%); }
  .pf-feat-card.auto { border-color: rgba(249,115,22,.25); background: linear-gradient(135deg,#0F0D0A 0%,#1A1208 100%); }
  .pf-feat-card.hospital { border-color: rgba(34,197,94,.25); background: linear-gradient(135deg,#090F0C 0%,#0F1A13 100%); }
  .pf-feat-card.course { border-color: rgba(59,130,246,.25); background: linear-gradient(135deg,#090C14 0%,#0D1120 100%); }
  .pf-feat-card.library { border-color: rgba(234,179,8,.25); background: linear-gradient(135deg,#0F0E08 0%,#1A180A 100%); }
  .pf-feat-inner { display: grid; grid-template-columns: 1fr 1fr; }
  .pf-feat-content { padding: 2rem; }
  .pf-feat-visual { min-height: 280px; position: relative; overflow: hidden; }
  .pf-feat-label { display: inline-block; font-size: .6rem; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; padding: 3px 10px; border-radius: 999px; margin-bottom: 1rem; border: 1px solid; }
  .pf-feat-content h3 { font-family: var(--font-head); font-size: 1.3rem; font-weight: 800; letter-spacing: -0.02em; margin-bottom: 0.75rem; line-height: 1.2; word-break: break-word; overflow-wrap: break-word; max-width: 100%; }
  .c-forge { color: #818CF8; }
  .c-beauty { color: #EC4899; }
  .c-auto { color: #F97316; }
  .c-hospital { color: #22C55E; }
  .c-course { color: #3B82F6; }
  .c-library { color: #EAB308; }
  .pf-feat-meta { display: flex; gap: .5rem; flex-wrap: wrap; margin-bottom: 0.75rem; }
  .pf-feat-meta-tag { font-size: .65rem; padding: 2px 8px; border-radius: 999px; background: rgba(255,255,255,.05); border: 1px solid var(--border); color: var(--muted); }
  .pf-feat-desc { color: var(--muted); font-size: .85rem; line-height: 1.6; margin-bottom: 1rem; word-break: break-word; }
  .pf-feat-features { list-style: none; display: flex; flex-direction: column; gap: .4rem; margin-bottom: 1rem; }
  .pf-feat-features li { display: flex; align-items: flex-start; gap: .5rem; font-size: .75rem; color: var(--muted); word-break: break-word; }
  .pf-feat-features li .arr { flex-shrink: 0; margin-top: 2px; font-style: normal; }
  .pf-tech-row { display: flex; flex-wrap: wrap; gap: 4px; }
  .pf-tech-tag { font-size: .65rem; padding: 2px 8px; border-radius: 999px; font-weight: 500; border: 1px solid; }

  .vis-base { height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 1.5rem; position: relative; }
  .vis-forge-icon, .vis-auto-icon, .vis-hospital-icon, .vis-course-icon, .vis-library-icon { font-size: 3rem; position: relative; z-index:1; margin-bottom: 1rem; }
  .vis-forge-grid, .vis-auto-grid, .vis-hospital-grid, .vis-course-grid, .vis-library-grid { display: grid; grid-template-columns: 1fr 1fr; gap: .5rem; width: 100%; position: relative; z-index:1; }
  .vis-mini { border-radius: 8px; padding: .5rem; text-align: center; background: rgba(255,255,255,.05); border: 1px solid var(--border); }
  .vis-mini-num { font-family: var(--font-head); font-size: 0.8rem; font-weight: 800; }
  .vis-mini-lbl { font-size: .55rem; color: var(--muted); margin-top: 2px; }

  .pf-contact-box { background: var(--surface); border: 1px solid var(--border); border-radius: 16px; padding: 2rem; display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: center; }
  .pf-contact-left h2 { font-family: var(--font-head); font-size: clamp(1.3rem,3vw,2rem); font-weight: 800; letter-spacing: -0.02em; margin-bottom: 0.75rem; }
  .pf-contact-links { display: flex; flex-direction: column; gap: 0.75rem; }
  .pf-contact-link { display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem 1rem; background: var(--bg); border: 1px solid var(--border); border-radius: 10px; text-decoration: none; transition: border-color .2s; }
  .pf-contact-icon { width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 0.9rem; flex-shrink: 0; }
  .pf-contact-label { font-size: .7rem; color: var(--muted); }
  .pf-contact-val { font-size: .8rem; font-weight: 500; margin-top: 1px; }

  .pf-footer { border-top: 1px solid var(--border); padding: 1.5rem 2rem; display: flex; align-items: center; justify-content: space-between; }
  .pf-footer p { color: var(--muted); font-size: .75rem; }
  .pf-footer-links { display: flex; gap: 1rem; }
  .pf-footer-links a { color: var(--muted); font-size: .75rem; text-decoration: none; transition: color .2s; }
  .pf-footer-links a:hover { color: var(--accent); }

  @media (max-width: 900px) { .pf-feat-inner { grid-template-columns: 1fr; } .pf-feat-visual { min-height: 200px; } }
  @media (max-width: 768px) { 
    .pf-nav { padding: 0.75rem 1rem; }
    .pf-nav-links { display: none; }
    .pf-hero { padding: 6rem 1rem 3rem; }
    .pf-section, .pf-section-alt { padding: 3rem 1rem; }
    .pf-about-grid { grid-template-columns: 1fr; gap: 2rem; }
    .pf-photo-wrap { order: -1; }
    .pf-contact-box { grid-template-columns: 1fr; padding: 1.5rem; gap: 1.5rem; }
    .pf-footer { flex-direction: column; gap: 0.75rem; text-align: center; }
    .pf-feat-content { padding: 1.5rem; }
    .pf-skills-grid { grid-template-columns: repeat(auto-fill,minmax(160px,1fr)); }
  }
  @media (max-width: 480px) {
    .pf-hero-name { font-size: 2rem; }
    .pf-badge { font-size: 0.6rem; }
    .pf-stat-num { font-size: 1.2rem; }
    .pf-skills-grid { grid-template-columns: 1fr 1fr; }
  }
`

const contactLinks = [
  { icon: '📞', label: 'Telefon', value: '+90 507 163 84 49', href: 'tel:+905071638449', bg: 'rgba(200,251,74,0.1)' },
  { icon: '📧', label: 'E-posta', value: 'hcanerlikinc@gmail.com', href: 'mailto:hcanerlikinc@gmail.com', bg: 'rgba(200,251,74,0.1)' },
  { icon: '🔗', label: 'LinkedIn', value: 'can-erkilinc', href: 'https://www.linkedin.com/in/can-erkilinc', bg: 'rgba(0,122,204,0.12)' },
  { icon: '💻', label: 'GitHub', value: 'CanErkilinc', href: 'https://github.com/CanErkilinc', bg: 'rgba(255,255,255,0.06)' },
]

export default function App() {
  const [lang, setLang] = useState<'tr' | 'en' | 'de'>('tr')
  
  const t = (tr: string, en: string, de: string) => {
    if (lang === 'tr') return tr
    if (lang === 'en') return en
    return de
  }

  const getSkills = () => [
    { icon: '⚙️', title: t('Programlama Dilleri', 'Programming Languages', 'Programmiersprachen'), tags: ['Java', 'TypeScript', 'Swift', 'Python'] },
    { icon: '🔧', title: t('Backend & Framework', 'Backend & Framework', 'Backend & Framework'), tags: ['Spring Boot', 'Next.js', 'Node.js', 'RESTful API'] },
    { icon: '🌐', title: t('Web & Mobil', 'Web & Mobile', 'Web & Mobil'), tags: ['React', 'React Native', 'Expo', 'HTML', 'CSS', 'TailwindCSS'] },
    { icon: '🗄️', title: t('Veritabanları', 'Databases', 'Datenbanken'), tags: ['PostgreSQL', 'MySQL', 'Firebase', 'Prisma'] },
    { icon: '🤖', title: t('AI & Entegrasyonlar', 'AI & Integrations', 'KI & Integrationen'), tags: ['OpenAI API', 'GPT-4o-mini', t('Prompt Mühendisliği', 'Prompt Engineering', 'Prompt Engineering')] },
    { icon: '📱', title: t('Mobil Geliştirme', 'Mobile Development', 'Mobile Entwicklung'), tags: ['iOS (Swift)', 'React Native', 'Expo', t('Push Bildirimleri', 'Push Notifications', 'Push-Benachrichtigungen')] },
    { icon: '🐳', title: t('DevOps & Araçlar', 'DevOps & Tools', 'DevOps & Werkzeuge'), tags: ['Docker', 'Git', 'GitHub', 'Prisma ORM'] },
    { icon: '🖥️', title: t('Sistem & Altyapı', 'System & Infrastructure', 'System & Infrastruktur'), tags: ['Windows', 'Linux', 'Active Directory', 'VMware', 'Hyper-V'] },
    { icon: '🌐', title: t('Ağ & Güvenlik', 'Network & Security', 'Netzwerk & Sicherheit'), tags: ['TCP/IP', 'LAN/WAN', 'VPN', 'Firewall', t('Siber Güvenlik', 'Cybersecurity', 'Cybersicherheit')] },
  ]

  const ForgeVisual = () => (
    <div className="vis-base vis-forge">
      <div className="vis-forge-icon">🤖</div>
      <div className="vis-forge-grid">
        {[
          { num: 'GPT-4o', lbl: t('AI Motor', 'AI Engine', 'KI-Motor') },
          { num: '7/24', lbl: t('Canlı Koç', 'Live Coach', 'Live-Coach') },
          { num: 'BMR', lbl: t('Mifflin Formülü', 'Mifflin Formula', 'Mifflin Formel') },
          { num: '📸', lbl: t('Yemek Tanıma', 'Food Recognition', 'Lebensmittelerkennung') },
        ].map(x => (
          <div className="vis-mini forge" key={x.lbl}>
            <div className="vis-mini-num forge">{x.num}</div>
            <div className="vis-mini-lbl">{x.lbl}</div>
          </div>
        ))}
      </div>
    </div>
  )

  const BeautyVisual = () => (
    <div className="vis-base vis-beauty" style={{ alignItems: 'center' }}>
      <div className="vis-beauty-ui">
        <div className="vis-beauty-hdr">
          <span className="vis-beauty-title">✨ BeautyBook</span>
          <span className="pf-live">{t('CANLI', 'LIVE', 'LIVE')}</span>
        </div>
        {[
          { name: 'Ayşe K.', time: '10:00', cls: 'ok', label: t('Onaylandı', 'Confirmed', 'Bestätigt') },
          { name: 'Merve T.', time: '11:30', cls: 'wait', label: t('Bekliyor', 'Waiting', 'Wartet') },
          { name: 'Selin A.', time: '13:00', cls: 'no', label: t('Reddedildi', 'Rejected', 'Abgelehnt') },
        ].map(a => (
          <div className="vis-appt" key={a.name}>
            <div><div className="vis-appt-name">{a.name}</div><div className="vis-appt-time">{a.time}</div></div>
            <span className={`vis-status ${a.cls}`}>{a.label}</span>
          </div>
        ))}
        <div className="vis-ciro">
          <div className="vis-ciro-box"><div className="vis-ciro-val">₺1.2K</div><div className="vis-ciro-lbl">{t('Günlük', 'Daily', 'Täglich')}</div></div>
          <div className="vis-ciro-box"><div className="vis-ciro-val">₺8.4K</div><div className="vis-ciro-lbl">{t('Haftalık', 'Weekly', 'Wöchentlich')}</div></div>
          <div className="vis-ciro-box"><div className="vis-ciro-val">₺32K</div><div className="vis-ciro-lbl">{t('Aylık', 'Monthly', 'Monatlich')}</div></div>
        </div>
      </div>
    </div>
  )

  const AutoVisual = () => (
    <div className="vis-base vis-auto">
      <div className="vis-auto-icon">🚗</div>
      <div className="vis-auto-grid">
        {[
          { num: 'Km', lbl: t('Kilometre Takibi', 'Mileage Tracking', 'Kilometerverfolgung') },
          { num: '🔔', lbl: t('Bakım Alarmı', 'Maintenance Alert', 'Wartungsalarm') },
          { num: '📍', lbl: t('Yakın Yıkama', 'Nearby Wash', 'Waschanlagen in der Nähe') },
          { num: t('Araç', 'Vehicle', 'Fahrzeug'), lbl: t('Kayıt Sistemi', 'Registration System', 'Registrierungssystem') },
        ].map(x => (
          <div className="vis-mini auto" key={x.lbl}>
            <div className="vis-mini-num auto">{x.num}</div>
            <div className="vis-mini-lbl">{x.lbl}</div>
          </div>
        ))}
      </div>
    </div>
  )

  const HospitalVisual = () => (
    <div className="vis-base vis-hospital">
      <div className="vis-hospital-icon">🏥</div>
      <div className="vis-hospital-grid">
        {[
          { num: t('Hasta', 'Patient', 'Patient'), lbl: t('Kayıt & Giriş', 'Registration & Login', 'Registrierung & Login') },
          { num: '📅', lbl: t('Randevu Al', 'Get Appointment', 'Termin vereinbaren') },
          { num: t('Doktor', 'Doctor', 'Arzt'), lbl: t('Yönetim Paneli', 'Management Panel', 'Verwaltungspanel') },
          { num: 'JWT', lbl: t('Auth & Yetki', 'Auth & Authorization', 'Auth & Autorisierung') },
        ].map(x => (
          <div className="vis-mini hospital" key={x.lbl}>
            <div className="vis-mini-num hospital">{x.num}</div>
            <div className="vis-mini-lbl">{x.lbl}</div>
          </div>
        ))}
      </div>
    </div>
  )

  const CourseVisual = () => (
    <div className="vis-base vis-course">
      <div className="vis-course-icon">🧑‍🏫</div>
      <div className="vis-course-grid">
        {[
          { num: t('Kurs', 'Course', 'Kurs'), lbl: t('Atama Sistemi', 'Assignment System', 'Zuweisungssystem') },
          { num: '✅', lbl: t('Yoklama', 'Attendance', 'Anwesenheit') },
          { num: t('Öğrenci', 'Student', 'Schüler'), lbl: t('Kayıt & Takip', 'Registration & Tracking', 'Registrierung & Verfolgung') },
          { num: 'API', lbl: t('RESTful Backend', 'RESTful Backend', 'RESTful Backend') },
        ].map(x => (
          <div className="vis-mini course" key={x.lbl}>
            <div className="vis-mini-num course">{x.num}</div>
            <div className="vis-mini-lbl">{x.lbl}</div>
          </div>
        ))}
      </div>
    </div>
  )

  const LibraryVisual = () => (
    <div className="vis-base vis-library">
      <div className="vis-library-icon">📚</div>
      <div className="vis-library-grid">
        {[
          { num: t('Kitap', 'Book', 'Buch'), lbl: t('Stok Takibi', 'Stock Tracking', 'Bestandsverfolgung') },
          { num: '🔍', lbl: t('Arama', 'Search', 'Suche') },
          { num: t('Ödünç', 'Borrow', 'Ausleihen'), lbl: t('Alma Sistemi', 'Borrowing System', 'Ausleihsystem') },
          { num: 'MySQL', lbl: t('Veritabanı', 'Database', 'Datenbank') },
        ].map(x => (
          <div className="vis-mini library" key={x.lbl}>
            <div className="vis-mini-num library">{x.num}</div>
            <div className="vis-mini-lbl">{x.lbl}</div>
          </div>
        ))}
      </div>
    </div>
  )

  const featuredProjects = [
    {
      cls: 'forge',
      label: t('Akademik Proje · 2026', 'Academic Project · 2026', 'Akademisches Projekt · 2026'),
      labelEmoji: '🤖',
      title: <><span className="c-forge">FORGE AI</span> — {t('Kişisel Yapay Zeka Koçu', 'Personal AI Coach', 'Persönlicher KI-Coach')}</>,
      meta: ['Full Stack', 'React Native', 'AI'],
      desc: t(
        'GPT-4o-mini destekli 7/24 kişisel fitness danışmanı. Kullanıcının seviyesine, hedefine ve ekipmanına göre özelleştirilmiş antrenman programları oluşturan, yemek tanıma ve vücut analizi yapabilen tam donanımlı mobil uygulama.',
        'GPT-4o-mini powered 24/7 personal fitness coach. A fully-featured mobile app that creates customized workout programs based on user level, goals, and equipment, with food recognition and body analysis capabilities.',
        'GPT-4o-mini unterstützter 24/7 persönlicher Fitness-Coach. Eine voll ausgestattete mobile App, die personalisierte Trainingspläne basierend auf Niveau, Zielen und Ausrüstung erstellt, mit Lebensmittelerkennung und Körperanalyse.'
      ),
      features: [
        t('7/24 Canlı Koçluk — GPT-4o-mini ile kişisel fitness danışmanı', '24/7 Live Coaching — personal fitness coach with GPT-4o-mini', '24/7 Live-Coaching — persönlicher Fitness-Coach mit GPT-4o-mini'),
        t('Mifflin-St Jeor formülü ile bilimsel BMR & TDEE hesaplama', 'Scientific BMR & TDEE calculation with Mifflin-St Jeor formula', 'Wissenschaftliche BMR- & TDEE-Berechnung mit Mifflin-St Jeor Formel'),
        t('Yemek Tanıma — Fotoğraf çek, AI kalori ve besin değerlerini hesaplasın', 'Food Recognition — take a photo, AI calculates calories and nutrition', 'Lebensmittelerkennung — Foto machen, KI berechnet Kalorien und Nährwerte'),
        t('52 haftalık fotoğraf geçmişi ile vücut dönüşümü takibi', 'Body transformation tracking with 52-week photo history', 'Körpertransformation-Tracking mit 52-Wochen-Fotoverlauf'),
        t('4 Tip Bildirim — antrenman, su, yemek, gelişim hatırlatmaları', '4 Notification Types — workout, water, meal, progress reminders', '4 Benachrichtigungstypen — Training, Wasser, Mahlzeiten, Fortschrittserinnerungen'),
        t('Her hareket için YouTube videosu, detaylı anlatım ve püf noktaları', 'YouTube video, detailed explanation and tips for every exercise', 'YouTube-Video, detaillierte Erklärung und Tipps für jede Übung'),
        t('Gece Sıfırlama — Su takibi her gece 00:00\'da otomatik sıfırlanır', 'Night Reset — water tracking resets automatically at 00:00 daily', 'Nacht-Reset — Wasser-Tracking setzt sich täglich um 00:00 automatisch zurück'),
        t('Otomatik Dönüş — geçici antrenman 1 hafta sonra eski güne döner', 'Auto Revert — temporary workout reverts after 1 week', 'Automatische Rückkehr — temporäres Training kehrt nach 1 Woche zurück'),
      ],
      tech: ['React Native', 'Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'OpenAI API', 'Expo'],
      visual: <ForgeVisual />,
    },
    {
      cls: 'beauty',
      label: t('Akademik Proje · 2026', 'Academic Project · 2026', 'Akademisches Projekt · 2026'),
      labelEmoji: '✨',
      title: <><span className="c-beauty">BeautyBook</span> — {t('Güzellik Salonu Yönetimi', 'Salon Management System', 'Salon Verwaltungssystem')}</>,
      meta: ['Full Stack', 'TypeScript', 'SaaS'],
      desc: t(
        'Kuaför, güzellik salonu ve berber gibi işletmeler için geliştirilmiş online randevu ve yönetim platformu. Günlük ciro takibinden çalışan performansına, sadakat programından push bildirimlere kadar eksiksiz bir salon yönetim çözümü.',
        'Online appointment and management platform for hair salons, beauty centers, and barbershops. A complete salon management solution from daily revenue tracking to employee performance, loyalty programs, and push notifications.',
        'Online-Termin- und Verwaltungsplattform für Friseure, Schönheitssalons und Barbershops. Eine komplette Salonmanagementlösung von täglicher Umsatzverfolgung bis zu Mitarbeiterleistung, Treueprogrammen und Push-Benachrichtigungen.'
      ),
      features: [
        t('Anlık randevu oluşturma, yeniden planlama ve iptal işlemleri', 'Instant appointment creation, rescheduling, and cancellation', 'Sofortige Terminerstellung, Neuplanung und Stornierung'),
        t('Online randevu onaylama / reddetme ve manuel randevu ekleme', 'Online appointment approval/rejection and manual appointment addition', 'Online-Terminbestätigung/-ablehnung und manuelle Terminhinzufügung'),
        t('Günlük, haftalık ve aylık ciro takibi ve grafiksel raporlar', 'Daily, weekly, and monthly revenue tracking with graphical reports', 'Tägliche, wöchentliche und monatliche Umsatzverfolgung mit grafischen Berichten'),
        t('Çalışan performans karşılaştırmaları — ciro, tamamlanan randevu, puan', 'Employee performance comparisons — revenue, completed appointments, ratings', 'Mitarbeiterleistungsvergleiche — Umsatz, abgeschlossene Termine, Bewertungen'),
        t('Müşteri veritabanı ve sadakat programı', 'Customer database and loyalty program', 'Kundendatenbank und Treueprogramm'),
        t('En çok tercih edilen hizmetler ve yoğunluk analizi', 'Most preferred services and occupancy analysis', 'Meistgebuchte Dienstleistungen und Auslastungsanalyse'),
        t('Hizmet & fiyatlandırma yönetimi; çalışma saatleri & izin kontrolü', 'Service & pricing management; working hours & leave control', 'Dienstleistungs- & Preisverwaltung; Arbeitszeiten & Urlaubskontrolle'),
        t('Ayrı Yönetici ve Müşteri paneli — rol tabanlı erişim', 'Separate Admin and Customer panels — role-based access', 'Getrennte Admin- und Kundenpanels — rollenbasierter Zugriff'),
      ],
      tech: ['React Native', 'Expo', 'Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'TailwindCSS'],
      visual: <BeautyVisual />,
    },
    {
      cls: 'auto',
      label: t('Full Stack · Freelance', 'Full Stack · Freelance', 'Full Stack · Freiberuflich'),
      labelEmoji: '🚗',
      title: <><span className="c-auto">Oto</span> {t('Asistanım', 'Assistant', 'Assistent')}</>,
      meta: ['Full Stack', 'Java', 'React'],
      desc: t(
        'Araç sahiplerinin bakım, onarım ve temizlik ihtiyaçlarını tek platformda yönetebildiği kapsamlı bir otomotiv servis uygulaması. Kilometre takibinden konum bazlı yıkama noktalarına kadar her şey tek ekranda.',
        'Comprehensive automotive service app where vehicle owners can manage maintenance, repair, and cleaning needs on a single platform. From mileage tracking to location-based car wash spots — everything on one screen.',
        'Umfassende Automobil-Service-App, mit der Fahrzeugbesitzer Wartungs-, Reparatur- und Reinigungsbedarf auf einer einzigen Plattform verwalten können. Von Kilometerverfolgung bis zu standortbasierten Waschplätzen — alles auf einem Bildschirm.'
      ),
      features: [
        t('Araç Kayıt & Profil — marka, model, yıl, plaka bilgileri', 'Vehicle Registration & Profile — brand, model, year, license plate', 'Fahrzeugregistrierung & Profil — Marke, Modell, Jahr, Kennzeichen'),
        t('Kilometre takibi ve otomatik bakım alarm sistemi', 'Mileage tracking and automatic maintenance alert system', 'Kilometerverfolgung und automatisches Wartungsalarmsystem'),
        t('Onarım / servis geçmişi ve maliyet analizi', 'Repair/service history and cost analysis', 'Reparatur-/Servicehistorie und Kostenanalyse'),
        t('Konum bazlı yakın araç yıkama noktaları haritası', 'Location-based nearby car wash spots map', 'Standortbasierte Karte mit nahegelegenen Waschplätzen'),
        t('Yıkama, bakım ve onarım için online randevu alma', 'Online appointment booking for washing, maintenance, and repair', 'Online-Terminbuchung für Wäsche, Wartung und Reparatur'),
      ],
      tech: ['Java', 'Spring Boot', 'React', 'Node.js', 'PostgreSQL', 'REST API'],
      visual: <AutoVisual />,
    },
    {
      cls: 'hospital',
      label: t('Full Stack · Akademik Proje · 2025', 'Full Stack · Academic Project · 2025', 'Full Stack · Akademisches Projekt · 2025'),
      labelEmoji: '🏥',
      title: <><span className="c-hospital">Hastane</span> {t('Randevu Takip Sistemi', 'Appointment Tracking System', 'Terminverfolgungssystem')}</>,
      meta: ['Full Stack', 'Java', 'React'],
      desc: t(
        'Hastaların kayıt olup doktorlardan randevu alabildiği, doktorların kendi panellerinden randevu yönetimi yapabildiği tam kapsamlı bir sağlık bilgi sistemi.',
        'A comprehensive healthcare information system where patients can register and book appointments with doctors, and doctors can manage appointments from their own panels.',
        'Ein umfassendes Gesundheitsinformationssystem, in dem sich Patienten registrieren und Termine bei Ärzten buchen können, und Ärzte Termine über ihre eigenen Panels verwalten können.'
      ),
      features: [
        t('Hasta kaydı, giriş ve profil yönetimi', 'Patient registration, login, and profile management', 'Patientenregistrierung, Login und Profilverwaltung'),
        t('Doktor seçimi ve randevu alma sistemi', 'Doctor selection and appointment booking system', 'Arztauswahl und Terminbuchungssystem'),
        t('Doktor paneli — randevu görüntüleme ve yönetme', 'Doctor panel — view and manage appointments', 'Arztpanel — Termine anzeigen und verwalten'),
        t('Spring Boot ile RESTful API tasarımı', 'RESTful API design with Spring Boot', 'RESTful API Design mit Spring Boot'),
        t('JWT tabanlı kullanıcı kimlik doğrulama ve yetkilendirme', 'JWT-based user authentication and authorization', 'JWT-basierte Benutzerauthentifizierung und -autorisierung'),
        t('React.js ile kullanıcı dostu arayüz tasarımı', 'User-friendly interface design with React.js', 'Benutzerfreundliches Interface-Design mit React.js'),
      ],
      tech: ['Java', 'Spring Boot', 'PostgreSQL', 'React.js', 'JWT', 'REST API'],
      visual: <HospitalVisual />,
    },
    {
      cls: 'course',
      label: t('Backend · Akademik Proje · 2025', 'Backend · Academic Project · 2025', 'Backend · Akademisches Projekt · 2025'),
      labelEmoji: '🧑‍🏫',
      title: <><span className="c-course">Öğretmen-Öğrenci</span> {t('Kurs Yönetim Sistemi', 'Course Management System', 'Kursverwaltungssystem')}</>,
      meta: ['Backend', 'Java', 'Spring Boot'],
      desc: t(
        'Öğretmenlerin kurs oluşturup öğrenci atayabildiği, yoklama tutabildiği; öğrencilerin ise kurs takibini yapabildiği full özellikli bir eğitim yönetim platformu.',
        'A full-featured education management platform where teachers can create courses and assign students, take attendance, and students can track their courses.',
        'Eine voll ausgestattete Bildungsmanagement-Plattform, auf der Lehrer Kurse erstellen und Schüler zuweisen, Anwesenheit erfassen können, und Schüler ihre Kurse verfolgen können.'
      ),
      features: [
        t('Kullanıcı kaydı ve rol bazlı giriş (öğretmen / öğrenci)', 'User registration and role-based login (teacher/student)', 'Benutzerregistrierung und rollenbasierter Login (Lehrer/Schüler)'),
        t('Kurs oluşturma ve öğrenci atama sistemi', 'Course creation and student assignment system', 'Kurserstellung und Schülerzuweisungssystem'),
        t('Yoklama yönetimi ve devamsızlık takibi', 'Attendance management and absenteeism tracking', 'Anwesenheitsverwaltung und Abwesenheitsverfolgung'),
        t('Spring Boot ile RESTful API tasarımı', 'RESTful API design with Spring Boot', 'RESTful API Design mit Spring Boot'),
        t('PostgreSQL veritabanı entegrasyonu', 'PostgreSQL database integration', 'PostgreSQL-Datenbankintegration'),
        t('React.js ile frontend arayüzü', 'Frontend interface with React.js', 'Frontend-Interface mit React.js'),
      ],
      tech: ['Java', 'Spring Boot', 'PostgreSQL', 'React.js', 'REST API'],
      visual: <CourseVisual />,
    },
    {
      cls: 'library',
      label: t('Backend · Staj Projesi · 2023–2024', 'Backend · Internship Project · 2023–2024', 'Backend · Praktikumsprojekt · 2023–2024'),
      labelEmoji: '📚',
      title: <><span className="c-library">Kütüphane</span> {t('Kitap Stok Takip Sistemi', 'Book Stock Tracking System', 'Bibliotheks-Bestandsverfolgungssystem')}</>,
      meta: ['Backend', 'Java', 'MySQL'],
      desc: t(
        'Kullanıcıların kitap arayabildiği, ödünç alabildiği ve iade edebildiği; kütüphane personelinin stok yönetimini merkezi olarak yönettiği bir sistem. Staj projesi kapsamında geliştirilmiştir.',
        'A system where users can search for books, borrow and return them, and library staff can centrally manage inventory. Developed as part of an internship project.',
        'Ein System, in dem Benutzer nach Büchern suchen, sie ausleihen und zurückgeben können, und Bibliothekspersonal den Bestand zentral verwalten kann. Im Rahmen eines Praktikumsprojekts entwickelt.'
      ),
      features: [
        t('Kullanıcı kaydı ve giriş sistemi', 'User registration and login system', 'Benutzerregistrierungs- und Loginsystem'),
        t('Kitap arama ve filtreleme', 'Book search and filtering', 'Buchersuche und -filterung'),
        t('Kitap ödünç alma ve iade işlemleri', 'Book borrowing and return transactions', 'Buchausleih- und Rückgabetransaktionen'),
        t('Veritabanı tasarımı ve yönetimi (MySQL)', 'Database design and management (MySQL)', 'Datenbankdesign und -verwaltung (MySQL)'),
        t('Kullanıcı arayüzü tasarımı ve çekirdek fonksiyonlar', 'User interface design and core functions', 'Benutzeroberflächendesign und Kernfunktionen'),
        t('Proje dokümantasyonu ve GitHub üzerinde yayınlama', 'Project documentation and publishing on GitHub', 'Projektdokumentation und Veröffentlichung auf GitHub'),
      ],
      tech: ['Java', 'MySQL', 'Git', 'GitHub'],
      visual: <LibraryVisual />,
    },
  ]

  const styleRef = useRef<HTMLStyleElement | null>(null)

  useEffect(() => {
    const el = document.createElement('style')
    el.textContent = styles
    document.head.appendChild(el)
    styleRef.current = el
    return () => { el.remove() }
  }, [])

  const skillsData = getSkills()

  return (
    <div className="portfolio-root">

      {/* NAV - DİL BUTONLARI NAVBAR İÇİNDE */}
      <nav className="pf-nav">
        <a href="#" className="pf-nav-logo">HCE<span>.</span></a>
        <ul className="pf-nav-links">
          <li><a href="#hakkimda">{t('Hakkımda', 'About', 'Über mich')}</a></li>
          <li><a href="#yetenekler">{t('Yetenekler', 'Skills', 'Fähigkeiten')}</a></li>
          <li><a href="#projeler">{t('Projeler', 'Projects', 'Projekte')}</a></li>
          <li><a href="#iletisim">{t('İletişim', 'Contact', 'Kontakt')}</a></li>
        </ul>
        
        {/* DİL BUTONLARI - NAVBAR İÇİNDE */}
        <div style={{
          display: 'flex',
          gap: '5px',
          background: 'rgba(30,30,42,0.8)',
          padding: '4px 10px',
          borderRadius: '30px',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <button onClick={() => setLang('tr')} style={{
            background: lang === 'tr' ? '#C8FB4A' : 'transparent',
            color: lang === 'tr' ? '#0A0A0F' : '#fff',
            border: 'none', padding: '4px 10px', borderRadius: '20px',
            cursor: 'pointer', fontWeight: 'bold', fontSize: '0.7rem'
          }}>TR</button>
          <button onClick={() => setLang('en')} style={{
            background: lang === 'en' ? '#C8FB4A' : 'transparent',
            color: lang === 'en' ? '#0A0A0F' : '#fff',
            border: 'none', padding: '4px 10px', borderRadius: '20px',
            cursor: 'pointer', fontWeight: 'bold', fontSize: '0.7rem'
          }}>EN</button>
          <button onClick={() => setLang('de')} style={{
            background: lang === 'de' ? '#C8FB4A' : 'transparent',
            color: lang === 'de' ? '#0A0A0F' : '#fff',
            border: 'none', padding: '4px 10px', borderRadius: '20px',
            cursor: 'pointer', fontWeight: 'bold', fontSize: '0.7rem'
          }}>DE</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="pf-hero">
        <div className="pf-hero-bg" />
        <div className="pf-hero-dots" />
        <div className="pf-hero-inner">
          <div className="pf-badge">
            <span className="pf-badge-dot" />
            {t('Müsait · Full Stack Developer', 'Available · Full Stack Developer', 'Verfügbar · Full Stack Entwickler')}
          </div>
          <h1 className="pf-hero-name">Hüseyin Can<br /><span className="pf-accent">ERKILINÇ</span></h1>
          <p className="pf-hero-sub">
            {t(
              'Full Stack yazılım geliştirici. Java Backend, React, TypeScript, React Native ve AI entegrasyonlarıyla gerçek dünya problemlerini çözen ürünler inşa ediyorum.',
              'Full Stack software developer. Building products that solve real-world problems with Java Backend, React, TypeScript, React Native, and AI integrations.',
              'Full Stack Softwareentwickler. Ich entwickle Produkte, die reale Probleme lösen, mit Java Backend, React, TypeScript, React Native und KI-Integrationen.'
            )}
          </p>
          <div className="pf-hero-cta">
            <a href="#iletisim" className="pf-btn-primary">{t('İletişime Geç', 'Get in Touch', 'Kontakt aufnehmen')}</a>
            <a href="#projeler" className="pf-btn-outline">{t('Projelerimi Gör →', 'View Projects →', 'Projekte ansehen →')}</a>
          </div>
          <div className="pf-hero-stats">
            <div><div className="pf-stat-num">6</div><div className="pf-stat-label">{t('Büyük Proje', 'Major Projects', 'Große Projekte')}</div></div>
            <div><div className="pf-stat-num">2</div><div className="pf-stat-label">{t('SaaS Ürün', 'SaaS Products', 'SaaS Produkte')}</div></div>
            <div><div className="pf-stat-num">AI</div><div className="pf-stat-label">{t('Entegrasyonu', 'Integration', 'Integration')}</div></div>
            <div><div className="pf-stat-num">Full Stack</div></div>
          </div>
        </div>
      </section>

      <div className="pf-divider" />

      {/* ABOUT */}
      <section id="hakkimda" className="pf-section-alt">
        <div className="pf-container">
          <div className="pf-about-grid">
            <div className="pf-about-text">
              <div className="pf-section-tag">{t('Hakkımda', 'About', 'Über mich')}</div>
              <h2 className="pf-section-title" style={{ whiteSpace: 'pre-line' }}>
                {t('Kod yazıyorum,\nçözüm üretiyorum.', 'Writing code,\nbuilding solutions.', 'Code schreiben,\nLösungen bauen.')}
              </h2>
              <p>
                {t('Sistem yönetimi ve yazılım geliştirme bilgisine sahip bir bilişim uzmanı olarak, uçtan uca ', 'As an IT specialist with system management and software development knowledge, I have the ability to develop end-to-end ', 'Als IT-Spezialist mit Kenntnissen in Systemverwaltung und Softwareentwicklung habe ich die Fähigkeit, End-to-End-')}
                <strong>{t('Full Stack çözümler', 'Full Stack solutions', 'Full Stack Lösungen')}</strong>
                {t(' geliştirme yeteneğine sahibim.', '.', ' zu entwickeln.')}
              </p>
              <p>
                {t('Ağırlıklı olarak ', 'While specializing mainly in ', 'Während ich mich hauptsächlich auf die ')}
                <strong>{t('Java Backend', 'Java Backend', 'Java Backend')}</strong>
                {t(' geliştirme alanında uzmanlaşmakla birlikte, React / TypeScript ile web, React Native ile mobil, ', ' development, I build web apps with React/TypeScript, mobile apps with React Native, and full-stack apps with ', '-Entwicklung spezialisiere, entwickle ich Web-Apps mit React/TypeScript, mobile Apps mit React Native und Full-Stack-Apps mit ')}
                <strong>{t('Next.js', 'Next.js', 'Next.js')}</strong>
                {t(' ile full stack uygulamalar geliştiriyorum. ', '. I can build AI-powered products with ', '. Ich kann KI-gestützte Produkte mit ')}
                <strong>{t('OpenAI API', 'OpenAI API', 'OpenAI API')}</strong>
                {t(' entegrasyonuyla AI destekli ürünler inşa edebiliyorum.', ' integration.', '-Integration entwickeln.')}
              </p>
              <p>
                {t('Özel ilgim ', 'My special interests are ', 'Meine besonderen Interessen sind ')}
                <strong>{t('siber güvenlik ve yapay zeka', 'cybersecurity and artificial intelligence', 'Cybersicherheit und künstliche Intelligenz')}</strong>
                {t(' alanında olup bu konularda aktif olarak kendimi geliştirmekteyim.', ', and I am actively improving myself in these areas.', ', und ich bilde mich in diesen Bereichen aktiv weiter.')}
              </p>
            </div>
            <div className="pf-photo-wrap">
              <div className="pf-photo-frame">
                <img src="/benim-fotografim.png" alt="Hüseyin Can ERKILINÇ" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
              </div>
              <div className="pf-accent-corner" />
            </div>
          </div>
        </div>
      </section>

      <div className="pf-divider" />

      {/* SKILLS */}
      <section id="yetenekler" className="pf-section">
        <div className="pf-container">
          <div className="pf-section-tag">{t('Yetenekler', 'Skills', 'Fähigkeiten')}</div>
          <h2 className="pf-section-title">{t('Teknik Yetenek Seti', 'Technical Skillset', 'Technische Fähigkeiten')}</h2>
          <div className="pf-skills-grid">
            {skillsData.map((s, i) => (
              <div className="pf-skill-card" key={i}>
                <span className="pf-skill-icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <div className="pf-tags">{s.tags.map(tag => <span className="pf-tag" key={tag}>{tag}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="pf-divider" />

      {/* PROJECTS */}
      <section id="projeler" className="pf-section-alt">
        <div className="pf-container">
          <div className="pf-section-tag">{t('Projeler', 'Projects', 'Projekte')}</div>
          <h2 className="pf-section-title">{t('Geliştirdiğim Ürünler', 'Products I Build', 'Entwickelte Produkte')}</h2>
          <div className="pf-featured">
            {featuredProjects.map((p) => (
              <div className={`pf-feat-card ${p.cls}`} key={p.cls}>
                <div className="pf-feat-inner">
                  <div className="pf-feat-content">
                    <span className={`pf-feat-label ${p.cls}`}>{p.labelEmoji} {p.label}</span>
                    <h3>{p.title}</h3>
                    <div className="pf-feat-meta">
                      {p.meta.map(m => <span className="pf-feat-meta-tag" key={m}>{m}</span>)}
                    </div>
                    <p className="pf-feat-desc">{p.desc}</p>
                    <ul className="pf-feat-features">
                      {p.features.map((f, idx) => (
                        <li key={idx}>
                          <i className={`arr ${p.cls}`}>→</i>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pf-tech-row">
                      {p.tech.map(tag => <span className={`pf-tech-tag ${p.cls}`} key={tag}>{tag}</span>)}
                    </div>
                  </div>
                  <div className="pf-feat-visual">{p.visual}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="pf-divider" />

      {/* CONTACT */}
      <section id="iletisim" className="pf-section">
        <div className="pf-container">
          <div className="pf-contact-box">
            <div className="pf-contact-left">
              <div className="pf-section-tag">{t('İletişim', 'Contact', 'Kontakt')}</div>
              <h2>{t('Bir projen mi var?', 'Have a project?', 'Haben Sie ein Projekt?')}<br /><span className="pf-accent">{t('Konuşalım.', "Let's talk.", 'Lass uns reden.')}</span></h2>
              <p>{t('Yeni fırsatlar ve işbirlikleri için benimle iletişime geçebilirsiniz.', 'Feel free to reach out for new opportunities and collaborations.', 'Kontaktieren Sie mich für neue Möglichkeiten und Kooperationen.')}</p>
            </div>
            <div className="pf-contact-links">
              {contactLinks.map(c => (
                <a key={c.href} href={c.href} className="pf-contact-link" {...(c.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                  <div className="pf-contact-icon" style={{ background: c.bg }}>{c.icon}</div>
                  <div>
                    <div className="pf-contact-label">{c.label === 'Telefon' ? t('Telefon', 'Phone', 'Telefon') : c.label === 'E-posta' ? t('E-posta', 'Email', 'E-Mail') : c.label}</div>
                    <div className="pf-contact-val">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pf-footer">
        <p>© 2026 Hüseyin Can ERKILINÇ</p>
        <div className="pf-footer-links">
          <a href="https://github.com/CanErkilinc" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/can-erkilinc" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:hcanerlikinc@gmail.com">{t('E-posta', 'Email', 'E-Mail')}</a>
        </div>
      </footer>

    </div>
  )
}