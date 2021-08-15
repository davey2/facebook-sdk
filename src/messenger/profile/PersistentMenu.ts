export interface PersistentMenu {
	locale: string;
	composer_input_disabled?: boolean;
	call_to_actions: MenuItem[];
}

interface MenuItem {
	type: "web_url" | "postback";
	title: string;
	url?: string;
	payload: string;
	webview_height_ratio?: string;
	messenger_extensions?: boolean;
	fallback_url?: string;
	webview_share_button?: string;
}
