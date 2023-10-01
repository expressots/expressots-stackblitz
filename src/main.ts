import "reflect-metadata";

import path from "path";
import { engine } from "express-handlebars";
import { ServerEnvironment } from "@expressots/adapter-express";
import { AppFactory, IHandlebars } from "@expressots/core";
import { container } from "./app.container";

async function bootstrap() {
    const app = await AppFactory.create(container, []);
    
    app.setEngine<IHandlebars>({
        extName: "hbs",
        viewPath: path.join(__dirname, "..", "views"),
        engine: engine({ defaultLayout: "layout", extname: "hbs" }),
    });

    await app.listen(3000, ServerEnvironment.Development);
}

bootstrap();
