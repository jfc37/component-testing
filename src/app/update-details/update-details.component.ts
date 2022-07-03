import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateDetailsComponent implements OnInit {
  @Input()
  public model!: DetailsModel;

  @Output()
  public save = new EventEmitter<DetailsModel>();

  public formGroup!: FormGroup<DetailsFormModel>;

  public get firstNameValidation(): string {
    return 'xxx';
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.nonNullable.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  public saveClicked(): void {
    if (this.formGroup.valid) {
      this.save.emit(this.formGroup.value as DetailsModel);
    }
  }
}

export interface DetailsModel {
  firstName: string;
  lastName: string;
  email: string;
}

interface DetailsFormModel {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  email: FormControl<string>;
}
