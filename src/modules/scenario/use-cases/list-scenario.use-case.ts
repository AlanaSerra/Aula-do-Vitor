import { Injectable, Logger } from "@nestjs/common";
import { ListRepository } from "../repository";

@Injectable()
export class ListScenarioUseCase {
    constructor(private readonly listScenarioRepository: ListRepository, 
                private readonly logger:Logger) {}

    async list() {
        try {
            const scenario = await this.listScenarioRepository.list();
            this.logger.log("scenario finds sucess")
            return scenario;
        } catch (error) {
            this.logger.error(error)
        }
    }
}