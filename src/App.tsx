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
import { Project } from './types';

export const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : false; // Default to clean light studio mode like varneet.in
  });

  const [isCommandOpen, setIsCommandOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync theme with HTML class and localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
    showToast(!darkMode ? 'Switched to Dark Mode' : 'Switched to Light Studio Mode');
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
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-neo-bg text-neo-text selection:bg-neo-green selection:text-black transition-colors duration-300 overflow-x-hidden">
      {/* 3-Column Split Navigation */}
      <Navbar
        darkMode={darkMode}
        onToggleTheme={toggleTheme}
        onOpenCommand={() => setIsCommandOpen(true)}
      />

      {/* Main Content */}
      <main className="space-y-4">
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
