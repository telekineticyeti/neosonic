import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'sidebar-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SidebarSearchComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  public searchForm: FormGroup = this.formBuilder.group({query: ''});

  public ngOnInit(): void {
    this.searchForm.valueChanges
      .pipe(distinctUntilChanged(), debounceTime(750))
      .subscribe(q => {
        const query = q.query.trim();
        if (query !== '') {
          this.router.navigateByUrl(`search/${query}`);
        }
      });
  }
}
