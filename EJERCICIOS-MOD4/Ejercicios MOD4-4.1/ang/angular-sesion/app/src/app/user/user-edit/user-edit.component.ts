import { CommonModule, NgIf } from '@angular/common';
import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MemberEntity } from '../../model';
import { MembersService } from '../../services/members.service';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.scss',
})
export class UserEditComponent implements OnInit, OnChanges {
  @Input()
  member!: MemberEntity;

  @Output()
  updatedMemberEvent: EventEmitter<MemberEntity> = new EventEmitter();
  
  editForm!: FormGroup;
  idControl!: FormControl;
  loginControl!: FormControl;
  avatarControl!: FormControl;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createEditForm();
  }

  private createEditForm() {
    this.editForm = this.formBuilder.group({
      id: ['', Validators.required],
      login: ['', [Validators.required, Validators.minLength(6)]],
      avatar_url: '',
    });

    this.idControl = this.editForm.get('id') as FormControl;
    this.loginControl = this.editForm.get('login') as FormControl;
    this.avatarControl = this.editForm.get('avatar_url') as FormControl;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
    // throw new Error('Method not implemented.');
    if (changes['member'].currentValue) {
      this.editForm.patchValue(this.member);
    }
  }
  handleFileInput($event: any) {
    const files = $event.target.files as FileList;
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.avatarControl.setValue(reader.result);
    };
  }

  // handleFileChange($event: any) {
  //   const files = $event.target.files as FileList;
  //   const reader = new FileReader();
  //   reader.readAsDataURL(files[0]);
  //   reader.onload = () => {
  //     this.newMember.avatar_url = reader.result as string;
  //   };
  // }

  save() {
    if (this.editForm.valid) {
      // this.members = [...this.members];
      // const member = this.editForm.value;
      // const index = this.members.findIndex((item) => item.id === member.id);
      // this.members.splice(index, 1, member);
      const member = this.editForm.value;
      this.updatedMemberEvent.emit(member);
    }
  }
}
