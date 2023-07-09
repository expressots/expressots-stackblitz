import "reflect-metadata";
import { AppInstance, ServerEnvironment } from "@expressots/core";
import { container } from "./app.container";
import express from "express";
import { engine } from "express-handlebars";
import path from "path";

async function bootstrap() {
    AppInstance.create(container, [
        express.application.engine(
            "hbs",
            engine({
                defaultLayout: "layout",
                layoutsDir: __dirname + "/views/layouts/",
            }),
        ),
        express.application.set("views", path.join(__dirname, "views")),
        express.application.set("view engine", "hbs"),
    ]);
    AppInstance.listen(3000, ServerEnvironment.Development);
}

bootstrap();
