import { WebPlugin } from '@capacitor/core';
import { PaystackCapacitorPlugin } from './definitions';

export class PaystackCapacitorWeb extends WebPlugin implements PaystackCapacitorPlugin {
	constructor() {
		super({
			name: 'PaystackCapacitor',
			platforms: ['web']
		});
	}
	initialize(payload: { publicKey: string }): Promise<{ initialized: boolean; }> {
		throw new Error("Method not implemented.");
	}
	addCard(payload: { cardNumber: string, expiryMonth: string, expiryYear: string, cvv: string }): Promise<{ is_valid: boolean; }> {
		throw new Error("Method not implemented.");
	}
	chargeCard(): Promise<{ reference: string; }> {
		throw new Error("Method not implemented.");
	}

	validateCard(): Promise<{ is_valid: boolean }> {
		throw new Error("Method not implemented.");
	}

	addChargeParameters(parameters: { [key: string]: string }): Promise<any> {
		throw new Error("Method not implemented.");
	}
	getCardType(): Promise<{ card_type: string }> {
		throw new Error("Method not implemented.");
	}
	putChargeMetadata(metadata: { [key: string]: string }): Promise<any> {
		throw new Error("Method not implemented.");
	}
	putChargeCustomFields(customFields: { [key: string]: string }): Promise<any> {
		throw new Error("Method not implemented.");
	}
	setChargeEmail(payload: { email: string }): Promise<any> {
		throw new Error("Method not implemented.");
	}
	setChargeAmount(payload: { amount: string }): Promise<any> {
		throw new Error("Method not implemented.");
	}
	setAccessCode(payload: { accessCode: string }): Promise<any> {
		throw new Error("Method not implemented.");
	}


	async echo(options: { value: string }): Promise<{ value: string }> {
		console.log('ECHO', options);
		return options;
	}
}

const PaystackCapacitor = new PaystackCapacitorWeb();

export { PaystackCapacitor };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(PaystackCapacitor);
