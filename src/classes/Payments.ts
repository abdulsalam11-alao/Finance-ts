import { HasFormatter } from "../interfaces/HasFormatter";
export class Payments implements HasFormatter {
  recipients: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.recipients = c;
    this.details = d;
    this.amount = a;
  }
  format() {
    return `${this.recipients} is owed £${this.amount} for ${this.details}`;
  }
}
