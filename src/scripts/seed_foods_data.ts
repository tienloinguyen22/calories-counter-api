import { mysqlConnection } from '@app/core';
import { readFile, utils } from 'xlsx';
import { v4 } from 'uuid';
import { foodsRepository } from '../modules/foods/aggregates/foods/repository';

(async () => {
  mysqlConnection.connect(async (error) => {
    if (error) {
      // eslint-disable-next-line no-console
      console.log('Error connecting to MySql', error);
      process.exit();
    }

    // eslint-disable-next-line no-console
    console.log('Connect to MySql success');

    // Read file excel
    const workbook = readFile('data/Food_Display_Table.xlsx');
    const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const jsonData: any = utils.sheet_to_json(firstSheet, {
      header: 'A',
    });
    // eslint-disable-next-line no-restricted-syntax
    for (const item of jsonData.slice(1)) {
      try {
        const newFoodInfo = {
          id: v4(),
          code: item.A,
          title: item.B,
          portionDefault: item.C ? Number(item.C) : 0,
          portionAmount: item.D ? Number(item.D) : 0,
          portionName: item.E,
          factor: item.F ? Number(item.F) : 0,
          increment: item.G ? Number(item.G) : 0,
          multiplier: item.H ? Number(item.H) : 0,
          grains: item.I ? Number(item.I) : 0,
          wholeGrains: item.J ? Number(item.J) : 0,
          vegetables: item.K ? Number(item.K) : 0,
          orangeVegetables: item.L ? Number(item.L) : 0,
          starchyVegetables: item.M ? Number(item.M) : 0,
          darkGreenVegetables: item.N ? Number(item.N) : 0,
          otherVegetables: item.O ? Number(item.O) : 0,
          fruits: item.P ? Number(item.P) : 0,
          milk: item.Q ? Number(item.Q) : 0,
          meats: item.R ? Number(item.R) : 0,
          dryBeanPeas: item.T ? Number(item.T) : 0,
          oils: item.U ? Number(item.U) : 0,
          solidFats: item.V ? Number(item.V) : 0,
          addedSugars: item.W ? Number(item.W) : 0,
          alcohol: item.X ? Number(item.X) : 0,
          calories: item.Y ? Number(item.Y) : 0,
          saturatedFats: item.Z ? Number(item.Z) : 0,
        };
        // eslint-disable-next-line no-console
        console.log('newFoodInfo', newFoodInfo);
        // eslint-disable-next-line no-await-in-loop
        const newFood = await foodsRepository.create(newFoodInfo);
        // eslint-disable-next-line no-console
        console.log('Create new food: ', newFood.title);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log('error', err.message);
      }
    }

    process.exit();
  });
})();
