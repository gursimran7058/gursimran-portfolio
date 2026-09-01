import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CredentialsSection } from './components/CredentialsSection';
import { NowSection } from './components/NowSection';
import { ProjectBento } from './components/ProjectBento';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { CommandPalette } from './components/CommandPalette';
import { ProjectModal } from './components/ProjectModal';
import { Toast } from './components/Toast';
import { InteractiveAura } from './components/InteractiveAura';
import { ThemeCustomizerModal, TypographyMode } from './components/ThemeCustomizerModal';
import { EasterEggBanner } from './components/EasterEggBanner';
import { sound } from './utils/audio';
import { Project } from './types';

export const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  const [typography, setTypography] = useState<TypographyMode>(() => {
    const saved = localStorage.getItem('typography');
    return (saved as TypographyMode) || 'bold-asymmetric';
  });

  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState<boolean>(false);
  const [isEasterEggOpen, setIsEasterEggOpen] = useState<boolean>(false);
  const [isCommandOpen, setIsCommandOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync dark theme with HTML class and localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Sync typography preset with HTML data attribute and localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-typography', typography);
    localStorage.setItem('typography', typography);
  }, [typography]);

  // Sync sound setting with sound system
  useEffect(() => {
    sound.enabled = soundEnabled;
  }, [soundEnabled]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
    showToast(!darkMode ? 'Switched to Midnight Dark Mode 🌙' : 'Switched to Studio Light Mode ☀️');
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('gursimran7058@gmail.com');
    showToast('Copied email: gursimran7058@gmail.com');
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+91 7508002768');
    showToast('Copied phone: +91 7508002768');
  };

  // Keyboard shortcut listener for Command Palette (⌘K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandOpen((prev) => !prev);
        sound.playClick(600, 'sine');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-neo-bg text-neo-text selection:bg-emerald-500 selection:text-black transition-colors duration-400 overflow-x-hidden relative neo-grid-bg">
      {/* Interactive Cursor Aura Spotlight & Spark Explosions */}
      <InteractiveAura />

      {/* Navigation */}
      <Navbar
        darkMode={darkMode}
        onToggleTheme={toggleTheme}
        onOpenCommand={() => setIsCommandOpen(true)}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
        onTriggerEasterEgg={() => setIsEasterEggOpen(true)}
        currentTypography={typography}
        onSelectTypography={(t) => {
          setTypography(t);
          showToast(`Applied ${t.replace('-', ' ').toUpperCase()} typography! ✒️`);
        }}
      />

      {/* Main Content with Increased Whitespace for Minimalism */}
      <main className="space-y-12 sm:space-y-16 relative z-10">
        <HeroSection
          onCopyEmail={handleCopyEmail}
          onCopyPhone={handleCopyPhone}
          onShowToast={showToast}
        />

        {/* Academic Honors & Certifications Showcase */}
        <CredentialsSection />

        {/* What I'm Doing Now */}
        <NowSection />

        {/* Featured Ventures & Operations */}
        <ProjectBento
          onSelectProject={(project) => setSelectedProject(project)}
          onShowToast={showToast}
        />

        {/* Roadmap & Experience */}
        <ExperienceSection />

        {/* Contact */}
        <ContactSection
          onCopyEmail={handleCopyEmail}
          onCopyPhone={handleCopyPhone}
          onShowToast={showToast}
        />
      </main>

      {/* Aesthetic Studio Modal */}
      <ThemeCustomizerModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        darkMode={darkMode}
        onToggleTheme={toggleTheme}
        currentTypography={typography}
        onSelectTypography={(t) => {
          setTypography(t);
          showToast(`Applied ${t.replace('-', ' ').toUpperCase()} typography! ✒️`);
        }}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled(!soundEnabled)}
      />

      {/* Easter Egg Achievement Modal */}
      <EasterEggBanner
        isOpen={isEasterEggOpen}
        onClose={() => setIsEasterEggOpen(false)}
      />

      {/* Global ⌘K Command Palette Modal */}
      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        onSelectProject={(project) => setSelectedProject(project)}
        onCopyEmail={handleCopyEmail}
        onCopyPhone={handleCopyPhone}
        onShowToast={showToast}
      />

      {/* Project Case Study Drawer */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onShowToast={showToast}
      />

      {/* Toast Notification */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
};

export default App;
