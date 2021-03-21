import {Component} from '@angular/core';
import {take} from 'rxjs/operators';
import {UserFacade} from '../../../core-data/user/user.facade';
import {DialogService} from 'src/app/services/dialog.service';

@Component({
  selector: 'header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss'],
})
export class HeaderBarComponent {
  constructor(
    private dialogService: DialogService,
    public userFacade: UserFacade,
  ) {}

  public loginDialog(): void {
    const logindDialogRef = this.dialogService.loginDialog();

    logindDialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe((user: neosonic.Persist['user'] | undefined) => {
        if (user) {
          this.userFacade.save(user);
        }
      });
  }

  public logout(): void {
    this.userFacade.clear();
  }

  public navigateGithub(): void {
    window.open('tba', '_blank');
  }
}
