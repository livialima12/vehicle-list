import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { VehicleSearchParamsModel } from 'src/app/vehicle-search/models/parse-models/vehicle-search-params.model';

import { BrandList } from '../../vehicle-search/models/interfaces/brand-list.interface';
import { FilterHelper } from '../helper/filter.helper';

@Injectable({
  providedIn: 'root'
})
export class VehicleListService {

  hasData:boolean;

  constructor(
    private http: HttpClient,
  ) { }

  getBrandList(vehicleType){
    this.hasData = true;
    return this.http.get<BrandList[]>(`https://fipeapi.appspot.com/api/1/${vehicleType}/marcas.json`)
  }

  getModelList(params: VehicleSearchParamsModel) {
    const url = `https://fipeapi.appspot.com/api/1/${params.vehicleType}/veiculos/${params.brandId}.json`;
    return this.http.get(url).pipe(
      map((values: []) => {
        let modelList
        params.model
          ? modelList = FilterHelper.modelNameFilter(values, params.model) 
          : modelList = values
        return modelList
      })
    )
  }

  getVehiclesVariation(vehicleType: string, brandId: string, vehicleId: string) {
    const url = 
      `https://fipeapi.appspot.com/api/1/${vehicleType}/veiculo/${brandId}/${vehicleId}.json`;
    return this.http.get(url)
  }

  getVehiclesPrice(vehicleType: string, brandId: string, vehicleId: string, yearId: string) {
    const url = 
      `https://fipeapi.appspot.com/api/1/${vehicleType}/veiculo/${brandId}/${vehicleId}/${yearId}.json`;
    return this.http.get(url)

  }

}
