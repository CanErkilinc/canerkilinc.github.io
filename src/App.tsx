import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <img 
              src="/profile.png" 
              alt="Hüseyin Can ERKILINÇ" 
              className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-purple-500 shadow-2xl"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Hüseyin Can ERKILINÇ
          </h1>
          <p className="text-2xl md:text-3xl text-purple-300 mb-8">
            Full Stack Developer & Software Engineer
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="tel:+905071638449" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
              📞 +90 507 163 84 49
            </a>
            <a href="mailto:hcanerlikinc@gmail.com" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
              📧 E-posta
            </a>
            <a href="https://www.linkedin.com/in/can-erkilinc" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
              🔗 LinkedIn
            </a>
            <a href="https://github.com/CanErkilinc" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
              💻 GitHub
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black bg-opacity-30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Hakkımda</h2>
          <div className="bg-slate-800 bg-opacity-50 p-8 rounded-lg shadow-2xl">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Sistem yönetimi ve yazılım geliştirme bilgisine sahip bir bilişim uzmanı olarak, yeni mezun bir yazılım geliştirici sıfatıyla uçtan uca Full Stack çözümler geliştirme yeteneğine sahibim.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Ağırlıklı olarak <span className="text-purple-400 font-semibold">Java Backend</span> geliştirme alanında uzmanlaşmakla birlikte, Frontend ve altyapı süreçlerinde de deneyimliyim.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
  Özel ilgim <span className="text-purple-400 font-semibold">siber güvenlik ve yapay zeka</span> alanında olup, bu konuda aktif olarak kendimi geliştirmekteyim.</p>
          </div>
        </div>
      </section>
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Teknik Yetenekler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800 bg-opacity-50 p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Programlama Dilleri</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Java</li>
                <li>• Swift</li>
                <li>• Python</li>
              </ul>
            </div>
            <div className="bg-slate-800 bg-opacity-50 p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Backend / Frameworkler</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Spring Boot</li>
                <li>• RESTful API</li>
                <li>• OOP Prensipleri</li>
              </ul>
            </div>
            <div className="bg-slate-800 bg-opacity-50 p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Web Geliştirme</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• HTML</li>
                <li>• CSS</li>
                <li>• JavaScript</li>
                <li>• React</li>
                <li>• Responsive Tasarım</li>
              </ul>
            </div>
            <div className="bg-slate-800 bg-opacity-50 p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Veritabanları</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• MySQL</li>
                <li>• PostgreSQL</li>
                <li>• Firebase</li>
              </ul>
            </div>
            <div className="bg-slate-800 bg-opacity-50 p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Versiyon Kontrolü</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Git</li>
                <li>• GitHub</li>
                <li>• Proje Dokümantasyonu</li>
              </ul>
            </div>
            <div className="bg-slate-800 bg-opacity-50 p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Mobil Geliştirme</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• iOS (Swift)</li>
                <li>• Firebase Entegrasyonu</li>
              </ul>
            </div>
            <div className="bg-slate-800 bg-opacity-50 p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">DevOps / Container</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Docker</li>
                <li>• Geliştirme ortamı kurulumu</li>
              </ul>
            </div>
            <div className="bg-slate-800 bg-opacity-50 p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">İşletim Sistemleri</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Windows</li>
                <li>• Linux</li>
                <li>• Active Directory</li>
                <li>• IIS & Tomcat</li>
              </ul>
            </div>
            <div className="bg-slate-800 bg-opacity-50 p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Ağ & Donanım</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• TCP/IP</li>
                <li>• LAN/WAN</li>
                <li>• Router/Switch</li>
                <li>• VPN</li>
                <li>• Güvenlik Duvarı</li>
              </ul>
            </div>
            <div className="bg-slate-800 bg-opacity-50 p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Sanal Sunucu & Yedekleme</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• VMware</li>
                <li>• Hyper-V</li>
                <li>• Temel yedekleme çözümleri</li>
              </ul>
            </div>
            <div className="bg-slate-800 bg-opacity-50 p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Genel IT Becerileri</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Problem çözme</li>
                <li>• Teknik destek</li>
                <li>• Güvenlik farkındalığı</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black bg-opacity-30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Projeler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">🏥 Hastane Randevu Sistemi</h3>
              <p className="text-gray-400 mb-3">Full Stack - Hasta ve doktor randevu yönetimi</p>
              <span className="text-sm text-purple-400">Java • Spring Boot • React</span>
            </div>
            <div className="bg-slate-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">📚 Kütüphane Yönetim Sistemi</h3>
              <p className="text-gray-400 mb-3">Kitap ödünç alma ve kullanıcı yönetimi</p>
              <span className="text-sm text-purple-400">Java • Backend</span>
            </div>
            <div className="bg-slate-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">🧑‍🏫 Öğretmen-Öğrenci Kurs Yönetim Sistemi</h3>
              <p className="text-gray-400 mb-3">Kullanıcı kaydı, kurs atama ve yoklama yönetimi özelliklerine sahip backend uygulaması.</p>
              <span className="text-sm text-purple-400">Java • Backend</span>
            </div>
            <div className="bg-slate-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">🖥️ Kullanıcı Yönetim Sistemi (ASP .NET Core – geliştirme aşamasında)</h3>
              <p className="text-gray-400 mb-3">Web tabanlı admin paneli; kullanıcı kaydı, giriş ve şifre sıfırlama işlemleri.</p>
              <span className="text-sm text-purple-400">ASP .NET Core</span>
            </div>
            <div className="bg-slate-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">🛍️ Alışveriş Listesi Uygulaması</h3>
              <p className="text-gray-400 mb-3">Alışveriş listesi oluşturma ve düzenleme özelliklerine sahip mobil uygulama.</p>
              <span className="text-sm text-purple-400">Swift / iOS</span>
            </div>
            <div className="bg-slate-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">🌍 Şehir Rehberi Uygulaması.</h3>
              <p className="text-gray-400 mb-3">Türk şehirleri hakkında bilgiler içeren tanıtım uygulaması.</p>
              <span className="text-sm text-purple-400">Swift / iOS</span>
            </div>
            <div className="bg-slate-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">🗺️ Harita Uygulaması</h3>
              <p className="text-gray-400 mb-3">Kullanıcının mevcut konumunu harita üzerinde gösteren uygulama.</p>
              <span className="text-sm text-purple-400">Swift / iOS</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">İletişim</h2>
          <div className="bg-slate-800 bg-opacity-50 p-8 rounded-lg shadow-2xl">
            <p className="text-gray-300 text-lg mb-8">
              Projeleriniz için benimle iletişime geçebilirsiniz!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="tel:+905071638449" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 block">
                📞 +90 507 163 84 49
              </a>
              <a href="mailto:hcanerlikinc@gmail.com" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 block">
                📧 hcanerlikinc@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-black bg-opacity-50 text-center">
        <p className="text-gray-400">© 2026 Hüseyin Can ERKILINÇ</p>
      </footer>
    </div>
  )
}

export default App
// Deploy fix - 26 Oca 2026 Pts +03 14:02:34
