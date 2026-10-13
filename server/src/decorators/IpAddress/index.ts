import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import * as requestIp from 'request-ip';

export const IpAddress = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
	// Извлекаем настоящий объект запроса (req) из контекста NestJS
	const req = ctx.switchToHttp().getRequest<any>();

	if (req.clientIp) {
		return req.clientIp;
	}
	
	return requestIp.getClientIp(req); // In case we forgot to include requestIp.mw() in main.ts
});