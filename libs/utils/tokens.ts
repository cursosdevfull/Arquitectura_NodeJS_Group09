import * as jwt from 'jsonwebtoken';
import { Secret, SignOptions } from 'jsonwebtoken';
import * as crypto from 'crypto';

export class Tokens {
    static generateAccessToken(payload: Record<string, any>, secret: Secret, expiresIn: string) {
        return jwt.sign(payload, secret, { expiresIn } as SignOptions);
    }

    static generateRefreshToken() {
        return crypto.randomUUID();
    }
}
