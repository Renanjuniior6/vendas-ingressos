import * as express from 'express'

declare global {
    namespace Express {
        interface Request {
            user?: { id: number, email: string },
        }
    }
}

// Esse arquivo é para sobrescrever (fazer um overwrite) a tipagem do express para que ele entenda a tipagem do "req.user"