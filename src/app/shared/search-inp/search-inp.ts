import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-search-inp',
  imports: [FormsModule],
  templateUrl: './search-inp.html',
  styleUrl: './search-inp.scss',
})
export class SearchInp {
  searchQuery: string = '';

  onSearch() {
    console.log('Search query:', this.searchQuery);
  }

  cancelSearch() {
    this.searchQuery = '';
  }

}
