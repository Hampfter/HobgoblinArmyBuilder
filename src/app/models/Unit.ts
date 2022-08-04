import { Strength } from "./Strength";
import { Weakness } from "./Weakness";

export interface Unit{
  name?: string;
  move?: number;
  attackRange?: number;
  footprint?: string;
  defaultStrength?: string[];
  defaultWeakness?: string[];
  strength: Strength[];
  weakness: Weakness[];
  cost?: number;
  costMultiplier?: number;
}
