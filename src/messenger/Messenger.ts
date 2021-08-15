import { AxiosInstance } from "axios";
import { Messaging } from "./messaging";
import { Profile } from "./profile";

export class Messenger {
	private messaging: Messaging;
	private profile: Profile;

	constructor(private http: AxiosInstance) {
		this.messaging = new Messaging(this.http);
		this.profile = new Profile(this.http);
	}

	get Messaging(): Messaging {
		return this.messaging;
	}

	get Profile(): Profile {
		return this.profile;
	}
}
