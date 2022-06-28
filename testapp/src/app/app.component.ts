import { Component, OnInit } from '@angular/core';
import { HelloService } from './shared/services/hello.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'testapp';
  constructor(
    private helloService: HelloService
  ) {}
  
  ngOnInit(): void {
    this.helloService.getHello().subscribe(
      (data:any) => console.log(data?.msg)
    )
  }

}
