import { AxiosInstance } from "axios";
import { SimpleMessage } from "./SimpleMessage";
import { MessageType } from "./MessageType";
import { QuickReplyMessage } from "./QuickReplyMessage";

export class Messaging {
	constructor(private http: AxiosInstance) {}

	createSimpleMessage(): SimpleMessage {
		return new SimpleMessage(this.http);
	}

	createQuickReply(): QuickReplyMessage {
		return new QuickReplyMessage(this.http);
	}
}
