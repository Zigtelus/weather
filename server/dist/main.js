"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const express = require("express");
const PORT = process.env.PORT || 3030;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    app.enableCors();
    app.use('/uploads', express.static('./uploads'));
    await app.listen(PORT, () => {
        const address = app.getHttpServer().address();
        const protocol = 'http';
        if (typeof address === 'string') {
            console.log(`Server is listening on ${address}`);
        }
        else {
            console.log(`Server is listening at ${protocol}://127.0.0.1:${address.port}`);
        }
    });
}
bootstrap();
//# sourceMappingURL=main.js.map