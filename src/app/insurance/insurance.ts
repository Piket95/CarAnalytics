export class Insurance {

  private userCarID: number;

  modelname: string;
  insuranceCompany: string;
  insuranceType: string;
  damageClass: string;
  costPerYear: number;

  constructor(userCarID: number) {

    this.userCarID = userCarID;

    this.getInsuranceData(this.userCarID);

  }

  getInsuranceData(id: number) {
    // Get the Insurance Data from API of that specific User Car

    //Presets:
    this.modelname = "Test-Tesla (" + this.userCarID + ")";
    this.insuranceCompany = "Test-Firma";
    this.insuranceType = "Test-Vollkasko"
    this.damageClass = "Test-Schadensklasse";
    this.costPerYear = 2232.23;
  }
}
