export class Payments {
    constructor(c, d, a) {
        this.recipients = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.recipients} is owed £${this.amount} for ${this.details}`;
    }
}
