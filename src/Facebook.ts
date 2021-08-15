import axios, { AxiosInstance } from "axios";
import { Messenger } from "./messenger";

export default class Facebook {
	private http: AxiosInstance;
	private messenger: Messenger;

	constructor({
		accessToken,
		objectId = "me",
	}: {
		accessToken: string;
		objectId?: string;
	}) {
		this.http = axios.create({
			baseURL: `https://graph.facebook.com/v11.0/${objectId}`,
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});

		this.messenger = new Messenger(this.http);
	}

	get Messenger(): Messenger {
		return this.messenger;
	}
}
