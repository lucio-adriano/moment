import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MomentFormComponent } from '../../components/moment-form/moment-form.component';
import { Moment } from '../../entities/moment';

import { MomentService } from '../../services/moment.service';
import { MessagesService } from '../../services/messages.service';
 

@Component({
  selector: 'app-new-moment',
  standalone: true,
  imports: [MomentFormComponent],
  templateUrl: './new-moment.component.html',
  styleUrl: './new-moment.component.css'
})
export class NewMomentComponent {
  btnText = "Compatilhar!";
  @Input() moment!: Moment

  constructor(private momentService: MomentService, private messagesService: MessagesService,  private router: Router) { }

  createHandler(moment: Moment) {

    const formData = new FormData();

    if (moment.title) {
      formData.append('title', moment.title);
    }
    if (moment.description) {
      formData.append('description', moment.description);
    }
    if (moment.image) {
      formData.append('image', moment.image);
    }

    this.momentService.createMoment(formData).subscribe();

    this.messagesService.add('Momento adicionado com sucesso!');

    this.router.navigate(['/']);

  }

}
