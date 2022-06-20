import { Component } from '@angular/core';

@Component({
  selector: 'tim-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  showMenu = false;
  routes = [
    { path: 'movies/list', data: { icon: 'perm_media', text: 'Movies' } },
  ];
}
