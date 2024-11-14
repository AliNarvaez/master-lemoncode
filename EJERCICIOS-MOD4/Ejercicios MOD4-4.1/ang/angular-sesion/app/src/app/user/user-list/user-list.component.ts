import { NgFor, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormsModule,
  // ReactiveFormsModule,
  // FormBuilder,
  // Validators,
  // FormGroup,
  // FormControl,
} from '@angular/forms';
import { HighlightDirective } from '../../directives/highlight.directive';
import { MemberEntity } from '../../model';
import { SearchByLoginPipe } from '../../pipes/search-by-login.pipe';
import { MembersService } from '../../services/members.service';
import { UserEditComponent } from '../user-edit/user-edit.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    NgFor,
    HighlightDirective,
    FormsModule,
    NgIf,
    SearchByLoginPipe,
    UserEditComponent,
    // ReactiveFormsModule,
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnInit {
  members: MemberEntity[] = [];
  newMember!: MemberEntity;

  memberSelected!: MemberEntity;

  constructor(
    private memberService: MembersService,
    // private formBuilder: FormBuilder
  ) {}
  // private memberService: MembersService = inject(MembersService);

  ngOnInit(): void {
    this.memberService
      .getAll()
      .subscribe((members) => (this.members = members));
    this.newMember = this.newDefaultMember();

    // this.createEditForm();
  }

  // private createEditForm() {
  //   this.editForm = this.formBuilder.group({
  //     id: ['', Validators.required],
  //     login: ['', [Validators.required, Validators.minLength(6)]],
  //     avatar_url: '',
  //   });

  //   this.idControl = this.editForm.get('id') as FormControl;
  //   this.loginControl = this.editForm.get('login') as FormControl;
  //   this.avatarControl = this.editForm.get('avatar_url') as FormControl;
  // }

  add(): void {
    this.members.push(this.newMember);
    this.newMember = this.newDefaultMember();
  }

  private newDefaultMember() {
    return {
      id: '',
      login: '',
      avatar_url: '',
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

  // handleFileInput($event: any) {
  //   const files = $event.target.files as FileList;
  //   const reader = new FileReader();
  //   reader.readAsDataURL(files[0]);
  //   reader.onload = () => {
  //     this.avatarControl.setValue(reader.result);
  //   };
  // }

  select(member: MemberEntity): void {
    this.memberSelected = { ...member };
    // this.editForm.patchValue(this.memberSelected);
  }

  // save() {
  //   if (this.editForm.valid) {
  //     this.members = [...this.members];
  //     const member = this.editForm.value;
  //     const index = this.members.findIndex((item) => item.id === member.id);
  //     this.members.splice(index, 1, member);
  //   }
  // }

  updatedMember($event: MemberEntity): void {
    this.members = this.members.map((member) => {
      if (member.id === $event.id) {
        return $event;
      }
      return member;
    })
  }

}
