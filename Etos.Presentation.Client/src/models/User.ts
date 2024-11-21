import EtosId from "./EtosId";

export default interface User {
    Id: EtosId;
    FirstName: string;
    LastName: string;
    Email: string;
}
