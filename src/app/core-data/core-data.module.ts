import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../../environments/environment';
import { reducers, metaReducers } from './reducers';
import { PlaylistsEffects } from './playlists/playlists.effects';
import { PlaylistsFacade } from './playlists/playlists.facade.service';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    EffectsModule.forRoot([PlaylistsEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [PlaylistsFacade],
})
export class CoreDataModule {}
