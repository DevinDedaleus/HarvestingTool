export class ComponentService {
  public static getComponents(creatureType: string): MonsterComponent[] {
    let retObj: MonsterComponent[] = [];

    if (creatureType == "Aberration") {
      retObj = [
        {
          "index": 0,
          "name": "Antenna",
          "dc": 5,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Eye",
          "dc": 5,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Flesh",
          "dc": 5,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Phial of blood",
          "dc": 5,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Bone",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Egg",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Fat",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Pouch of claws",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Pouch of teeth",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Heart",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Phial of mucus",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Liver",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Stinger",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Tentacle",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Brain",
          "dc": 20,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Chitin",
          "dc": 20,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Hide",
          "dc": 20,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Main Eye",
          "dc": 20,
          "limit": 99,
          "isEdible": false
        }
      ];

    }

    if (creatureType == "Beast") {
      retObj = [
        {
          "index": 0,
          "name": "Antenna",
          "dc": 5,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Eye",
          "dc": 5,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Flesh",
          "dc": 5,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Phial of blood",
          "dc": 5,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Antler",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Beak",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Bone",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "EggE",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Fat",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Fin",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Horn",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Pincer",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Pouch of claws",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Pouch of teeth",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Talon",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Tusk",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Heart",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Liver",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Poison gland",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Pouch of feathers",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Pouch of scales",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Stinger",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Tentacle",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Chitin",
          "dc": 20,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Pelt",
          "dc": 20,
          "limit": 99,
          "isEdible": false
        }
      ];
    }

    if (creatureType == "Celestial") {
      retObj = [
        {
          "index": 0,
          "name": "Eye",
          "dc": 5,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Flesh",
          "dc": 5,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Phial of blood",
          "dc": 5,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Pouch of dust",
          "dc": 5,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Bone",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Fat",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Horn",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Pouch of teeth",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Heart",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Liver",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Pouch of feathers",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Pouch of scales",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Brain",
          "dc": 20,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Skin",
          "dc": 20,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Soul",
          "dc": 25,
          "limit": 99,
          "isEdible": false
        }
      ];
    }

    if (creatureType == "Construct") {
      retObj = [
        {
          "index": 0,
          "name": "Phial of blood",
          "dc": 5,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Phial of oil",
          "dc": 5,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Phial of sap",
          "dc": 5,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Flesh",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Metal plating",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Stone",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Bone",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Heart",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Liver",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "gears",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Brain",
          "dc": 20,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Instructions",
          "dc": 20,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Lifespark",
          "dc": 25,
          "limit": 99,
          "isEdible": false
        }
      ];
    }

    if (creatureType == "Dragon") {
      retObj = [
        {
          "index": 0,
          "name": "Eye",
          "dc": 5,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Flesh",
          "dc": 5,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Phial of blood",
          "dc": 5,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Bone",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Egg",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Fat",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Pouch of claws",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Pouch of teeth",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Horn",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Liver",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Pouch of scales",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Heart",
          "dc": 20,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Breath sac",
          "dc": 25,
          "limit": 99,
          "isEdible": false
        }
      ];
    }

    if (creatureType == "Elemental") {
      retObj = [
        {
          "index": 0,
          "name": "Eye",
          "dc": 5,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Primordial dust",
          "dc": 5,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Bone",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Volatile mote of air/earth/fire/water",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Core of air/earth/fire/water",
          "dc": 25,
          "limit": 99,
          "isEdible": false
        }
      ];
    }

    if (creatureType == "Fey") {
      retObj = [
        {
          "index": 0,
          "name": "Antenna",
          "dc": 5,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Eye",
          "dc": 5,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Flesh",
          "dc": 5,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Phial of blood",
          "dc": 5,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Antler",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Beak",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Bone",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Egg",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Horn",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Pouch of claws",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Pouch of teeth",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Talon",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Tusk",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Heart",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Fat",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Liver",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Poison gland",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Pouch of feathers",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Pouch of scales",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Tentacle",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Tongue",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Brain",
          "dc": 20,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Skin",
          "dc": 20,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Pelt",
          "dc": 20,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Psyche",
          "dc": 25,
          "limit": 99,
          "isEdible": false
        }
      ];
    }

    if (creatureType == "Fiend") {
      retObj = [
        {
          "index": 0,
          "name": "Eye",
          "dc": 5,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Flesh",
          "dc": 5,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Phial of blood",
          "dc": 5,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Pouch of dust",
          "dc": 5,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Bone",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Horn",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Pouch of teeth",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Heart",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Fat",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Liver",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Poison gland",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Pouch of feathers",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Pouch of scales",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Brain",
          "dc": 20,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Skin",
          "dc": 20,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Soul",
          "dc": 25,
          "limit": 99,
          "isEdible": false
        }
      ];
    }

    if (creatureType == "Giant") {
      retObj = [
        {
          "index": 0,
          "name": "Flesh",
          "dc": 5,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Nail",
          "dc": 5,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Phial of blood",
          "dc": 5,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Bone",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Fat",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Tooth",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Heart",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Liver",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Skin",
          "dc": 20,
          "limit": 99,
          "isEdible": false
        }
      ];
    }

    if (creatureType == "Humanoid") {
      retObj = [
        {
          "index": 0,
          "name": "Eye",
          "dc": 5,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Phial of blood",
          "dc": 5,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Bone",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Egg",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Pouch of teeth",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Heart",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Liver",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Pouch of feathers",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Pouch of scales",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Brain",
          "dc": 20,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Skin",
          "dc": 20,
          "limit": 99,
          "isEdible": false
        }
      ];
    }

    if (creatureType == "Monstrosity") {
      retObj = [
        {
          "index": 0,
          "name": "Antenna",
          "dc": 5,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Eye",
          "dc": 5,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Flesh",
          "dc": 5,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Phial of blood",
          "dc": 5,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Antler",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Beak",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Bone",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Egg",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Fat",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Fin",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Horn",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Pincer",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Pouch of claws",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Pouch of teeth",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Talon",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Tusk",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Heart",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Liver",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Poison gland",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Pouch of feathers",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Pouch of scales",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Stinger",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Tentacle",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Chitin",
          "dc": 20,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Pelt",
          "dc": 20,
          "limit": 99,
          "isEdible": false
        }
      ];
    }

    if (creatureType == "Ooze") {
      retObj = [
        {
          "index": 0,
          "name": "Phial of acid",
          "dc": 5,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Phial of mucus",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Vesicle",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Membrane",
          "dc": 20,
          "limit": 99,
          "isEdible": false
        }
      ];
    }

    if (creatureType == "Plant") {
      retObj = [
        {
          "index": 0,
          "name": "Phial of Sap",
          "dc": 5,
          "limit": 99,
          "isEdible": true
        },
        {
          "index": 0,
          "name": "Tuber",
          "dc": 5,
          "limit": 99,
          "isEdible": true
        },
        {
          "index": 0,
          "name": "Bundle of roots",
          "dc": 10,
          "limit": 99,
          "isEdible": true
        },
        {
          "index": 0,
          "name": "Phial of Wax",
          "dc": 10,
          "limit": 99,
          "isEdible": true
        },
        {
          "index": 0,
          "name": "Pouch of hyphae",
          "dc": 10,
          "limit": 99,
          "isEdible": true
        },
        {
          "index": 0,
          "name": "Pouch of Leaves",
          "dc": 10,
          "limit": 99,
          "isEdible": true
        },
        {
          "index": 0,
          "name": "Poison gland",
          "dc": 15,
          "limit": 99,
          "isEdible": true
        },
        {
          "index": 0,
          "name": "Pouch of Pollen",
          "dc": 15,
          "limit": 99,
          "isEdible": true
        },
        {
          "index": 0,
          "name": "Pouch of Spores",
          "dc": 15,
          "limit": 99,
          "isEdible": true
        },
        {
          "index": 0,
          "name": "Bark",
          "dc": 20,
          "limit": 99,
          "isEdible": true
        },
        {
          "index": 0,
          "name": "Fungal membrane",
          "dc": 20,
          "limit": 99,
          "isEdible": true
        }
      ];
    }

    if (creatureType == "Undead") {
      retObj = [
        {
          "index": 0,
          "name": "Eye",
          "dc": 5,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Bone",
          "dc": 5,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Phial of congealed blood",
          "dc": 5,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Marrow",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Pouch of teeth",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Rancid Fat",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Ethereal ichor",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Undying Flesh",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Undying heart",
          "dc": 20,
          "limit": 99,
          "isEdible": false
        }
      ];
    }
    
    if (creatureType == "Fungal Heart") {
      retObj = [
        {
          "index": 0,
          "name": "Pouch of Hyphae",
          "dc": 10,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Pouch of Spores",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Lady's Veil(2)",
          "dc": 15,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Spore Filled Gills(3)",
          "dc": 20,
          "limit": 99,
          "isEdible": false
        },
        {
          "index": 0,
          "name": "Membrane(1)",
          "dc": 25,
          "limit": 99,
          "isEdible": false
        }
      ];
    }
    
    return retObj;
  }
}


export class MonsterComponent {
  index: number = 0;
  name: string = "";
  dc: number = 0;
  limit: number = 0;
  isEdible: boolean = false;
  constructor(name: string, dc: number, limit: number, isEdible: boolean) {
    this.name = name;
    this.dc = dc;
    this.limit = limit;
    this.isEdible = isEdible;
  }
}