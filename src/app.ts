import { AppExpress, RenderEngine } from "@expressots/adapter-express";
import { AppContainer, CreateModule } from "@expressots/core";
import { AppController } from "./app.controller";

export class App extends AppExpress {
    private config: AppContainer = this.configContainer([
        CreateModule([AppController]),
    ]);

    async globalConfiguration(): Promise<void> {}

    async configureServices(): Promise<void> {
        this.setEngine(RenderEngine.Engine.HBS);
    }

    async postServerInitialization(): Promise<void> {}

    async serverShutdown(): Promise<void> {}
}
