import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  apiUrl = 'https://api.github.com/users';
  constructor(private http: HttpClient) { }

  getUsers(page = 1, perPage = 10) {
    return this.http.get(`${this.apiUrl}?per_page=${perPage}&page=${page}`);
  }

  getUser(username: string) {
    return this.http.get(`${this.apiUrl}/${username}`);
  }
  
}

// BARRA DE BUSQUEDA FUNCIONAL

// @Injectable()
// export class GithubService {
//   private userName: string;
//   private clientId: string;
//   private clientSecret: string;
//   private getUserUrl: string;
//   private getRepoUrl: string;
//   private getReadmeUrl: string;

//   constructor(private _http: HttpClient) {
//     this.userName = '';
//     this.clientId = '60b9f23dedffbdfc476c';
//     this.clientSecret = 'd1c186c6373f96571c0bfcf76b84e4dc6fd0c15a';
//     this.getUserUrl = 'https://api.github.com/users/[userName]?client_id=[clientId]&client_secret=[clientSecret]';
//     this.getRepoUrl = 'https://api.github.com/users/[userName]/repos?client_id=[clientId]&client_secret=[clientSecret]';
//     this.getReadmeUrl = 'https://api.github.com/repos/[userName]/[repo]/readme?client_id=[clientId]&client_secret=[clientSecret]';
//   }

//   getUser(userName) {
//     this.userName = userName;
//     if (this.userName) {
//       return this._http.get(this.getUserUrl.replace('[userName]', this.userName)
//         .replace('[clientId]', this.clientId)
//         .replace('[clientSecret]', this.clientSecret))

//     }
//   }

//   getRepos(userName) {
//     this.userName = userName;
//     if (this.userName) {
//       return this._http.get(this.getRepoUrl.replace('[userName]', this.userName)
//         .replace('[clientId]', this.clientId)
//         .replace('[clientSecret]', this.clientSecret))

//     }
//   }

//   getReadme(repoName: string, userName: string) {
//     this.userName = userName;
//     if (this.userName) {
//       return this._http.get(this.getReadmeUrl.replace('[userName]', this.userName)
//         .replace('[clientId]', this.clientId)
//         .replace('[clientSecret]', this.clientSecret)
//         .replace('[repo]', repoName))

//     }
//   }

//   updateUsername(userName: string) {
//     this.userName = userName;
//   }

// }