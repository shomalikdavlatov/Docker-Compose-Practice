import { Injectable, InternalServerErrorException, Logger, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export default class PrismaService extends PrismaClient implements OnModuleInit {
    private logger: Logger;
    constructor() {
        super();
        this.logger = new Logger(PrismaService.name);
    }
    async onModuleInit() {
        try {
            this.$connect();
            this.logger.log("Database connected!");
        }
        catch(error) {
            throw new InternalServerErrorException(error.message);
        }
    }
}