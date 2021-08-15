import { AxiosInstance } from "axios";
import { Greeting } from "./Greeting";
import { IceBreaker } from "./IceBreaker";
import { PersistentMenu } from "./PersistentMenu";

export class Profile {
	constructor(private http: AxiosInstance) {}

	set get_started(payload: string) {
		this.http.post("/messenger_profile", {
			get_started: {
				payload,
			},
		});
	}

	set greeting(greetings: Greeting[]) {
		this.http.post("/messenger_profile", {
			greeting: greetings,
		});
	}

	set ice_breakers(iceBreakers: IceBreaker[]) {
		this.http.post("/messenger_profile", {
			ice_breakers: iceBreakers,
		});
	}

	set persistent_menu(persistentMenus: PersistentMenu[]) {
		this.http.post("/messenger_profile", {
			persistent_menu: persistentMenus,
		});
	}
}
