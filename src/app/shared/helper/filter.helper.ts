import { Vehicle } from 'src/app/vehicle-search/models/interfaces/vehicle.interface';

export class FilterHelper {
  static modelNameFilter(array: Vehicle[], name: string) {
    return array.filter(vehicle => {
      const fipeNameLowerCase = vehicle.fipe_name.toLowerCase()
      const filterName = name.toLowerCase()
      return fipeNameLowerCase.includes(filterName) ? true : false      
    })
  }
}