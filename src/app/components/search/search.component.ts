import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GithubService } from 'src/app/services/github.service';


@Component({
  selector: 'app-search',
  styleUrls: ['./search.component.scss'],
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  baseUsers;
  users;

  page = 1;

  constructor(private githubService: GithubService, public router: Router) { }



  ngOnInit() {
    this.githubService.getUsers(this.page).subscribe((response) => {
      this.users = response;
      this.baseUsers = this.users;
    });
  }

  searchUser(data) {
    console.log(data);
    if (data.target.value == '' || !data.target.value) {
      this.users = this.baseUsers;
      return;
    }
    this.githubService.getUser(data.target.value).subscribe((response) => {
      this.users = [response];
    });
  }



}

// export class SearchComponent {

//   userName: string;

//   constructor(private _githubService: GithubService, public router: Router) {
//   }

//   searchUser() {
//     this._githubService.updateUsername(this.userName);
//     this.router.navigate(['/profile'], { queryParams: { userName: this.userName } });

//   }

// }











