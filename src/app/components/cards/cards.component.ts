import { Component, OnInit } from '@angular/core';
import { ApiService, Result } from '../../services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  cards: Observable<Result>;

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.cards = this.apiService.getCurrentData();
  }
}
