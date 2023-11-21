export const genji = {
  name: "Genji",
  headshot: "genji-headshot.webp",
  role: "dps",
  health: {
    hp: 200,
    armor: 0,
    shield: 0,
  },
  weapons: [
    {
      name: "Shurikens",
      icon: "genji-shurikens.png",
      abilities: [
        {
          name: "Shuriken Toss",
          icon: "genji-shurikens.png",
          preview: "genji-preview-shuriken-toss.png",
          description: "Throws 3 shurikens in quick succession.",
          hotkey: "MB 1",
          display: "30",
          stats: [
            ["Capacity", "30"],
            ["Fire Rate", "3 shurikens / 1.14 seconds"],
            ["Damage", "27 per shuriken"],
            ["Crit", "2x on Headshot"],
            ["Reload Time", "1.5 seconds"],
            ["Projectile Speed", "60 m/s"],
          ],
        },
        {
          name: "Fan of Blades",
          icon: "genji-shurikens.png",
          preview: "genji-preview-fan-of-blades.png",
          description: "Throws a fan of 3 shurikens at once.",
          hotkey: "MB 2",
          display: "30",
          stats: [
            ["Capacity", "30"],
            ["Fire Rate", "3 shurikens / 1.14 seconds"],
            ["Damage", "27 per shuriken"],
            ["Crit", "2x on Headshot"],
            ["Reload Time", "1.5 seconds"],
            ["Projectile Speed", "60 m/s"],
          ],
        },
      ],
    },
  ],
  abilities: [
    {
      name: "Cyber Agility",
      icon: "genji-cyber-agility.png",
      preview: "genji-preview-cyber-agility.png",
      description:
        "Genji can double-jump and climb walls. Landing on ledges allows Genji to mantle them.",
      hotkey: "Passive",
      display: "",
      stats: [["Climb Max Duration", "1 second"]],
    },
    {
      name: "Swift Strike",
      icon: "genji-swift-strike.png",
      preview: "genji-preview-swift-strike.png",
      description:
        "Genji rapidly dashes forward, damaging all enemies in his path. Any eliminations by Genji will reset the cooldown.",
      hotkey: "L-Shift",
      display: "8s",
      stats: [
        ["Damage", "50"],
        ["Cooldown", "8 seconds"],
        ["Duration", "0.3 seconds"],
        ["Move Speed", "50 m/s"],
      ],
    },
    {
      name: "Deflect",
      icon: "genji-deflect.png",
      preview: "genji-preview-deflect.png",
      description:
        "Genji Deflects enemy abilities in the direction he is aiming. Blocks melee type attacks, beam attacks are unaffected. Pressing the ability hotkey again while active cancels the ability.",
      hotkey: "E",
      display: "8s",
      stats: [
        ["Cooldown", "8 seconds"],
        ["Duration", "2 seconds"],
      ],
      details:
        "Any projectile deflected is treated as Genji's and its damage falloff is reset. Beam abilities are unaffected by deflect.",
    },
    {
      name: "Dragon Blade",
      icon: "genji-dragon-blade.png",
      preview: "genji-preview-dragon-blade.png",
      isUltimate: true,
      description:
        "Genji unsheathes his katana to slash enemies with high damage strikes. Activating Dragonblade resets the cooldown of Swift Strike. Shuriken ammo is reset at the end of the ability.",
      hotkey: "Q",
      display: "",
      stats: [
        ["Damage", "110 per swing"],
        ["Range", "5 meters"],
        ["Fire Rate", "0.9 seconds"],
        ["Duration", "6 seconds"],
        ["Cast/Sheathe Time", "1 second"],
      ],
    },
  ],
};

