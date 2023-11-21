/* eslint-disable react/prop-types */
import { useState } from "react";
import { AbilityRow } from "./AbilityRows";
import "./DetailView.css";

function DetailView({ heroDetails, selector, setSelector }) {
  let ability = null;
  let abilityList = [];
  let subAbilityList = [];
  let displaySubRow = false;

  // let [selector, setSelector] = useState({ index: 0, subIndex: 0 });
  let [isWeapon, setIsWeapon] = useState(true);

  // Selects the ability list (left row), sub ability list (right row), and ability to actually be displayed.
  if (isWeapon) {
    abilityList = heroDetails.weapons;
    subAbilityList = abilityList[selector.index].abilities;
    ability = subAbilityList[selector.subIndex];
  } else {
    abilityList = heroDetails.abilities;
    subAbilityList = [];
    ability = abilityList[selector.index];
    // Indicates a sub-ability.
    if (ability.abilities) {
      subAbilityList = ability.abilities;
      ability = subAbilityList[selector.subIndex];
    }
  }

  displaySubRow = subAbilityList.length > 1;

  return (
    <div className="detail-view">
      <div className="tabs">
        <div
          className={"tab" + (isWeapon ? " active" : "")}
          onClick={() => {
            setIsWeapon(true);
            setSelector({ index: 0, subIndex: 0 });
          }}
        >
          Weapons
        </div>
        <div
          className={"tab" + (!isWeapon ? " active" : "")}
          onClick={() => {
            setIsWeapon(false);
            setSelector({ index: 0, subIndex: 0 });
          }}
        >
          Abilities
        </div>
      </div>
      <div className={"window" + (!isWeapon ? " abilities" : "")}>
        <div className="preview">
          <h2 className="weapon-name">{ability.name}</h2>
          <img
            className="screenshot"
            src={"/src/assets/images/" + ability.preview}
          />
          {
            <AbilityRow
              selector={selector}
              setSelector={setSelector}
              abilityList={abilityList}
              isSubRow={false}
            />
          }
        </div>
        <div className="details-container">
          <div className="details">
            <div className="detail-head">
              <div className="ability-icon-static">
                <img src={"/src/assets/images/" + ability.icon} />
                <h2>{ability.display}</h2>
              </div>
              <h1>{ability.name}</h1>
              <h2 className="hotkey">{ability.hotkey}</h2>
            </div>
            <p>{ability.description}</p>
            <table>
              <tbody>
                {ability.stats.map((statLine, index) => {
                  return (
                    <tr key={index}>
                      <td>{statLine[0] + ":"}</td>
                      <td>{statLine[1]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {displaySubRow ? (
            <AbilityRow
              selector={selector}
              setSelector={setSelector}
              abilityList={subAbilityList}
              isSubRow={true}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default DetailView;
