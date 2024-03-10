const CharacterType = {
    mage: 'mage',
    warrior: 'warrior',
    rouge: 'rouge'
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////// WEAPONS ///////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const WeaponsTiers = { //Weapons tiers important for algorithm
    wooden: 1,
    iron: 2,
    steel: 3,
    dwarven: 4,
    elven: 4,
    orcish: 5,
    glass: 6,
    ebony: 7,
    daedric: 8,
    dragon: 9
}

const WeaponsType = { //Weapons type for information for user
    sword: 'Sword',
    mace: 'Mace',
    axe: 'War axe',
    dagger: 'Dagger',
    taxe: 'Battle axe',
    tsword: 'Greatsword',
    tmace: 'Warhammer',
    bow: 'Bow',
    crossbow: 'Crossbow'
}

class Weapon {
    constructor(name, type, tier, characterType) {
        this.name = name;
        this.type = type;
        this.tier = tier;
        this.characterType = characterType;
    }
}


//Weapons list
let weaponsList = [
    // Swords
    new Weapon('Iron Sword', WeaponsType.sword, WeaponsTiers.iron, CharacterType.warrior),
    new Weapon('Steel Sword', WeaponsType.sword, WeaponsTiers.steel, CharacterType.warrior),
    new Weapon('Dwarven Sword', WeaponsType.sword, WeaponsTiers.dwarven, CharacterType.warrior),
    new Weapon('Elven Sword', WeaponsType.sword, WeaponsTiers.elven, CharacterType.warrior),
    new Weapon('Orcish Sword', WeaponsType.sword, WeaponsTiers.orcish, CharacterType.warrior),
    new Weapon('Glass Sword', WeaponsType.sword, WeaponsTiers.glass, CharacterType.warrior),
    new Weapon('Ebony Sword', WeaponsType.sword, WeaponsTiers.ebony, CharacterType.warrior),
    new Weapon('Daedric Sword', WeaponsType.sword, WeaponsTiers.daedric, CharacterType.warrior),
    new Weapon('Dragonbone Sword', WeaponsType.sword, WeaponsTiers.dragonbone, CharacterType.warrior),
    // Maces
    new Weapon('Iron Mace', WeaponsType.mace, WeaponsTiers.iron, CharacterType.warrior),
    new Weapon('Steel Mace', WeaponsType.mace, WeaponsTiers.steel, CharacterType.warrior),
    new Weapon('Dwarven Mace', WeaponsType.mace, WeaponsTiers.dwarven, CharacterType.warrior),
    new Weapon('Elven Mace', WeaponsType.mace, WeaponsTiers.elven, CharacterType.warrior),
    new Weapon('Orcish Mace', WeaponsType.mace, WeaponsTiers.orcish, CharacterType.warrior),
    new Weapon('Glass Mace', WeaponsType.mace, WeaponsTiers.glass, CharacterType.warrior),
    new Weapon('Ebony Mace', WeaponsType.mace, WeaponsTiers.ebony, CharacterType.warrior),
    new Weapon('Daedric Mace', WeaponsType.mace, WeaponsTiers.daedric, CharacterType.warrior),
    new Weapon('Dragonbone Mace', WeaponsType.mace, WeaponsTiers.dragonbone, CharacterType.warrior),
    // Axes
    new Weapon('Iron War Axe', WeaponsType.axe, WeaponsTiers.iron, CharacterType.warrior),
    new Weapon('Steel War Axe', WeaponsType.axe, WeaponsTiers.steel, CharacterType.warrior),
    new Weapon('Dwarven War Axe', WeaponsType.axe, WeaponsTiers.dwarven, CharacterType.warrior),
    new Weapon('Elven War Axe', WeaponsType.axe, WeaponsTiers.elven, CharacterType.warrior),
    new Weapon('Orcish War Axe', WeaponsType.axe, WeaponsTiers.orcish, CharacterType.warrior),
    new Weapon('Glass War Axe', WeaponsType.axe, WeaponsTiers.glass, CharacterType.warrior),
    new Weapon('Ebony War Axe', WeaponsType.axe, WeaponsTiers.ebony, CharacterType.warrior),
    new Weapon('Daedric War Axe', WeaponsType.axe, WeaponsTiers.daedric, CharacterType.warrior),
    new Weapon('Dragonbone War Axe', WeaponsType.axe, WeaponsTiers.dragonbone, CharacterType.warrior),
    // Daggers
    new Weapon('Iron Dagger', WeaponsType.dagger, WeaponsTiers.iron, CharacterType.assassin),
    new Weapon('Steel Dagger', WeaponsType.dagger, WeaponsTiers.steel, CharacterType.assassin),
    new Weapon('Dwarven Dagger', WeaponsType.dagger, WeaponsTiers.dwarven, CharacterType.assassin),
    new Weapon('Elven Dagger', WeaponsType.dagger, WeaponsTiers.elven, CharacterType.assassin),
    new Weapon('Glass Dagger', WeaponsType.dagger, WeaponsTiers.glass, CharacterType.assassin),
    new Weapon('Ebony Dagger', WeaponsType.dagger, WeaponsTiers.ebony, CharacterType.assassin),
    new Weapon('Daedric Dagger', WeaponsType.dagger, WeaponsTiers.daedric, CharacterType.assassin),
    new Weapon('Dragonbone Dagger', WeaponsType.dagger, WeaponsTiers.dragonbone, CharacterType.assassin),
    // Battleaxes
    new Weapon('Iron Battleaxe', WeaponsType.battleaxe, WeaponsTiers.iron, CharacterType.warrior),
    new Weapon('Steel Battleaxe', WeaponsType.battleaxe, WeaponsTiers.steel, CharacterType.warrior),
    new Weapon('Dwarven Battleaxe', WeaponsType.battleaxe, WeaponsTiers.dwarven, CharacterType.warrior),
    new Weapon('Elven Battleaxe', WeaponsType.battleaxe, WeaponsTiers.elven, CharacterType.warrior),
    new Weapon('Orcish Battleaxe', WeaponsType.battleaxe, WeaponsTiers.orcish, CharacterType.warrior),
    new Weapon('Glass Battleaxe', WeaponsType.battleaxe, WeaponsTiers.glass, CharacterType.warrior),
    new Weapon('Ebony Battleaxe', WeaponsType.battleaxe, WeaponsTiers.ebony, CharacterType.warrior),
    new Weapon('Daedric Battleaxe', WeaponsType.battleaxe, WeaponsTiers.daedric, CharacterType.warrior),
    new Weapon('Dragonbone Battleaxe', WeaponsType.battleaxe, WeaponsTiers.dragonbone, CharacterType.warrior),
    // Greatswords
    new Weapon('Iron Greatsword', WeaponsType.greatsword, WeaponsTiers.iron, CharacterType.warrior),
    new Weapon('Steel Greatsword', WeaponsType.greatsword, WeaponsTiers.steel, CharacterType.warrior),
    new Weapon('Dwarven Greatsword', WeaponsType.greatsword, WeaponsTiers.dwarven, CharacterType.warrior),
    new Weapon('Elven Greatsword', WeaponsType.greatsword, WeaponsTiers.elven, CharacterType.warrior),
    new Weapon('Orcish Greatsword', WeaponsType.greatsword, WeaponsTiers.orcish, CharacterType.warrior),
    new Weapon('Glass Greatsword', WeaponsType.greatsword, WeaponsTiers.glass, CharacterType.warrior),
    new Weapon('Ebony Greatsword', WeaponsType.greatsword, WeaponsTiers.ebony, CharacterType.warrior),
    new Weapon('Daedric Greatsword', WeaponsType.greatsword, WeaponsTiers.daedric, CharacterType.warrior),
    new Weapon('Dragonbone Greatsword', WeaponsType.greatsword, WeaponsTiers.dragonbone, CharacterType.warrior),
    // Warhammers
    new Weapon('Iron Warhammer', WeaponsType.warhammer, WeaponsTiers.iron, CharacterType.warrior),
    new Weapon('Steel Warhammer', WeaponsType.warhammer, WeaponsTiers.steel, CharacterType.warrior),
    new Weapon('Dwarven Warhammer', WeaponsType.warhammer, WeaponsTiers.dwarven, CharacterType.warrior),
    new Weapon('Elven Warhammer', WeaponsType.warhammer, WeaponsTiers.elven, CharacterType.warrior),
    new Weapon('Orcish Warhammer', WeaponsType.warhammer, WeaponsTiers.orcish, CharacterType.warrior),
    new Weapon('Glass Warhammer', WeaponsType.warhammer, WeaponsTiers.glass, CharacterType.warrior),
    new Weapon('Ebony Warhammer', WeaponsType.warhammer, WeaponsTiers.ebony, CharacterType.warrior),
    new Weapon('Daedric Warhammer', WeaponsType.warhammer, WeaponsTiers.daedric, CharacterType.warrior),
    new Weapon('Dragonbone Warhammer', WeaponsType.warhammer, WeaponsTiers.dragonbone, CharacterType.warrior),
    // Bows
    new Weapon('Long Bow', WeaponsType.bow, WeaponsTiers.iron, CharacterType.archer),
    new Weapon('Hunting Bow', WeaponsType.bow, WeaponsTiers.steel, CharacterType.archer),
    new Weapon('Elven Bow', WeaponsType.bow, WeaponsTiers.elven, CharacterType.archer),
    new Weapon('Dwarven Bow', WeaponsType.bow, WeaponsTiers.dwarven, CharacterType.archer),
    new Weapon('Glass Bow', WeaponsType.bow, WeaponsTiers.glass, CharacterType.archer),
    new Weapon('Ebony Bow', WeaponsType.bow, WeaponsTiers.ebony, CharacterType.archer),
    new Weapon('Daedric Bow', WeaponsType.bow, WeaponsTiers.daedric, CharacterType.archer),
    new Weapon('Dragonbone Bow', WeaponsType.bow, WeaponsTiers.dragonbone, CharacterType.archer),
    // Crossbows
    new Weapon('Crossbow', WeaponsType.crossbow, WeaponsTiers.steel, CharacterType.archer), // Base crossbow
    // Staves
    new Weapon('Wabbajack', WeaponsType.staff, WeaponsTiers.daedric, CharacterType.mage), // Unique staff
    new Weapon('Staff of Magnus', WeaponsType.staff, WeaponsTiers.daedric, CharacterType.mage), // Unique staff
    // Unique weapons
    new Weapon('Chillrend', WeaponsType.sword, WeaponsTiers.glass, CharacterType.assassin),
    new Weapon('Dawnbreaker', WeaponsType.sword, WeaponsTiers.daedric, CharacterType.warrior),
    new Weapon('Mehrunes\' Razor', WeaponsType.dagger, WeaponsTiers.daedric, CharacterType.assassin),
    new Weapon('Volendrung', WeaponsType.warhammer, WeaponsTiers.daedric, CharacterType.warrior),
    new Weapon('Auriel\'s Bow', WeaponsType.bow, WeaponsTiers.elven, CharacterType.archer),
    //new Weapon('Auriel\'s Shield', WeaponsType.shield, WeaponsTiers.elven, CharacterType.warrior),
];


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////ARMORS/////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const ArmorTiers = {
    fur: 1,
    hide: 2,
    leather: 3,
    iron: 4,
    steel: 5,
    dwarven: 6,
    elven: 7,
    scaled: 8,
    orcish: 9,
    ebony: 10,
    dragonplate: 11,
    daedric: 12
};