export const brigitte = {
  name: "Brigitte",
  headshot: "brigitte-headshot.webp",
  role: "support",
  health: {
    hp: 150,
    armor: 50,
    shield: 0,
  },
  weapons: [
    {
      name: "Rocket Flail",
      icon: "brigitte-rocket-flail.png",
      abilities: [
        {
          name: "Rocket Flail",
          icon: "brigitte-rocket-flail.png",
          preview: "brigitte-preview-rocket-flail.png",
          description:
            "Brigitte swings a close range flail that can strike several enemies at once.",
          hotkey: "MB 1",
          display: "∞",
          stats: [
            ["Damage", "35"],
            ["Fire Rate", "0.6 seconds"],
            ["Range", "6 meters"],
          ],
        },
      ],
    },
  ],
  abilities: [
    {
      name: "Inspire",
      icon: "brigitte-inspire.png",
      preview: "brigitte-preview-inspire.png",
      description: "Dealing damage to enemies heals nearby allies.",
      hotkey: "Passive",
      display: "1s",
      stats: [
        ["Heal", "15 per second"],
        ["Duration", "5 seconds"],
        ["Cooldown", "1 second"],
      ],
    },
    {
      name: "Whip Shot",
      icon: "brigitte-whip-shot.png",
      preview: "brigitte-preview-whip-shot.png",
      description: "Brigitte throws her flail to knock an enemy back.",
      hotkey: "L-Shift",
      display: "4s",
      stats: [
        ["Damage", "80"],
        ["Range", "20 meters"],
        ["Projectile Speed", "80 m/s"],
      ],
    },
    {
      name: "Repair Pack",
      icon: "brigitte-repair-pack.png",
      preview: "brigitte-preview-repair-pack.png",
      description: "Heals an ally for a short duration.",
      hotkey: "E",
      display: "",
      stats: [
        ["Charges", "3"],
        ["Restore Time", "6 seconds"],
        ["Heal", "25 + 100 over 2 seconds"],
        ["Range", "25 meters"],
        ["Projectile Speed", "45 m/s"],
      ],
    },
    {
      name: "Barrier Shield",
      icon: "brigitte-barrier-shield.png",
      abilities: [
        {
          name: "Barrier Shield",
          icon: "brigitte-barrier-shield.png",
          preview: "brigitte-preview-barrier-shield.png",
          description:
            "Brigitte holds up a barrier shield to block incoming damage.",
          hotkey: "MB 2",
          display: "",
          stats: [
            ["Barrier Health", "250"],
            ["Destroyed Cooldown", "5 seconds"],
            ["Regen Rate", "85 HP/s when inactive"],
            ["Move Speed Penality", "30%"],
          ],
        },
        {
          name: "Shield Bash",
          icon: "brigitte-shield-bash.png",
          preview: "brigitte-preview-shield-bash.png",
          description:
            "While using barrier shield, Brigitte can dash forward to knock back an enemy.",
          hotkey: "MB 1",
          display: "5s",
          stats: [
            ["Damage", "50"],
            ["Range", "12 meters"],
            ["Move Speed", "500%"],
          ],
        },
      ],
    },
    {
      name: "Rally",
      icon: "brigitte-rally.png",
      preview: "brigitte-preview-rally.png",
      isUltimate: true,
      description:
        "Brigitte gains armor, empowers her barrier shield, and provides extra health to nearby allies.",
      hotkey: "Q",
      display: "",
      stats: [
        ["Duration", "10 seconds"],
        ["Range", "8.5 meters"],
        ["Self Armor Buff", "100"],
        ["Ally Overheal", "100 over time"],
        ["Move Speed", "+15% to self"],
        ["Barrier Shield", "increased size, 700HP"],
        ["Shield Bash", "affects multiple enemies, stuns for 0.5s"],
      ],
    },
  ],
};

