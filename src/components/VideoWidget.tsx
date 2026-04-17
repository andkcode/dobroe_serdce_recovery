import { useState, useRef } from "react";

export default function VideoWidget() {
  const [expanded, setExpanded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const thumbSrc =
    "https://kinescope.io/embed/v4FeVNZwyDJ2Ph9p8tT7hA?behavior[autoPlay]=true&behavior[loop]=true&behavior[muted]=true";
  const expandedSrc =
    "https://kinescope.io/embed/v4FeVNZwyDJ2Ph9p8tT7hA?behavior[autoPlay]=true&behavior[muted]=false";

  return (
    <>
      <div className={`video-widget ${expanded ? "video-widget--expanded" : ""}`}>
        {!expanded && (
          <div className="video-widget__thumb" onClick={() => setExpanded(true)}>
            <iframe
              ref={iframeRef}
              src={thumbSrc}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer"
              allowFullScreen
              style={{ borderRadius: "12px", pointerEvents: "none" }}
            />
            <div className="video-widget__play-overlay">
              <svg width="48" height="48" viewBox="0 0 130 130" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M65 130c35.899 0 65-29.101 65-65 0-35.898-29.101-65-65-65C29.102 0 0 29.102 0 65c0 35.899 29.102 65 65 65zm23.991-65.509L52.901 42.6v43.784l36.09-21.892z"
                  fill="#fff"
                />
              </svg>
            </div>
          </div>
        )}

        {expanded && (
          <div className="video-widget__expanded">
            <button
              className="video-widget__collapse"
              onClick={() => setExpanded(false)}
              aria-label="Minimize video"
            >
              ✕
            </button>
            <iframe
              src={expandedSrc}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer"
              allowFullScreen
              style={{ borderRadius: "12px" }}
            />
          </div>
        )}
      </div>
    </>
  );
}
