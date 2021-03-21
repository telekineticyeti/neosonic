import {Injectable, Inject, InjectionToken} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PersistService {
  constructor(@Inject(LOCAL_STORAGE_TOKEN) private storage: Storage) {}

  public tags: string[] = [];
  private collectionKey = 'neosonic-app';

  private supported(): Observable<boolean> {
    return this.storage !== null
      ? of(true)
      : throwError('Local Storage Not Supported');
  }

  public save(toSave: Partial<neosonic.Persist>): Observable<neosonic.Persist> {
    return this.load().pipe(
      map((loaded: neosonic.Persist) => ({...loaded, ...toSave})),
      tap((merged: neosonic.Persist) =>
        this.storage.setItem(this.collectionKey, JSON.stringify(merged)),
      ),
    );
  }

  public load(): Observable<neosonic.Persist> {
    return this.supported().pipe(
      map(_ => this.storage.getItem(this.collectionKey)),
      map((value: string | null) => (value ? JSON.parse(value) : [])),
    );
  }
}

export function storageFactory() {
  return typeof window === undefined || typeof localStorage === undefined
    ? null
    : localStorage;
}

export const LOCAL_STORAGE_TOKEN = new InjectionToken('neosonic', {
  factory: storageFactory,
});
