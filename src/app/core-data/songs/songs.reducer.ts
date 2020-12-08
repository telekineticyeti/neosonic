import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, createEntityAdapter, EntityAdapter} from '@ngrx/entity';
import {SongActions} from './songs.actions';

export const adapter: EntityAdapter<airsonic.Song> = createEntityAdapter<airsonic.Song>(
  {
    selectId: (song: airsonic.Song): string => song.id,
  },
);

export interface ISongsState extends EntityState<airsonic.Song> {
  selectedId: string | null;
}

const initialState: ISongsState = adapter.getInitialState({
  selectedId: null,
});

const reducer = createReducer(
  initialState,
  on(SongActions.getSuccess, (state, {songs}) => adapter.setAll(songs, state)),
  on(SongActions.deleteAll, state => adapter.removeAll(state)),
  on(SongActions.updateOne, (state, {update}) =>
    adapter.updateOne(update, state),
  ),
  on(SongActions.updateMany, (state, {updates}) =>
    adapter.updateMany(updates, state),
  ),
);

export function SongsReducer(state: ISongsState | undefined, action: Action) {
  return reducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
