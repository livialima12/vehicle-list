export class VehicleSearchParamsModel {
  vehicleType: string;
  brandId: string;
  model: string;
  modelId?: string;
  modelYear?: string;

  constructor(data: any){
    this.parse(data);
  }

  parse(data: any): this {
    this.vehicleType = data.vehicleType;
    this.brandId = data.brandId;
    this.model = data.model
    this.modelId = data.modelId
    return this;
  }
}