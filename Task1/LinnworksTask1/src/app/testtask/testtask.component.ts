import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';

import { TokenService } from './../token.service';

@Component({
  selector: 'app-testtask',
  templateUrl: './testtask.component.html',
  styleUrls: ['./testtask.component.less']
})
export class TesttaskComponent implements OnInit {
    public token = undefined;

    public tokenSuccess: boolean = false;

    @ViewChild('TokenInput') TokenInput: ElementRef;

    constructor(public tokenService: TokenService) {
    }

    ngOnInit() {
        this.token = this.tokenService.getToken();

        if (this.token) {
            this.tokenSuccess = true;
        }
    }

    enterTokenClick() {
        var token = this.TokenInput.nativeElement.value;

        this.tokenService.setToken(token);

        this.tokenSuccess = true;
    }
}
