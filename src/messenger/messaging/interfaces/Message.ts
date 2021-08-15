import { AxiosInstance } from "axios";

export default interface Message {
	send(): Promise<void>;
	recipient: string;
}
