import {Component, OnInit} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';
import {MatTableModule} from '@angular/material/table';
import { ComponentService, MonsterComponent } from './componentService';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-harvest-tool',
  imports: [
    CommonModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    CdkDropList,
    CdkDrag,
    MatTableModule,
    MatIconModule
  ],
  templateUrl: './harvest-tool.component.html',
  styleUrl: './harvest-tool.component.css'
})
export class HarvestToolComponent implements OnInit {
  ngOnInit(): void {
    //this.selectMonsterCompenents = ComponentService.getComponents("plant");
    console.log(this.selectMonsterCompenents);
  }
  public selectedType: SkillType = new SkillType("", "", false);
  public skillTypeTable : SkillType[] = [
    new SkillType("Aberration", "Arcana", true),
    new SkillType("Beast", "Survival", false),
    new SkillType("Celestial", "Religion", true),
    new SkillType("Construct", "Investigation", false),
    new SkillType("Dragon", "Survival", false),
    new SkillType("Elemental", "Arcana", true),
    new SkillType("Fey", "Arcana", true),
    new SkillType("Fiend", "Religion", true),
    new SkillType("Giant", "Medicine", false),
    new SkillType("Humanoid", "Medicine", false),
    new SkillType("Monstrosity", "Survival", false),
    new SkillType("Ooze", "Nature", false),
    new SkillType("Plant", "Nature", false),
    new SkillType("Undead", "Medicine", false),
    new SkillType("Fungal Heart", "Medicine", false)
  ];
  public selectedEssence: Essence = new Essence("", "", 0, 0, 0);
  public essenceTable: Essence[] = [
    new Essence("No", "N/A", 0, 2, 0),
    new Essence("Frail", "Uncommon", 3, 6, 25),
    new Essence("Robust", "Rare", 7, 11, 30),
    new Essence("Potent", "Very Rare", 12, 17, 35),
    new Essence("Mythic", "Legendary", 18, 24, 40),
    new Essence("Deific", "Artifact", 25, 99, 50),
  ];
  public selectMonsterCompenents: MonsterComponent[] = [];
  public componentsToHarvest: MonsterComponent[] = [];
  //let compService;

  //selectMonsterCompenents = ComponentService.getComponents("plant");
  displayedColumns: string[] = ['name', 'dc', 'actions'];

  populate() {
    console.log(this.selectedType.type);
    console.log(this.selectedEssence.type);
    if(this.selectedType.type != "" && this.selectedEssence.type != "") {
      this.selectMonsterCompenents = ComponentService.getComponents(this.selectedType.type);
      if (this.selectedEssence.min_CR > 2) {
        this.selectMonsterCompenents.push(new MonsterComponent(`${this.selectedEssence.type} Essence`, this.selectedEssence.dc, 1, false));
      }
    }
  }

  private harvestKey: number = 0;
  public addToHarvest(comp: MonsterComponent): void {
    console.log(comp);
    this.componentsToHarvest.push(comp);
  }

  drop(event: CdkDragDrop<MonsterComponent[]>) {
    console.log(event);
    moveItemInArray(this.componentsToHarvest, event.previousIndex, event.currentIndex);
  }
  remove(comp: any, index: number) {
    console.log(comp);
    this.componentsToHarvest.splice(index, 1);
  }

  public getTotalDC(index:number): number {
    let total: number = 0;
    for(let i = 0; i < index+1; i++) {
      total += this.componentsToHarvest[i].dc;
    }
    return total;
  }

}

class SkillType {
  type: string = "";
  skill: string = "";
  isMagical: boolean = false;
  constructor(type: string, skill: string, isMagical: boolean) {
    this.type = type;
    this.skill = skill;
    this.isMagical = isMagical;
  }
}

class Essence {
  type: string = "";
  rarity: string = "";
  min_CR: number = 0;
  max_CR: number = 0;
  dc: number = 0;
  constructor(type: string, rarity: string, min_CR: number, max_CR: number, dc: number) {
    this.type = type;
    this.rarity = rarity;
    this.min_CR = min_CR;
    this.max_CR = max_CR;
    this.dc = dc;
  }
}


// class ComponentService {
//   public static getComponents(creatureType: string): MonsterComponent[] {
//     let retObj: MonsterComponent[] = [];
//     if (creatureType = "plant") {
//       retObj.push(new MonsterComponent("Phial of Sap", 5, 99, true));
//       retObj.push(new MonsterComponent("Tuber", 5, 99, true));
//       retObj.push(new MonsterComponent("Bundle of roots", 10, 99, true));
//       retObj.push(new MonsterComponent("Phial of Wax", 10, 99, true));
//       retObj.push(new MonsterComponent("Pouch of hyphae", 10, 99, true));
//       retObj.push(new MonsterComponent("Pouch of Leaves", 10, 99, true));
//       retObj.push(new MonsterComponent("Poison gland", 15, 99, true));
//       retObj.push(new MonsterComponent("Pouch of Pollen", 15, 99, true));
//       retObj.push(new MonsterComponent("Pouch of Spores", 15, 99, true));
//       retObj.push(new MonsterComponent("Bark", 20, 99, true));
//       retObj.push(new MonsterComponent("Fungal membrane", 20, 99, true));
//       //TODO Figure out how to not hardcode this
//       retObj.push(new MonsterComponent("Frail Essence", 25, 1, false));
//     }
    
    
    
//     return retObj;
//   }
// }

// class MonsterComponent {
//   name: string = "";
//   dc: number = 0;
//   limit: number = 0;
//   isEdible: boolean = false;
//   constructor(name: string, dc: number, limit: number, isEdible: boolean) {
//     this.name = name;
//     this.dc = dc;
//     this.limit = limit;
//     this.isEdible = isEdible;
//   }
// }