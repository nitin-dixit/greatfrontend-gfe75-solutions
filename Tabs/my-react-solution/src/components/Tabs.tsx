import { useState } from "react";
import { CssTab } from "./CssTab";
import { HtmlTab } from "./HtmlTab";
import { JavaScriptTab } from "./JavascriptTab";

export const Tabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  interface Tab {
    name: string;
    component: React.ElementType;
  }

  const handleTabChange = (index: number): void => {
    setActiveIndex(index);
    console.log(activeIndex);
  };

  const tabs: Tab[] = [
    {
      name: "HTML",
      component: HtmlTab,
    },
    {
      name: "CSS",
      component: CssTab,
    },
    {
      name: "JAVASCRIPT",
      component: JavaScriptTab,
    },
  ];

  const ActiveTabComponent = tabs[activeIndex].component;
  return (
    <div className="wrapper">
      <div className="tabRow">
        {tabs.map((t, index) => (
          <button
            key={index}
            onClick={() => handleTabChange(index)}
            className={index === activeIndex ? "active" : ""}
          >
            {t.name}
          </button>
        ))}
      </div>
      <div className="tabBody">
        <ActiveTabComponent></ActiveTabComponent>
      </div>
    </div>
  );
};
