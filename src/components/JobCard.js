"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function JobCard({ image, title, sector, salary, baseUrl, animate }) {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  const handleNavigation = () => {
    router.push(`/${baseUrl}`);
  };

  return (
    <div
      onClick={handleNavigation}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        display: "flex",
        alignItems: "flex-end",
        borderRadius: "10px",
        backgroundColor: "black",
        margin: "5px",
        overflow: "hidden",
        position: "relative",
        minHeight: "150px",
        "@media (maxWidth: 600px)": {
          backgroundSize: "contain",
          backgroundPosition: "center",
        },
      }}
      onMouseEnter={() => setIsHovered(true)} // Set hover state to true
      onMouseLeave={() => setIsHovered(false)} // Reset hover state
    >
      {/* Text Section */}
      <div
        style={{
          backgroundColor: "rgba(59, 130, 246, 0.3)",
          padding: "8px",
          borderRadius: "8px",
          width: "100%",
          color: "white",
          transition: "all 0.3s ease",
          wordBreak: "break-word",
          margin: "8px",
          // Apply animation only when animate is true and hovered
          ...(animate && isHovered
            ? {
                animation: "slideUp 0.5s ease-out forwards",
                position: "relative",
              }
            : animate && !isHovered
            ? {
                transform: "translateY(100%)", // Start off-screen when not hovered
                opacity: 0, // Hidden when not hovered
                position: "relative",
              }
            : {}),
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "black";
          e.currentTarget.style.color = "white";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "rgb(34 75 255 / 71%)";
          e.currentTarget.style.color = "white";
        }}
      >
        <h2 style={{ fontSize: "14px", fontWeight: "bold", color: "inherit" }}>{title}</h2>
        <p style={{ fontSize: "12px", color: "inherit" }}>
          {sector} - {salary}
        </p>
      </div>

      {/* Inline CSS for the animation */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}