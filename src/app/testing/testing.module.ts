import { NgModule } from '@angular/core';
import { RatingModule } from 'ngx-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';


@NgModule({
  declarations: [],
  imports: [
    RatingModule.forRoot(),
    SharedModule,
    HttpClientTestingModule,
    RouterTestingModule,
  ],
  exports: [
    RatingModule,
    SharedModule,
    HttpClientTestingModule,
    RouterTestingModule,
  ]
})
export class TestingModule {
}
