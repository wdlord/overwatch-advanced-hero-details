/* eslint-disable react/prop-types */
import "./HeroStats.css";

// Health UI is represented as 25 hp blocks with different color for each health type.
function createHealthSegments(health) {
  let segments = [];

  let hpBlockCount = health.hp != 0 ? health.hp / 25 : 0;
  let hpArr = Array(hpBlockCount);
  hpArr.fill("hp");
  segments = segments.concat(hpArr);

  let armorBlockCount = health.armor != 0 ? health.armor / 25 : 0;
  let armorArr = Array(armorBlockCount);
  armorArr.fill("armor");
  segments = segments.concat(armorArr);

  let shieldBlockCount = health.shield != 0 ? health.shield / 25 : 0;
  let shieldArr = Array(shieldBlockCount);
  shieldArr.fill("shield");
  segments = segments.concat(shieldArr);

  return segments;
}

// Total combined HP, shield, and armor.
function calculateHealth(health) {
  return health.hp + health.armor + health.shield;
}

function HeroStats({ heroDetails }) {
  let segments = createHealthSegments(heroDetails.health);
  let healthTotal = calculateHealth(heroDetails.health);

  return (
    <div className="hero-stats">
      <div className="headshot-container">
        <div className="headshot">
          <div className="dark-shape">
            <div className="white-bg">
              <img src={"/src/assets/images/" + heroDetails.headshot} />
            </div>
          </div>
        </div>
      </div>
      <div className="right-side">
        <div className="name-and-role">
          <h1>{heroDetails.name}</h1>
          <div className="role-container">
            <div className="role">
              <img
                src={
                  "/src/assets/images/role-" + heroDetails.role + "-icon.png"
                }
              />
            </div>
          </div>
        </div>
        <div className="hit-points">
          <div className="hp-blocks">
            {segments.map((block, index) => {
              return <div key={index} className={block}></div>;
            })}
          </div>
          <h2>{healthTotal + " HP"}</h2>
        </div>
      </div>
    </div>
  );
}

export default HeroStats;
