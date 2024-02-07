import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  dosearch(name: string) {
    console.log(`value= ${name}`);
    this.router.navigateByUrl(`/search/${name}`);
  }
}
