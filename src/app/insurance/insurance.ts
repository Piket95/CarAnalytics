export class Insurance {

  private userCarID: number;

  modelname: string;
  insuranceCompany: string;
  insuranceType: string;
  damageClass: string;
  costPerYear: string;

  constructor(userCarID: number, data) {

    this.userCarID = userCarID;

    console.log(data);

    if (data['success'] == true && data['details']['insurance_id'] !== null) {

      this.modelname = data['details']['model'];
      this.insuranceCompany = data['details']['name'];
      this.insuranceType = data['details']['type'];
      this.damageClass = data['details']['class'];
      this.costPerYear = data['details']['cost_per_year'] + ' €';

    } else {

      this.modelname = data['details']['model'];
      this.insuranceCompany = 'Nicht festgelegt';
      this.insuranceType = 'Nicht festgelegt';
      this.damageClass = 'Nicht festgelegt';
      this.costPerYear = 'Nicht festgelegt';

    }

  }
}
