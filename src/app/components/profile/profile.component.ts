import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubService } from 'src/app/services/github.service';




@Component({
  selector: 'app-profile',
  styleUrls: ['./profile.component.scss'],
  templateUrl: './profile.component.html',
})

export class ProfileComponent implements OnInit {
  user;
  userName: any;
  router; // property to hold our user when we eventually grab them from github api
  saleData = [
    { name: "Mobiles", value: 105000 },
    { name: "Laptop", value: 55000 },
    { name: "AC", value: 15000 },
    { name: "Headset", value: 150000 },
    { name: "Fridge", value: 20000 }
  ];
  // inject the things we need
  constructor(
    private route: ActivatedRoute,
    private userService: GithubService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log('PARAMETROS', params);
      const username = params['username'];
      this.userService
        .getUser(username)
        .subscribe(user => this.user = user);
    });

    this.route.queryParams.subscribe((v: any) => {
      this.userName = v.userName;
    });



  }
  goSearch() {
    this.router.navigate(['search']);
  }
}
// export class ProfileComponent implements OnInit {


//   userName: any;
//   user: any;
//   repos: any = [];
//   readmeMdLink: string;
//   constructor(private _githubService: GithubService, private route: ActivatedRoute, public router: Router) {
//     this.user = false;
//   }
//   ngOnInit(): void {
//     this.route.queryParams.subscribe((v: any) => {
//       this.userName = v.userName;
//     });
//     this._githubService.getUser(this.userName).subscribe(user => {
//       console.log(user);
//       this.user = user;
//     });


//   }

//   readmeFun(name: string) {
//     this.router.navigate(['/readme'], { queryParams: { repoName: name, userName: this.userName } });
//   }

// }
