import { CanBeSentOverToBackend } from "./ISendableToBackend";

export interface ISubjectSendable extends CanBeSentOverToBackend {
    Name: string;
    Code: string;
    Tags: string;
    Description: string;
}