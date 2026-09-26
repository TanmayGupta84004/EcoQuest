import './ProgressBar.css';

function ProgressBar({ value = 0, max = 100, label = '', showPercent = true, size = 'md', color = 'primary' }) {
  const percent = Math.min(Math.round((value / max) * 100), 100);

  return (
    <div className={`progress-bar-wrapper progress-bar--${size}`}>
      {label && <span className="progress-bar-label">{label}</span>}
      <div className="progress-bar-track">
        <div
          className={`progress-bar-fill progress-bar--${color}`}
          style={{ width: `${percent}%` }}
        />
      </div>
      {showPercent && <span className="progress-bar-percent">{percent}%</span>}
    </div>
  );
}

export default ProgressBar;
