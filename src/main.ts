import path from "path";
import "reflect-metadata";
import { container } from "./app.container";
import { engine } from "express-handlebars";
import { AppInstance, IHandlebars, ServerEnvironment } from "@expressots/core";

async function bootstrap() {
    AppInstance.create(container);
    AppInstance.setEngine<IHandlebars>({
        extName: "hbs",
        viewPath: path.join(__dirname, "..", "views"),
        engine: engine({ defaultLayout: "layout", extname: "hbs" }),
    });

    AppInstance.listen(3000, ServerEnvironment.Development);
}

bootstrap();
