import EtosId from "../EtosId";

export default interface CreateActivityRequest {
    title: string;
    assigneeId: EtosId;
}
