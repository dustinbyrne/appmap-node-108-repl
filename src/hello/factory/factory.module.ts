import { Module } from "@nestjs/common";
import { GreetingService } from "./greeting.service";
import { SubjectService } from "./subject.service";

@Module({
  providers: [GreetingService, SubjectService],
  exports: [GreetingService, SubjectService],
})
export class FactoryModule {}
