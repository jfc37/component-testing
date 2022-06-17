import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Input,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateDetailsComponent implements OnInit {
  @Input()
  public model!: DetailsModel;

  public formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group(this.model);
  }
}

export interface DetailsModel {
  firstName: string;
  lastName: string;
  email: string;
}
