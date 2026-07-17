import React, {useContext} from "react";
import "./ResearchOpenSource.scss";
import StyleContext from "../../contexts/StyleContext";
import {openSource} from "../../portfolio";

export default function ResearchOpenSource() {
  const {isDark} = useContext(StyleContext);

  if (!openSource.display) {
    return null;
  }

  return (
    <div className="research-open-source-section" id="opensource">
      <h1 className="research-open-source-heading">{openSource.title}</h1>

      {openSource.subtitle && (
        <p
          className={
            isDark
              ? "research-open-source-subtitle dark-mode-text"
              : "research-open-source-subtitle"
          }
        >
          {openSource.subtitle}
        </p>
      )}

      <div className="research-open-source-card-container">
        {openSource.contributions.map((item, index) => (
          <div
            className={
              isDark
                ? "research-open-source-card dark-mode"
                : "research-open-source-card"
            }
            key={`${item.title}-${index}`}
          >
            <h2 className="research-open-source-card-title">{item.title}</h2>

            {item.organization && (
              <p className="research-open-source-organization">
                {item.organization}
              </p>
            )}

            <p className="research-open-source-description">
              {item.description}
            </p>

            {item.contributions?.length > 0 && (
              <ul className="research-open-source-list">
                {item.contributions.map((contribution, contributionIndex) => (
                  <li key={contributionIndex}>{contribution}</li>
                ))}
              </ul>
            )}

            {item.links?.length > 0 && (
              <div className="research-open-source-links">
                {item.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="research-open-source-link"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}