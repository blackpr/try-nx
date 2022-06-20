import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Movie } from '@tim/api-interfaces';

@Component({
  selector: 'tim-list-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  @Input() movies: Movie[] | null = null;
}
