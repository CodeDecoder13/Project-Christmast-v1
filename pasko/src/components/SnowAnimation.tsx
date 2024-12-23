import { useEffect } from "react";

export default function SnowAnimation() {
  useEffect(() => {
    const container = document.querySelector(".snow-container")!;
    for (let i = 0; i < 50; i++) {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";
      snowflake.style.left = `${Math.random() * 100}%`;
      snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
      snowflake.style.fontSize = `${Math.random() * 10 + 10}px`;
      snowflake.textContent = "❄";
      container.appendChild(snowflake);
    }
  }, []);

  return <div className="snow-container"></div>;
}
