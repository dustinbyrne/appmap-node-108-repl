import { Injectable } from "@nestjs/common";
import { GreetingService } from "./factory/greeting.service";
import { SubjectService } from "./factory/subject.service";

@Injectable()
export class HelloService {
  constructor(
    private readonly greetingService: GreetingService,
    private readonly subjectService: SubjectService
  ) {}

  randomResponse(): string {
    return [
      this.greetingService.getGreeting(),
      this.subjectService.getSubject(),
    ].join(" ");
  }
}
