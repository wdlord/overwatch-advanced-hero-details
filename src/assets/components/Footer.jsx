/* eslint-disable react/prop-types */
import "./Footer.css";

function Footer({ heroSelection, setHeroSelection, setSelector }) {
  let options = ["genji", "brigitte", "dva"];
  let names = ["Genji", "Brigitte", "D.Va"];
  let activeIndex = options.indexOf(heroSelection);
  return (
    <div className="navigation-area">
      <div className="hero-row">
        {options.map((op, index) => {
          return (
            <h2
              key={index}
              className={activeIndex == index ? "active" : ""}
              onClick={() => {
                setSelector({ index: 0, subIndex: 0 });
                setHeroSelection(options[index]);
              }}
            >
              {names[index]}
            </h2>
          );
        })}
      </div>
      <div className="navigation-button">
        <h5>ESC</h5>
        <h6>BACK</h6>
      </div>
    </div>
  );
}

export default Footer;
