import { Express } from 'express';
import express from 'express';
import auth from './auth.ts';
import product from './productRoutes.ts';

export default function (app: Express) {
    app
        .use(express.json())
        .use('/api/product', product)
        .use('/api/auth',auth)
}
