import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup,  FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-moment-form',
  standalone: true,
  imports: [ ReactiveFormsModule, FormsModule, CommonModule ],
  templateUrl: './moment-form.component.html',
  styleUrl: './moment-form.component.css'
})
export class MomentFormComponent {
  @Input() btnText! : String;

  momentForm = new FormGroup({
    id: new FormControl(''),
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

  submit() {
    if (this.momentForm.invalid){
       return;
    }
    console.log("enviou...");
    
  }
}
