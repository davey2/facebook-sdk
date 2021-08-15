# Facebook SDK

## Example

```ts
import Facebook, { QuickReplyMessage, SimpleMessage } from "facebook-sdk";

const facebook: Facebook = new Facebook({
	accessToken: "ACCESS_TOKEN",
});

// SimpleMessage
const simpleMessage: SimpleMessage =
	facebook.Messenger.Messaging.createSimpleMessage();
simpleMessage.recipient = "112233445566778899";
simpleMessage.text = "Hello World!";
simpleMessage.send();

// QuickReplyMessage
const quickReplyMessage: QuickReplyMessage =
	facebook.Messenger.Messaging.createQuickReply();
quickReplyMessage.recipient = "112233445566778899";
quickReplyMessage.text = "Hello World!";
quickReplyMessage.addQuickReply("Button One", "PAYLOAD_BUTTON_ONE");
quickReplyMessage.addQuickReply("Button Two", "PAYLOAD_BUTTON_TWO");
quickReplyMessage.addQuickReply("Button Three", "PAYLOAD_BUTTON_THREE");
quickReplyMessage.send();

// Profile settings
facebook.Messenger.Profile.get_started = "GET_STARTED";
facebook.Messenger.Profile.greeting = [
	{ locale: "default", text: "Hello World!" },
];
facebook.Messenger.Profile.persistent_menu = [
	{
		locale: "default",
		call_to_actions: [
			{ type: "postback", title: "Button One", payload: "PAYLOAD_BUTTON_ONE" },
			{ type: "postback", title: "Button Two", payload: "PAYLOAD_BUTTON_TWO" },
			{
				type: "postback",
				title: "Button Three",
				payload: "PAYLOAD_BUTTON_THREE",
			},
		],
	},
];
```
