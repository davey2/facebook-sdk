import { AxiosInstance } from "axios";
import Message from "./interfaces/Message";

export class GenericMessage implements Message {
	private elements: GenericElement[] = [];

	constructor(private http: AxiosInstance) {}

	public set recipient(recipient: string) {
		this.recipient = recipient;
	}

	public addElement(element: GenericElement) {
		this.elements.push(element);
	}

	public async send(): Promise<void> {
		return new Promise((resolve, reject) => {
			if (this.recipient && this.elements.length > 0) {
				const elements: any[] = [];

				this.elements.forEach((element) => {
					const buttons: any[] = [];

					element.buttons.forEach((button) => {
						buttons.push({
							type: button.type,
							payload: button.payload,
							title: button.title,
						});
					});

					elements.push({
						title: element.title,
						image_url: element.image,
						subtitle: element.subTitle,
						buttons,
					});
				});

				this.http
					.post("/messages", {
						recipient: {
							id: this.recipient,
						},
						message: {
							attachment: {
								type: "template",
								payload: {
									template_type: "generic",
									elements,
								},
							},
						},
					})
					.then(() => resolve())
					.catch(reject);
			} else reject();
		});
	}
}

export class GenericElement {
	public buttons: {
		type: string;
		url: string;
		title: string;
		payload: string;
	}[] = [];

	public set image(title: string) {
		this.image = title;
	}

	public get image(): string {
		return this.image;
	}

	public set subTitle(title: string) {
		this.subTitle = title;
	}

	public get subTitle(): string {
		return this.subTitle;
	}

	public set title(title: string) {
		this.title = title;
	}

	public get title(): string {
		return this.title;
	}

	public addButton(button: ElementButton) {
		this.buttons.push(button);
	}
}

export interface ElementButton {
	type: string;
	url: string;
	title: string;
	payload: string;
}
