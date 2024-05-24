import { Component } from '@angular/core';
import { MomentFormComponent } from '../../components/moment-form/moment-form.component';

@Component({
  selector: 'app-new-moment',
  standalone: true,
  imports: [MomentFormComponent],
  templateUrl: './new-moment.component.html',
  styleUrl: './new-moment.component.css'
})
export class NewMomentComponent {
  btnText = "Compatilhar!";

}
