import { Aggregate, IsAuditable } from '@app/core';

export interface Food extends Aggregate, IsAuditable {
  code: string;
  title: string;
  portionDefault: number;
  portionAmount: number;
  portionName: string;
  factor: number;
  increment: number;
  multiplier: number;
  grains: number;
  wholeGrains: number;
  vegetables: number;
  orangeVegetables: number;
  starchyVegetables: number;
  darkGreenVegetables: number;
  otherVegetables: number;
  fruits: number;
  milk: number;
  meats: number;
  dryBeanPeas: number;
  oils: number;
  solidFats: number;
  addedSugars: number;
  alcohol: number;
  calories: number;
  saturatedFats: number;
}
