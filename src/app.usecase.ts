import { provide } from "inversify-binding-decorators";

@provide(AppUseCase)
export class AppUseCase {
    execute() {
        return "Hello Dev!";
    }
}
