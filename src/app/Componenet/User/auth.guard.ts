import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/Services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService , private router: Router){}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        
      return this.userService.isLogged();

    /*    if (this.userService.isLogged()) {
        console.log('true');
        this.router.navigate(['/Cart']);
        return true
      } else {
        console.log('false');            
        this.router.navigate(['/Loggin']);
        return false
      }  */
    
  }
  
}
