import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds, defaultSection = sectionIds[0]) {
  const [activeSection, setActiveSection] = useState(defaultSection);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const lastSectionId = sectionIds[sectionIds.length - 1];

    const updateActiveSection = () => {
      const viewportTrigger = window.innerHeight * 0.55;
      const pageBottom = window.innerHeight + window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;

      if (pageBottom >= scrollHeight - 8) {
        setActiveSection(lastSectionId);
        return;
      }

      let nextActiveSection = defaultSection;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= viewportTrigger) {
          nextActiveSection = section.id;
        }
      });

      setActiveSection(nextActiveSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [defaultSection, sectionIds]);

  return activeSection;
}
