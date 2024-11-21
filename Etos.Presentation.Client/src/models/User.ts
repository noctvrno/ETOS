import EtosId from "./EtosId";

export default interface User {
    id: EtosId;
    firstName: string;
    lastName: string;
    email: string;
}
