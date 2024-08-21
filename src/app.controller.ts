import { Get, Render, controller, response } from "@expressots/adapter-express";
import { Response } from "express";

@controller("/")
export class AppController {
    @Get("")
    @Render("index", { message: "Hello from ExpressoTS!" })
    execute() {}
}
