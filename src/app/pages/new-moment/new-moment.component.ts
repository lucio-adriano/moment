import { Component } from '@angular/core';

import { MomentFormComponent } from '../../components/moment-form/moment-form.component';
import { Moment } from '../../entity/moment';

import { MomentService } from '../../services/moment.service';

@Component({
  selector: 'app-new-moment',
  standalone: true,
  imports: [MomentFormComponent],
  templateUrl: './new-moment.component.html',
  styleUrl: './new-moment.component.css'
})
export class NewMomentComponent {
  btnText = "Compatilhar!";
  
constructor(private momentService: MomentService){}

async createHandler(moment: Moment) {

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

    await this.momentService.createMoment(formData).subscribe();    
  }

}
