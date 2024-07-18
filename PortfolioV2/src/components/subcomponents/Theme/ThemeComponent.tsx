import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts";

const themeComponentWrapperStyle = {
  display: "flex",
  justifyContent: "space-between",
  width: "100px",
  position: "fixed",
  zIndex: 999,
} as React.CSSProperties;

const themeButtonStyle = {
  color: "black",
} as React.CSSProperties;

function ThemeComponent() {
  const { currentTheme, setCurrentTheme, ThemeOptions } =
    useContext(ThemeContext);

  return (
    <>
      <div style={themeComponentWrapperStyle}>
        {ThemeOptions.map((id) => {
          return (
            <button
              style={themeButtonStyle}
              onClick={() => {
                if (setCurrentTheme) return setCurrentTheme(id);
              }}
            >
              {id}
            </button>
          );
        })}
        <div className={currentTheme}>
          <div
            style={{
              width: "100%",
              height: "30px",
              borderRadius: "30px",
            }}
          >
            <p className="theme-child">{currentTheme}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThemeComponent;
