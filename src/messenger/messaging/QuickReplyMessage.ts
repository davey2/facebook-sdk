import { AxiosInstance } from "axios";
import Message from "./interfaces/Message";
import { SimpleMessage } from "./SimpleMessage";

export class QuickReplyMessage extends SimpleMessage implements Message {
	private quickReplies: { title: string; payload: string }[] = [];

	constructor(_http: AxiosInstance) {
		super(_http);
	}

	public addQuickReply(title: string, payload: string) {
		this.quickReplies.push({ title, payload });
	}

	public async send(): Promise<void> {
		return new Promise((resolve, reject) => {
			if (this.text && this.recipient && this.quickReplies.length > 0) {
				const quick_replies: {
					content_type: string;
					title: string;
					payload: string;
				}[] = [];

				this.quickReplies.forEach((quickReply) => {
					quick_replies.push({
						content_type: "text",
						title: quickReply.title,
						payload: quickReply.payload,
					});
				});

				this.http
					.post("/messages", {
						recipient: {
							id: this.recipient,
						},
						message: {
							text: this.text,
							quick_replies,
						},
					})
					.then(() => resolve())
					.catch(reject);
			} else reject();
		});
	}
}
