import { BaseDataOutput } from "src/app/core/models/data/base-data-output";
import { UserLevelEnum } from "../enum/user-level-enum";

export class User extends BaseDataOutput {
  constructor(
    public name: string = 'User',
    public email: string = '',
    public avatar: string = 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
    public level: UserLevelEnum = UserLevelEnum.Silver
  ) {
    super();
  }
}