import { Response } from "express";
import { Get, controller, response } from "@expressots/adapter-express";
import { BaseController } from "@expressots/core";
import { AppUseCase } from "./app.usecase";

@controller("/")
export class AppController extends BaseController {
    constructor(private appUseCase: AppUseCase) {
        super();
    }

    @Get("/")
    execute(@response() res: Response) {
        return this.callUseRenderAsync(res, "index", {
            layout: "layout",
            message: this.appUseCase.execute(),
        });
    }
}
