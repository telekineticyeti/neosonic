import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-login',
  templateUrl: './dialog-login.component.html',
  styleUrls: ['./dialog-login.component.scss'],
})
export class LoginDialogComponent implements OnInit {
  public username: string | null;
  public password: string | null;
  public server: string | null;
  public form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: airsonicDialogModels.LoginData,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<LoginDialogComponent>,
  ) {
    this.username = data.username;
    this.password = data.password;
    this.server = data.server;
  }

  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: this.username,
      password: this.password,
      server: this.server,
    });

    this.form.controls['username'].setValidators([Validators.required]);
    this.form.controls['password'].setValidators([Validators.required]);
    this.form.controls['server'].setValidators([Validators.required]);
  }

  public save(): void {
    this.dialogRef.close(this.form.value);
  }

  public close() {
    this.dialogRef.close(false);
  }
}
