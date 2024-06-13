import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup,  FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { Moment } from '../../entities/moment';

@Component({
  selector: 'app-moment-form',
  standalone: true,
  imports: [ ReactiveFormsModule, FormsModule, CommonModule ],
  templateUrl: './moment-form.component.html',
  styleUrl: './moment-form.component.css'
})
export class MomentFormComponent {
  @Output() onSubmit = new EventEmitter<Moment>
  @Input() momentDataUp!: Moment;
  @Input() btnText! : String;

  image?: File;
  momentTitle!: String;
  momentData = {
    'id': '001',
  'title': 'Titulo',
  'description': 'Descricao',
  'image': ''}

  momentForm!: FormGroup;

  constructor(){
    // TODO: Varificar porque não esta preechendo o form
    async () =>{
      await this.visualizarMomento()
     }

    this.momentForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl(''),
    })



    console.log(this.momentTitle);
    // if (this.momentData) {    
    //   this.momentForm.patchValue({
    //     id: this.momentData.id,
    //     title: this.momentData.title,
    //     description: this.momentData.description,
    //   });
    // }
  };

  async visualizarMomento(){

    this.momentTitle = this.momentDataUp?.title
  }
  
  get title() {
    return this.momentForm.get('title');
  }
  get description() {
    return this.momentForm.get('description');
  }

  onFileSelected(event: any){
    this.momentForm.patchValue({ image: File = event.target.files[0] });

  }

  submit() {
    if (!this.momentForm.value){
       return;
    }
    const moment: Moment = this.momentForm.value;
    this.onSubmit.emit(moment);
        
  }
}
