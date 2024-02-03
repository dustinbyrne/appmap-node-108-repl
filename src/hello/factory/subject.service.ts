import { Injectable } from "@nestjs/common";

@Injectable()
export class SubjectService {
  private readonly subjects = ["World", "Moon", "NestJS"];
  getSubject(): string {
    return this.subjects[~~(Math.random() * this.subjects.length)];
  }
}
