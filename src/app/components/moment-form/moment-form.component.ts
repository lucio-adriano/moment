import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup,  FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { Moment } from '../../entity/moment';

@Component({
  selector: 'app-moment-form',
  standalone: true,
  imports: [ ReactiveFormsModule, FormsModule, CommonModule ],
  templateUrl: './moment-form.component.html',
  styleUrl: './moment-form.component.css'
})
export class MomentFormComponent {
  @Output() onSubmit = new EventEmitter<Moment>
  @Input() btnText! : String;

  momentForm = new FormGroup({
    id : new FormControl(''),
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    image: new FormControl('')
  })

  get title() {
    return this.momentForm.get('title');
  }
  get description() {
    return this.momentForm.get('description');
  }

  onFileSelected(event: any){
    // const file: File = event.target.files[0];
    this.momentForm.patchValue({ image: File = event.target.files[0] });

  }

  submit() {
    if (this.momentForm.invalid){
       return;
    }
    const moment:Moment = this.momentForm.value;
    this.onSubmit.emit(moment);
        
  }
}
