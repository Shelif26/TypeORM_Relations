import PatientService from "../../Services/patientService";

const PatientResolver = {
  Query: {
    greet() {
      return PatientService.greet();
    },
    getPatient(parent: any, args:any, context:any) {
      return PatientService.getPatient(args.id);
    },
    getPatients() {
      return PatientService.getPatients();
    },
  },
  Mutation: {
    createPatient(parent: any, args: any, context: any) {
      const pat = args.patient;
      const par = args.partner;
      return PatientService.createPatient(pat, par);
    },
    deletePatient(parent: any, args: any, context: any) {
      return PatientService.deletePatient(args.id);
    },
  },
};
export default PatientResolver;
