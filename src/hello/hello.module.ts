import { Module } from "@nestjs/common";
import { HelloController } from "./hello.controller";
import { HelloService } from "./hello.service";
import { FactoryModule } from "./factory/factory.module";

@Module({
  controllers: [HelloController],
  providers: [HelloService],
  imports: [FactoryModule],
})
export class HelloModule {}
