import { Component, EnvironmentInjector } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MomentService } from '../../services/moment.service';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';

import { Moment } from '../../entities/moment';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-moment',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './moment.component.html',
  styleUrl: './moment.component.css'
})
export class MomentComponent {
  faEdit = faEdit;
  faTimes= faTimes;
  baseApiUrl = environment.baseApiUrl;

  moment: Moment | undefined;

  constructor(private momentService: MomentService, private route: ActivatedRoute){

    const id: number = Number(this.route.snapshot.paramMap.get('id'));

    this.momentService.getMoment(id).subscribe(item => this.moment = item.data )
  }

}

