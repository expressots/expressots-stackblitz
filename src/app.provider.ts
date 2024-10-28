import {
    Env,
    IMiddleware,
    Middleware,
    ProviderManager,
} from "@expressots/core";
import { AppExpress, Engine } from "@expressots/adapter-express";
import { container } from "./app.container";

export class App extends AppExpress {
    private middleware: IMiddleware;
    private provider: ProviderManager;

    constructor() {
        super();
        this.middleware = container.get<IMiddleware>(Middleware);
        this.provider = container.get(ProviderManager);
    }

    protected configureServices(): void | Promise<void> {
        this.setEngine(Engine.HBS);

        this.middleware.addBodyParser();
        this.middleware.setErrorHandler({ showStackTrace: true });
    }

    protected postServerInitialization(): void | Promise<void> {}

    protected serverShutdown(): void | Promise<void> {}
}
