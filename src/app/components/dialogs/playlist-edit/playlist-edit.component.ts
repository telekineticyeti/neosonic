import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatInput} from '@angular/material/input';

@Component({
  selector: 'playlist-edit-dialog',
  templateUrl: './playlist-edit.component.html',
  styleUrls: ['./playlist-edit.component.scss'],
})
export class PlaylistEditDialogComponent implements OnInit {
  public name: string;
  public comment: string;
  public title: string;
  public focusName: boolean;
  public commentEnabled: boolean;
  public form: FormGroup;
  @ViewChild('nameInput') nameInput: ElementRef<HTMLInputElement>;

  constructor(
    private dialogRef: MatDialogRef<PlaylistEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: airsonicDialogModels.PlaylistData,
    private formBuilder: FormBuilder,
  ) {
    this.title = data.title ? data.title : 'Playlist';
    this.name = data.name;
    this.comment = data.hasOwnProperty('comment') ? data.comment : '';
    this.focusName = data.hasOwnProperty('focusName') ? data.focusName : false;
    this.commentEnabled = data.hasOwnProperty('commentEnabled')
      ? data.commentEnabled
      : true;
  }

  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: this.name,
      comment: this.comment,
    });

    this.form.controls['name'].setValidators([Validators.required]);

    setTimeout(() => {
      if (this.focusName) {
        const input = this.nameInput.nativeElement;
        input.selectionStart = 0;
        input.selectionEnd = input.value.length;
      }
    });
  }

  public save() {
    this.dialogRef.close(this.form.value);
  }

  public close() {
    this.dialogRef.close(false);
  }
}
