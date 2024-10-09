"use client";
import useUpdateMenu from '@/hooks/updateMenuHook';
import Image from 'next/image';
import Link from 'next/link';

const ContentWrapper: React.FC = () => {
  useUpdateMenu();
  return (
    <div className="content-wrapper">
      <div className="language-link-wrapper">
        <Link
          className='"external-link language-link english"'
          href="/en/index.html"
          aria-label="Odnośnik do angielskiej wersji strony (otwarcie w tym samym oknie)"
          title="Odnośnik do angielskiej wersji strony"
        >
          <span className="sr-only">Odnośnik do angielskiej wersji strony</span>
        </Link>
      </div>
      <header className="header-wrapper">
        <div className="header-presentation-wrapper">
          <div className="presentation-info">
            <h1>
              <div className="logo-wrapper">
                <Image
                  src="/assets/images/logo.svg"
                  alt="Napis 'Tomcat .DevStudio' złozony z czarnych liter z niebieskimi ozdobami na literach A i V"
                  className="logo-image"
                  width={200}
                  height={100}
                />
              </div>
              <span className="sr-only">Tomcat Dev Studio</span>
            </h1>
            <h2>Piotr Tomczak - Frontend Developer</h2>
            <p>Tworzę szybkie i skalowalne aplikacje internetowe uwzględniające potrzeby swoich klientów.</p>
          </div>
          <nav className="navigation-wrapper" id="navigation-menu">
            <ul className="navigation-menu">
              <li>
                <a className="navigation-link" href="#about">
                  <span className="indicator"></span>
                  <span className="navigation-link-content">O mnie</span>
                </a>
              </li>
              <li>
                <a className="navigation-link" href="#experience">
                  <span className="indicator"></span>
                  <span className="navigation-link-content">Doświadczenie</span>
                </a>
              </li>
              <li>
                <a className="navigation-link" href="#projects">
                  <span className="indicator"></span>
                  <span className="navigation-link-content">Projekty</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <ul className="social-links">
          <li>
            <a
              href="https://github.com/tomcatmi6"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Odnośnik do repozytoriów Piotra Tomczaka na Github (otwiera nową zakładkę)"
              title="Github"
            >
              <span className="sr-only">
                Odnośnik do profilu Piotra Tomczaka na Github (otwiera nową zakładkę)
              </span>
              <Image
                src="/assets/icons/github.svg"
                alt="Github - logo przedstawiające symbol portalu GitHub"
                className="social-icon"
                width={24}
                height={24}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/piotr-tomczak-482320142/"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Odnośnik do profilu Piotra Tomczaka na Linkedin (otwiera nową zakładkę)"
              title="Linkedin"
            >
              <span className="sr-only">
                Odnośnik do profilu Piotra Tomczaka na Linkedin (otwiera nową zakładkę)
              </span>
              <Image
                src="/assets/icons/linkedin.svg"
                alt="LinkedIn logo - czarne litery l n na białym tle"
                className="social-icon"
                width={24}
                height={24}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/tomcatmi6"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Odnośnik do profilu Piotra Tomczaka na Instagramie (otwiera nową zakładkę)"
              title="Instagram"
            >
              <span className="sr-only">
                Odnośnik do profilu Piotra Tomczaka na Instagram (otwiera nową zakładkę)
              </span>
              <Image
                src="/assets/icons/instagram.svg"
                alt="Logo Instagrama - czarno biała ikona symolizująca obiektywy telefonu"
                className="social-icon"
                width={24}
                height={24}
              />
            </a>
          </li>
        </ul>
      </header>
      <main id="content" className="main-wrapper">
        <section id="about" className="main-section" aria-label="Informacje osobiste">
          <h2>
            <span className="heading-title-decoration">O mnie</span>
          </h2>
          <p className="personal-info-content">
            Cześć! Jestem Piotr Tomczak, frontend developer z ponad 6-letnim doświadczeniem w tworzeniu aplikacji internetowych.
          </p>
          <p className="personal-info-content">
            Moją przygodę z frontendem rozpocząłem w nowo powstałym software house -{' '}
            <a className="external-link" href="https://solveestudio.com/" target="_blank" rel="noopener noreferrer">
              Solvee Studio
            </a>.
          </p>
          <p className="personal-info-content">
            W swojej pracy korzystam z najnowszych technologii - takich jak HTML5, CSS3, JavaScript, React - oraz stawiam na jakość kodu.
          </p>
        </section>
        {/* Analogicznie pozostałe sekcje i artykuły w experience */}
      </main>
    </div>
  );
};

export default ContentWrapper;