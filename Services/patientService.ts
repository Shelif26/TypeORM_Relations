import { UserData } from "../Resources/Datasource";
import { Partner } from "../Entity/Partner";
import { Patient } from "../Entity/Patient";

const users = UserData.getRepository(Patient);
const details = UserData.getRepository(Partner);


class PatientService {
  public static greet() {
    return "<------------hello------------>";
  }

  public static async createPatient(patient: Patient, partner: Partner) {
    const create_PP = await users.save(patient);
    partner.details = create_PP;
    await details.save(partner);
    console.log(partner);
    return "created SucessFully!";
   
    
  }

  public static async getPatients() {
    const patients = await details
      .createQueryBuilder("Partner")
      .leftJoinAndSelect("Partner.details", "patients")
      .getMany();
    return patients;
  }

  public static async deletePatient(id: number){
    const delPatient:any = await users.findOne({where: {id: id}});
    users.delete(delPatient)
    return "deleted Sucessfully!"
}
}

export default PatientService;
