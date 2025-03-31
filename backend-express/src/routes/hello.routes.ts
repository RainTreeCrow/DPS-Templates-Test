import express from 'express';
import { getHello } from '../controllers/hello.controller';

const helloRouter = express.Router()

helloRouter.get(`/`, getHello);

export default helloRouter;