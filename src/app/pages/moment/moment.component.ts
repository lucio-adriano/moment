import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';

import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';

import { MomentService } from '../../services/moment.service';
import { MessagesService } from '../../services/messages.service';
import { CommentService } from '../../services/comment.service';

import { Moment } from '../../entities/moment';
import { Comment } from '../../entities/comment';

import { environment } from '../../../environments/environment';



@Component({
  selector: 'app-moment',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterLink, ReactiveFormsModule],
  templateUrl: './moment.component.html',
  styleUrl: './moment.component.css'
})
export class MomentComponent {
  faEdit = faEdit;
  faTimes = faTimes;
  baseApiUrl = environment.baseApiUrl;

  moment!: Moment;
  commentForm!: FormGroup;

  constructor(
    private momentService: MomentService,
    private route: ActivatedRoute, 
    private router: Router, 
    private messagesService: MessagesService,
    private commentService: CommentService) {

    const id: number = Number(this.route.snapshot.paramMap.get('id'));

    this.momentService.getMoment(id).subscribe((item) => {
      this.moment = item.data
      
    });
    this.commentForm = new FormGroup({
      text: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required])
    })
  }

  get text(){
    return this.commentForm.get('text')!;
  }
  get username(){
    return this.commentForm.get('username')!;
  }

  removeHandle(id: number) {
    const idMoment = id;

    this.momentService.removeMoment(idMoment).subscribe();
    this.messagesService.add("Momento excluído com sucesso!");
    this.router.navigate(["/"]);
  }
  onSubmit(formDirective: FormGroupDirective){

    if (this.commentForm.invalid) {
      return      
    }
    const data: Comment = this.commentForm.value;

    data.momentId = Number(this.moment?.id);

    this.commentService.createComment(data).subscribe(coment => {
      this.moment?.comments?.push(coment.data)
      console.log('data: ', data);
  });
    
    this.messagesService.add("Comentário adicionado!");

    this.commentForm.reset();
    formDirective.reset();

  }

}

