import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


import { Moment } from '../../entities/moment';

import { MomentService } from '../../services/moment.service';

import { environment } from '../../../environments/environment';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  allMoments: Moment[] = [];
  moments: Moment[] = [];
  baseApiUrl = environment.baseApiUrl;
  faSearch = faSearch;
  searchTerm: string = '';

  constructor(private momentService: MomentService) {

    this.momentService.getMoments().subscribe((items: any) => {
      const data = items.data

      data.map((item: any) => {
        item.created_at = new Date(item.created_at).toLocaleDateString('pt-BR');
      });

      this.allMoments = data;
      this.moments = data;

    })
  }
  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.moments = this.allMoments.filter((moment) => moment.title?.toLocaleLowerCase().includes(value))
  }
}