export const typeDef = `

type patient {
    id:Int
    PatientFirstname:String
    PatientLastname:String
    age:Int
}

type partner{
    id:Int
    partner:String
    details:patient
}

input patientInput {
    PatientFirstname:String
    PatientLastname:String
    age:Int
}

input patientDetails{
    partner:String
}

type Mutation{
    createPatient(patient: patientInput , partner :patientDetails) : String!
    deletePatient(id:Int): String!
}

type Query {
    greet : String!
    getPatient(id: Int!):partner!
    getPatients:[partner]
}

`;
