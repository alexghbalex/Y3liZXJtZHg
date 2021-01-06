import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Observable } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  userName$: Observable<string>;
  searchRequest = new FormControl('', [Validators.required, Validators.minLength(3)]);

  constructor(private loginService: LoginService, private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.userName$ = this.loginService.getUserName();
    this.searchRequest.valueChanges.subscribe(val => this.search(val));
  }

  search(val: string): void {
    this.apiService.getData(val);
  }
}
