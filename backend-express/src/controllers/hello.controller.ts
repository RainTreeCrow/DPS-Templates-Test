import { Request, Response } from 'express';

export async function getHello(req: Request, res: Response) {
	res.send('Hello DPS Expressjs Template 👋');
}
