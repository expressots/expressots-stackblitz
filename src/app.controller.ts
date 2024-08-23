import { Get, Render, controller } from "@expressots/adapter-express";

@controller("/")
export class AppController {
    @Get("")
    @Render("index", { message: "Hello from ExpressoTS!" })
    execute() {}
}
