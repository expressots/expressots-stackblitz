import "reflect-metadata";

import { ServerEnvironment } from "@expressots/adapter-express";
import { AppFactory } from "@expressots/core";
import { container } from "./app.container";
import { App } from "./app.provider";

async function bootstrap() {
    const app = await AppFactory.create(container, App);
    await app.listen(3000, ServerEnvironment.Development, {
        appName: "ExpressoTS Starter",
        appVersion: "1.0.0",
    });
}

bootstrap();
