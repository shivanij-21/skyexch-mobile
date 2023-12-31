import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss']
})
export class TokenComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private tokenService: TokenService,
  ) {
    this.route.params.subscribe(params => {
      console.log(params)
      if (params.token) {
        this.tokenService.removeToken();
        this.tokenService.setToken(params.token);
        this.tokenService.setLocalToken(params.token);
        // window.location.href = window.location.origin + "/home";
        window.location.href = window.location.origin + window.location.pathname;
      }
    });
  }

  ngOnInit(): void {
  }

}
