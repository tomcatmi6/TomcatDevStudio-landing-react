import { useEffect, useState } from 'react';

const useUpdateMenu = () => {
  const [currentSection, setCurrentSection] = useState<string | null>(null);

  useEffect(() => {
    const updateMenu = () => {
      const menuLinks = document.querySelectorAll('#navigation-menu a');
      const sections = document.querySelectorAll('section');

      let newCurrentSection: string | null = null;
      const offset = 100;
      const scrollPosition = window.pageYOffset;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop - offset &&
          scrollPosition < sectionTop + sectionHeight - offset
        ) {
          newCurrentSection = section.getAttribute('id');
        }
      });

      setCurrentSection(newCurrentSection);

      menuLinks.forEach((link) => {
        link.classList.remove('active');
      });

      if (newCurrentSection) {
        const activeLink = document.querySelector(
          `#navigation-menu a[href="#${newCurrentSection}"]`
        );
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    };

    window.addEventListener('scroll', updateMenu);
    window.addEventListener('load', updateMenu);

    return () => {
      window.removeEventListener('scroll', updateMenu);
      window.removeEventListener('load', updateMenu);
    };
  }, []);
};

export default useUpdateMenu;