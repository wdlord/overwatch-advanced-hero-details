/* eslint-disable react/prop-types */
import "./AbilityRows.css";

export function AbilityIcon({
  index,
  selector,
  setSelector,
  ability,
  isSubRow,
}) {
  let isActive = isSubRow
    ? selector.subIndex == index
    : selector.index == index;
  return (
    <div
      className={
        "ability-icon" +
        (ability.isUltimate ? " ultimate" : "") +
        (isActive ? " active" : "")
      }
      onClick={() => {
        // there should be different behavior depending on whether this is the main row or the sub-row.
        if (isSubRow) {
          setSelector({ ...selector, subIndex: index });
        } else {
          setSelector({ index: index, subIndex: 0 });
        }
      }}
    >
      <img src={"/src/assets/images/" + ability.icon} title={ability.name} />
    </div>
  );
}

export function AbilityRow({ selector, setSelector, abilityList, isSubRow }) {
  let abilities = [];
  for (let i in abilityList) abilities[i] = i;

  return (
    <div className="ability-row">
      {abilities.map((index) => {
        return (
          <AbilityIcon
            key={index}
            index={index}
            selector={selector}
            setSelector={setSelector}
            ability={abilityList[index]}
            isSubRow={isSubRow}
          />
        );
      })}
    </div>
  );
}
