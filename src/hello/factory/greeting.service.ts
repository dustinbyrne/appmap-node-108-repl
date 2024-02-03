import { Injectable } from "@nestjs/common";

@Injectable()
export class GreetingService {
  private readonly greetings = ["Hello", "Hi", "Hey", "Howdy"];
  getGreeting(): string {
    return this.greetings[~~(Math.random() * this.greetings.length)];
  }
}
