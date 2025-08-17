import { Injectable } from "@nestjs/common";
import { crypt } from "ambulance-lib";

@Injectable()
export class AppService {
	async getHello(): Promise<string> {
		const text = "Hello World";
		const cipher = await crypt(text);
		return cipher;
	}
}
