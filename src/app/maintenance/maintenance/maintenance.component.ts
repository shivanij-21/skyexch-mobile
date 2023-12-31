import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent implements OnInit, OnDestroy {

  siteName = environment.siteName;
  isLcRouting = environment.isLcRouting;


  mainInterval;

  constructor(private router: Router, private authService: TokenService) { }

  ngOnInit(): void {
    this.mainInterval = setInterval(() => {

      let maintain = this.authService.getMaintanance();

      if (maintain == '1') {
        // this.router.navigate(['change_pass']);
      } else if (maintain == '2') {
        let homeCom = 'dash';

        if (this.isLcRouting) {
          homeCom = 'home';
        }
        this.router.navigate([homeCom]);

      } else {
        this.router.navigate(['maintenance']);

      }
    }, 1000)
  }

  ngOnDestroy(): void {
    if (this.mainInterval) {
      clearInterval(this.mainInterval);
    }
  }

}
