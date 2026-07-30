export function VastuCompass() {
  return (
    <div className="vastu-compass" aria-label="Decorative Vastu compass showing directions">
      <span className="north">N</span>
      <span className="east">E</span>
      <span className="south">S</span>
      <span className="west">W</span>
      <div className="compass-ring" />
      <div className="compass-needle" />
      <strong>Vastu</strong>
    </div>
  );
}

