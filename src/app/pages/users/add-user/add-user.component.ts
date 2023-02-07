import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  userForm: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      FirstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      LastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      Email: ['', [Validators.required, Validators.email]],
    })
  }

  createNewUser() {

  }

}