const ArmorType = {
    helmet: 'Helmet',
    cuirass: 'Cuirass',
    gauntlets: 'Gauntlets',
    boots: 'Boots',
    shield: 'Shield'
};

class ArmorSet {
    constructor(name, tier, characterType) {
        this.name = name;
        this.tier = tier;
        this.characterType = characterType;
    }
}

// Armor sets list
let armorsList = [
    new ArmorSet('Iron Armor Set', ArmorTiers.iron, CharacterType.warrior),
    new ArmorSet('Steel Armor Set', ArmorTiers.steel, CharacterType.warrior),
    new ArmorSet('Dwarven Armor Set', ArmorTiers.dwarven, CharacterType.warrior),
    new ArmorSet('Elven Armor Set', ArmorTiers.elven, CharacterType.warrior),
    new ArmorSet('Orcish Armor Set', ArmorTiers.orcish, CharacterType.warrior),
    new ArmorSet('Ebony Armor Set', ArmorTiers.ebony, CharacterType.warrior),
    new ArmorSet('Dragonplate Armor Set', ArmorTiers.dragonplate, CharacterType.warrior),
    new ArmorSet('Daedric Armor Set', ArmorTiers.daedric, CharacterType.warrior),
    // Add more armor sets as needed
];


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////CHARACTER////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const Races = [
    'Breton', 'Argonian', 'Khajit', 'Redguard', 'Nord', 'Imprerial', 'Orsimer', 'Bosmer', 'Altmer', 'Dunmer'
];

