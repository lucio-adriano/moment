import { Component, EnvironmentInjector } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MomentService } from '../../services/moment.service';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';

import { Moment } from '../../entities/moment';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

import { environment } from '../../../environments/environment';
import { MessagesService } from '../../services/messages.service';


@Component({
  selector: 'app-moment',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterLink],
  templateUrl: './moment.component.html',
  styleUrl: './moment.component.css'
})
export class MomentComponent {
  faEdit = faEdit;
  faTimes = faTimes;
  baseApiUrl = environment.baseApiUrl;

  moment: Moment | undefined;

  constructor(
    private momentService: MomentService, 
    private route: ActivatedRoute, 
    private router: Router, 
    private messagesService: MessagesService) {

    const id: number = Number(this.route.snapshot.paramMap.get('id'));

    this.momentService.getMoment(id).subscribe(item => this.moment = item.data);
  }

  removeHandle(id: number) {
    const idMoment = id;

    this.momentService.removeMoment(idMoment).subscribe();
    this.messagesService.add("Momento excluído com sucesso!");
    this.router.navigate(["/"]);
  }

}