export const dva = {
  name: "D.Va",
  headshot: "dva-headshot.webp",
  role: "tank",
  health: {
    hp: 200,
    armor: 300,
    shield: 0,
  },
  weapons: [
    {
      name: "Fusion Cannons",
      icon: "dva-fusion-cannons.png",
      abilities: [
        {
          name: "Fusion Cannons",
          icon: "dva-fusion-cannons.png",
          preview: "dva-preview-fusion-cannons.png",
          description: "Automatic short-range spread weapons.",
          hotkey: "MB 1",
          display: "∞",
          stats: [
            ["Damage", "22 max per shot"],
            ["Crit", "2x on headshot"],
            ["Fire Rate", "6.667 shots per second"],
            ["Falloff Range", "6 meters"],
            ["Movespeed Penalty", "30%"],
          ],
        },
      ],
    },
    {
      name: "Light Gun",
      icon: "dva-light-gun.png",
      abilities: [
        {
          name: "Light Gun",
          icon: "dva-light-gun.png",
          preview: "dva-preview-light-gun.png",
          description: "While outside of mech, D.Va uses a projectile blaster.",
          hotkey: "MB 1",
          display: "20",
          stats: [
            ["Damage", "14"],
            ["Crit", "2x on headshot"],
            ["Fire Rate", "7 shots per second"],
            ["Ammo", "20"],
            ["Projectile Speed", "50 m/s"],
          ],
        },
      ],
    },
  ],
  abilities: [
    {
      name: "Eject!",
      icon: "dva-eject.png",
      abilities: [
        {
          name: "Eject!",
          icon: "dva-eject.png",
          preview: "dva-preview-eject.png",
          description: "D.Va is ejected from her mech at 1 health.",
          hotkey: "Passive",
          display: "",
          stats: [
            ["Pilot Form Health", "150 HP"],
            ["Delay", "1.5 seconds"],
          ],
        },
        {
          name: "Call Mech",
          icon: "dva-call-mech.png",
          preview: "dva-preview-call-mech.png",
          isUltimate: true,
          description:
            "Pilot form D.Va calls down a new mech. Enemies hit by the landing take damage and are knocked back.",
          hotkey: "Q",
          display: "",
          stats: [
            ["Damage", "250"],
            ["Cast Time", "0.9 seconds"],
            ["AoE", "3 meters"],
            ["Transform Delay", "2 seconds"],
          ],
        },
      ],
    },
    {
      name: "Boosters",
      icon: "dva-boosters.png",
      preview: "dva-preview-boosters.png",
      description:
        "D.Va flies in the direction she is facing, knocking back enemies she hits.",
      hotkey: "L-Shift",
      display: "3.5s",
      stats: [
        ["Damage", "15"],
        ["Max Duration", "2 seconds"],
        ["Cooldown", "3.5 seconds"],
      ],
    },
    {
      name: "Micro Missiles",
      icon: "dva-micro-missiles.png",
      preview: "dva-preview-micro-missiles.png",
      description: "Launch a volley of explosive rockets.",
      hotkey: "E",
      display: "7s",
      stats: [
        ["Direct Hit Damage", "7"],
        ["Splash Damage", "1-4"],
        ["Fire Rate", "11 per second"],
        ["Total Rockets", "18"],
        ["Projectile Speed", "50 m/s"],
        ["Cooldown", "7 seconds"],
      ],
    },
    {
      name: "Defense Matrix",
      icon: "dva-defense-matrix.png",
      preview: "dva-preview-defense-matrix.png",
      description:
        "D.Va absorbs projectiles in an area in front of her. Cannot use Fusion Cannons or quick melee while active. Beam-type abilities are not affected.",
      hotkey: "MB 2",
      display: "",
      stats: [
        ["Max Duration", "3 seconds"],
        ["Range", "10 meters"],
        ["Fire Rate", "11 per second"],
        ["Cooldown", "1 seconds"],
        ["Meter Charge Time", "6 seconds"],
      ],
      details: "Does not affect beam or melee type abilities.",
    },
    {
      name: "Self-Destruct",
      icon: "dva-self-destruct.png",
      preview: "dva-preview-self-destruct.png",
      isUltimate: true,
      description:
        "D.Va overloads and ejects from her mech, causing it to explode after a short time. Does not cancel Boosters. Sets Call Mech ult charge to 100%.",
      hotkey: "Q",
      display: "",
      stats: [
        ["Damage", "1000 - 100"],
        ["Delay", "3 seconds"],
        ["AoE", "20 meters"],
      ],
    },
  ],
};
