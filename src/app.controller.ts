import { Response } from "express";
import { controller, httpGet, response } from "inversify-express-utils";
import { AppUseCase } from "./app.usecase";
import { BaseController } from "@expressots/core";

@controller("/")
class AppController extends BaseController {
    constructor(private appUseCase: AppUseCase) {
        super("app-controller");
    }

    @httpGet("/")
    execute(@response() res: Response) {
        return this.callUseRenderAsync(res, "index", {
            layout: "layout",
            message: this.appUseCase.execute(),
        });
    }
}

export { AppController };
