"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenService = void 0;
const jwt = require('jsonwebtoken');
class TokenService {
    generateToken(payload) {
        const accessToken = jwt.sign(payload, 'dwf-wqfde-qwf', { expiresIn: '2h' });
        const refreshToken = jwt.sign(payload, 'dwf-wqfde-qwf', { expiresIn: '20d' });
        return {
            accessToken,
            refreshToken
        };
    }
}
exports.TokenService = TokenService;
//# sourceMappingURL=token-service.js.map