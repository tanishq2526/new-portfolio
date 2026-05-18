export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
      <span className="theme-toggle__icon" aria-hidden="true">
        {theme === 'dark' ? '☀️' : '🌙'}
      </span>
      <span className="theme-toggle__label">{theme === 'dark' ? 'Light' : 'Dark'}</span>
    </button>
  );
}
