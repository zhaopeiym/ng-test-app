import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzI18nService } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-test-app';
  constructor(private router: Router) {

  }

  gopage1() {
    this.router.navigate(['/page1']);    
  }

  gopage2() {
    this.router.navigate(['/page2']);    
  }
}
