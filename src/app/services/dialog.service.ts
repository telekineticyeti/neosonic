import {Injectable} from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import {LoginDialogComponent} from '../components/dialogs/login/dialog-login.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  public loginDialog(
    disableClose = false,
  ): MatDialogRef<LoginDialogComponent, any> {
    const loginDialog = new MatDialogConfig();

    const data: airsonicDialogModels.LoginData = {
      username: null,
      password: null,
      server: null,
    };

    loginDialog.data = data;
    loginDialog.minWidth = 400;
    loginDialog.disableClose = disableClose;

    return this.dialog.open(LoginDialogComponent, loginDialog);
  }
}
