import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user/models/base/user';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService) { }

  protected user: User = new User();
  protected newNotifications: boolean = true;

  protected appPages = [
    { title: 'Dashboard', url: '/folder/dashboard', icon: 'home' },
    { title: 'Sobre', url: '/folder/info', icon: 'information-circle' },
  ];

  ngOnInit(): void {
    this.user = this.userService.getUser();
  }

  protected levelColor = () => this.userService.getUserLevelMapper(this.user.level)?.color;

  protected toggleNotifications = () => this.newNotifications = !this.newNotifications;
}
