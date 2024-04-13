"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IpAddress = void 0;
const common_1 = require("@nestjs/common");
const requestIp = require("request-ip");
exports.IpAddress = (0, common_1.createParamDecorator)((data, req) => {
    if (req.clientIp)
        console.log('111');
    return req.clientIp;
    return requestIp.getClientIp(req);
});
//# sourceMappingURL=index.js.map