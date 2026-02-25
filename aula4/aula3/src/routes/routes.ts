import { Express} from "express";
import express from 'express'
import person from "./usuarios.ts"

export default function (app: Express){
    app
    .use(express.json())
    .use('/api/usuarios', person)
}