import { Injectable } from "@angular/core";
import { UserLevelEnum, UserLevelMapper } from "../models/enum/user-level-enum";
import { User } from "../models/base/user";

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor() { }

  getUser = () => {
    return new User(
      'Leonardo Santos',
      'leonardosantos@gmail.com',
      'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      UserLevelEnum.Purple);
  }

  getUserLevels = () => Object.keys(UserLevelEnum);

  getUserLevelMapper = (level: UserLevelEnum) => UserLevelMapper.find((mapper) => mapper.value === level);
}