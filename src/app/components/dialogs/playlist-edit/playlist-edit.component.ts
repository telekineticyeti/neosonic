import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'playlist-edit-dialog',
  templateUrl: './playlist-edit.component.html',
  styleUrls: ['./playlist-edit.component.scss'],
})
export class PlaylistEditDialogComponent implements OnInit {
  public name: string;
  public comment: string;
  public title: string;
  public form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<PlaylistEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: airsonicDialogModels.PlaylistData,
    private formBuilder: FormBuilder,
  ) {
    this.title = data.title ? data.title : 'Playlist';
    this.name = data.name;
    this.comment = data.comment ? data.comment : '';
  }

  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: this.name,
      comment: this.comment,
    });
  }

  public save() {
    this.dialogRef.close(this.form.value);
  }

  public close() {
    this.dialogRef.close();
  }
}
