import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TokenService {

    private token = undefined;
    private LOCAL_STORAGE_TOKEN_KEY = "TOKEN_KEY_FOR_API";

    constructor() {
        var tokenFromLs = window.localStorage.getItem(this.LOCAL_STORAGE_TOKEN_KEY);

        if (tokenFromLs && this.validateToken(tokenFromLs)) {
            this.token = tokenFromLs;
        }
    }

    public setToken(token: string) {
        if (!token || !this.validateToken(token)) {
            console.error("Token error");
            return;
        }

        this.token = token;
        window.localStorage.setItem(this.LOCAL_STORAGE_TOKEN_KEY, token);
    }

    public getToken() {
        return this.token;
    }

    public clearToken() {
        this.token = undefined;
        window.localStorage.setItem(this.LOCAL_STORAGE_TOKEN_KEY, undefined);
    }

    private validateToken(token: string) {
        return token.length >= 32;
    }
}
