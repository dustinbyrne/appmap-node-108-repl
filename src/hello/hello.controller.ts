import { Controller, Get } from "@nestjs/common";
import { HelloService } from "./hello.service";
@Controller("hello")
export class HelloController {
  constructor(private readonly service: HelloService) {}

  @Get()
  getHello(): string {
    return this.service.randomResponse();
  }
}
