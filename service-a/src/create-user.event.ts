export class createUserEvent {
  constructor(
    public readonly email: string,
    public readonly password: string,
  ) {}
}