const nameList = {
    prefixes: ["Ald", "Briar", "Dov", "Frost", "Grim", "Hroth", "Icy", "Jarl", "Kyn", "Lore", "Mor", "Nord", "Odyn", "Ragn", "Sky", "Thane", "Ulfr", "Valk", "Wuld", "Yngv"],
    suffixes: ["fang", "forge", "hammer", "horn", "iron", "shield", "skull", "sword", "thane", "wolf", "arrow", "fire", "flame", "ice", "frost", "storm", "blade", "brow", "bringer", "hand"]
}

let character = {};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////ALGORITHM//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let createCharacter = () => {

    character.race = Races[Math.floor(Math.random()*Races.length)];
    character.name = nameList.prefixes[Math.floor(Math.random()*(nameList.prefixes.length))] + ' ' + nameList.suffixes[Math.floor(Math.random()*(nameList.suffixes.length))];
    character.weapon = weaponsList[Math.floor(Math.random()*(weaponsList.length))];
    character.armor = armorsList[Math.round(Math.random()*(armorsList.length))];

    document.getElementById('characterName').innerHTML += character.name;
    document.getElementById('race').innerHTML += character.race;
    document.getElementById('weapon').innerHTML += character.weapon.name;
    document.getElementById('armor').innerHTML += character.armor.name;

    console.log(character);
}

createCharacter();