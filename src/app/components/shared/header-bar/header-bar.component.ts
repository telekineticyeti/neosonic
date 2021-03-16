import {Component} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {take} from 'rxjs/operators';
import {LoginDialogComponent} from '../../dialogs/login/dialog-login.component';

@Component({
  selector: 'header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss'],
})
export class HeaderBarComponent {
  constructor(private dialog: MatDialog) {}

  public loginDialog(): void {
    const loginDialog = new MatDialogConfig();

    const data: airsonicDialogModels.LoginData = {
      username: null,
      password: null,
      server: null,
    };

    loginDialog.data = data;
    loginDialog.minWidth = 400;

    const dialogRef = this.dialog.open(LoginDialogComponent, loginDialog);

    dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe(result => {
        if (result) {
          console.log(result);
          // this.playlistsFacade.createPlaylist(result.name);
        }
      });
  }

  public logout(): void {
    console.log('logout');
  }

  public navigateGithub(): void {
    console.log('github');
  }
}
