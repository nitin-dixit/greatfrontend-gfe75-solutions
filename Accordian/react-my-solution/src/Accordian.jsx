import { useState } from "react";

export default function Accordion() {
  const [collapsed, setCollapsed] = useState({
    html: true,
    css: true,
    javascript: true,
  });

  const toggle = (key) => {
    setCollapsed((prev) => ({ ...prev, [key]: !prev[key] }));
    if (collapsed) {
    }
  };
  console.log(collapsed);
  return (
    <div className="accordion-container">
      <div className="accordion" aria-expanded={!collapsed.html}>
        <div className="accordion-title" onClick={() => toggle("html")}>
          HTML{" "}
          <span
            aria-hidden={true}
            className={
              collapsed.html ? "accordion-icon" : "accordion-icon--rotated"
            }
          />
        </div>
        <div className="accordion-content" hidden={collapsed.html}>
          The HyperText Markup Language or HTML is the standard markup language
          for documents designed to be displayed in a web browser.
        </div>
      </div>
      <div className="accordion" aria-expanded={!collapsed.css}>
        <div className="accordion-title" onClick={() => toggle("css")}>
          CSS{" "}
          <span
            aria-hidden={true}
            className={
              collapsed.css ? "accordion-icon" : "accordion-icon--rotated"
            }
          />
        </div>
        <div className="accordion-content" hidden={collapsed.css}>
          Cascading Style Sheets is a style sheet language used for describing
          the presentation of a document written in a markup language such as
          HTML or XML.
        </div>
      </div>
      <div className="accordion" aria-expanded={!collapsed.javascript}>
        <div className="accordion-title" onClick={() => toggle("javascript")}>
          JavaScript{" "}
          <span
            aria-hidden={true}
            className={
              collapsed.javascript
                ? "accordion-icon"
                : "accordion-icon--rotated"
            }
          />
        </div>
        <div className="accordion-content" hidden={collapsed.javascript}>
          JavaScript, often abbreviated as JS, is a programming language that is
          one of the core technologies of the World Wide Web, alongside HTML and
          CSS.
        </div>
      </div>
    </div>
  );
}
