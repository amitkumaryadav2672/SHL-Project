import { useState } from "react";

const ResultCard = ({ item, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="card">
      {/* HEADER */}
      <div
        className="card-header"
        onClick={() => setOpen(!open)}
      >
        <h3>Assessment {index + 1}</h3>
        <span className="arrow">{open ? "▲" : "▼"}</span>
      </div>

      {/* EXPANDED CONTENT */}
      {open && (
        <div className="card-body">
          <div className="field">
            <strong>Assessment Query:</strong>
            <p>{item.query}</p>
          </div>

          <div className="field">
            <strong>Assessment URL:</strong>

            <a
              href={item.assessment_url || item.Assessment_url}
              target="_blank"
              rel="noreferrer"
              className="assessment-link"
              onClick={(e) => {
                e.stopPropagation(); // 👈 KEY LINE
              }}
            >
              {item.assessment_url}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultCard;
