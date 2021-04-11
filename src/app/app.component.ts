import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {skipWhile, take} from 'rxjs/operators';
import {DialogService} from './services/dialog.service';
import {PlaylistsFacade} from './core-data/playlists/playlists.facade';
import {UserFacade} from './core-data/user/user.facade';
import {Actions} from '@ngrx/effects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(
    private playlistsFacade: PlaylistsFacade,
    private dialogService: DialogService,
    public userFacade: UserFacade,
    private router: Router,
    private actions$: Actions,
  ) {}

  public ngOnInit(): void {
    this.userFacade.loggedIn$
      .pipe(skipWhile(value => typeof value === 'undefined'))
      .subscribe(status => {
        console.log(status);
        if (!status) {
          this.showLoginDialog();
        } else {
          this.playlistsFacade.getAllPlaylists();
        }
      });

    this.userFacade.load();
  }

  public showLoginDialog(): void {
    if (!this.userFacade.loggedIn$.getValue()) {
      const logindDialogRef = this.dialogService.loginDialog(true);

      logindDialogRef
        .afterClosed()
        .pipe(take(1))
        .subscribe((user: neosonic.Persist['user'] | undefined) => {
          if (user) {
            this.userFacade.save(user);
          }
        });
    }
  }

  public ngAfterViewInit(): void {
    // TODO: Hacky?
    this.router.navigateByUrl(window.location.pathname);
  }
}
