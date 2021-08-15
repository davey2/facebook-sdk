import { AxiosInstance } from "axios";
import Message from "./interfaces/Message";

export class SimpleMessage implements Message {
	private _recipient!: string;
	private _text!: string;

	constructor(private _http: AxiosInstance) {}

	public set recipient(recipient: string) {
		this._recipient = recipient;
	}

	public get recipient(): string {
		return this._recipient;
	}

	public get http(): AxiosInstance {
		return this._http;
	}

	public set text(text: string) {
		this._text = text;
	}

	public get text(): string {
		return this._text;
	}

	public async send(): Promise<void> {
		return new Promise((resolve, reject) => {
			if (this._text && this._recipient) {
				this.http
					.post("/messages", {
						recipient: {
							id: this._recipient,
						},
						message: {
							text: this._text,
						},
					})
					.then(() => resolve())
					.catch(reject);
			} else reject();
		});
	}
}
