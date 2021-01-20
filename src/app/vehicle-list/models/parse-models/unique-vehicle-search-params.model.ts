export class UniqueVehicleSearchParamsModel {
  vehicleType: string;
  brandId: string;
  id: string;
  

  constructor(data: any){
    this.parse(data);
  }

  parse(data: any): this {
    console.log('data', data)
    this.vehicleType = data.vehicleType;
    this.brandId = data.brandId;
    this.id = data.id
    return this;
  }
}