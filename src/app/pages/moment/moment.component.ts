import { Component } from '@angular/core';

import { MomentService } from '../../services/moment.service';

import { Moment } from '../../entities/moment';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-moment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './moment.component.html',
  styleUrl: './moment.component.css'
})
export class MomentComponent {

  moment: Moment | undefined;

  constructor(private momentService: MomentService, private route: ActivatedRoute){

    const id: number = Number(this.route.snapshot.paramMap.get('id'));

    this.momentService.getMoment(id).subscribe(item => this.moment = item.data )
  }

}

