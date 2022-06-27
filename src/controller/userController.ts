import express, { Request, Response } from "express";
import { User } from "../model/user.model";
import { newResponse } from "../response/newResponse";

let RES = new newResponse

let userService = require("../service/userService");


// userRouter.get("/aa", (req: Request, res: Response) => {
//     res.status(200).send("Hello World");
//   });

module.exports = {
    get: (req: Request, res: Response) => {

        userService.findAll((err: Error, result: User[]) => {
            err ? res.status(500).send(RES.error(err.message))
                : res.status(200).send(RES.ok(result))

        })
    },
    getId: (req: Request, res: Response) => {
        userService.findById(req.params.id, (err: Error, result: User[]) => {

            err ? res.status(500).send(RES.error(err.message))
                : result[0]
                    ? res.status(200).send(RES.ok(result[0]))
                    : res.status(417).send(RES.error("user.not.found"));

        })



    }
}