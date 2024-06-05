import { Component } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { Moment } from '../../entities/moment';
import { MomentService } from '../../services/moment.service';
import { CommonModule } from '@angular/common';
import { MomentFormComponent } from "../../components/moment-form/moment-form.component";
import { MessagesService } from '../../services/messages.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-edit-moment',
    standalone: true,
    templateUrl: './edit-moment.component.html',
    styleUrl: './edit-moment.component.css',
    imports: [CommonModule, MomentFormComponent, ReactiveFormsModule]
})

export class EditMomentComponent {
  moment!: Moment;
  btnText: String = 'Editar';

  constructor(
    private momentService: MomentService, 
    private router: Router, 
    private route: ActivatedRoute, 
    private messagensService: MessagesService){
    
    const id = Number(this.route.snapshot.paramMap.get("id"));
    
    
    this.momentService.getMoment(id).subscribe( (item) => {
      
      this.moment = item.data;
    });
    
  }
  
  editHandler(momentData: Moment){
    const id = this.moment.id;
    const formData = new FormData();
  
    formData.append('title', momentData.title!);
    formData.append('description', momentData.description!);
    if (momentData.image) {
      formData.append('image', momentData.image);      
    }
    if(id){
      this.momentService.updateMoment(id, formData).subscribe();
    }

    this.messagensService.add(`Moment ${id} foi atualizado com sucesso!`);

    this.router.navigate(["/"]);

  }
}
