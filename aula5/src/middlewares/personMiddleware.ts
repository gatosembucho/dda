import { Request, Response, NextFunction } from "express";

export const validateRegister = (req: Request, res: Response, next:NextFunction) => {
    const {name, age}  = req.body
    if(!name || !age){
        return res.status(400).send({response: "Dados vazios"})
    }
}


export const validateUpdate = (req: Request, res: Response, next:NextFunction) => {
    const {id}  = req.body
    if(!id){
        return res.status(400).send({response: "Usuario não encontrado"})
    }
}


export const validateDelete = (req: Request, res: Response, next:NextFunction) => {
    const {id}  = req.body
    if(!id){
        return res.status(400).send({response: "Usuario não encontrado"})
    }
}