import { PartTwoService } from './services/part-two.service';
import { Component, OnInit } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // product: any;

  // constructor(private p2: PartTwoService) { }

  // ngOnInit(): void {

  //   /* CONSTRUCTING OPTIONS BEGIN */
  //   /* let headers = new Headers();
  //   headers.append('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjhjNzljYzg2YzU3ZDA0MjRlNzY4ZGJiMzRkN2YxZTY0YjkwZjdmYjg3MWNjNTE0NmUwY2IyMjU2MGVhM2RiMDNkYzdlNmZlMzBjNzc4MWI5In0.eyJhdWQiOiIyIiwianRpIjoiOGM3OWNjODZjNTdkMDQyNGU3NjhkYmIzNGQ3ZjFlNjRiOTBmN2ZiODcxY2M1MTQ2ZTBjYjIyNTYwZWEzZGIwM2RjN2U2ZmUzMGM3NzgxYjkiLCJpYXQiOjE1MzA4MTcwNzEsIm5iZiI6MTUzMDgxNzA3MSwiZXhwIjoxNTYyMzUzMDcxLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.tlRYSdAppAlvv348TLR0A_f2At9BR-_bnwPyW0wspQA78UHKamLcUyneplHVEWG7zPLF-p9uFKBld1Y6eMHqwi1fUwNpG5e-W2xExgKCSxmYmQW8XFjGjuHeDbPbXThJDX5YQJQ-ZIBLorftn4RnoRmrPTHC1tgrZm_bT0-fw0qN59D0epqsGju5e2oeimpdwGrcWedLqweZ1fWg-FDxINMaa-zcKnosKprBth3T3idQL2ZjvAaW7YZqcCOfcCef4N8yk4x9gG9SnaWnmkSaoE9J-bhgLyiojvRokga456ovj-6zsCZrZwg8cEXrAIkBS_D3mGNTze9R8C15xjFAiro1_QXD33b49-21srY_Syws7X8njgSUo1HGCBwfrZBfWa_uDg1HtPTqtU2ILaFnasU8fi96eAUXjs2bIONSvzh_D2rKZd90lX__UzBK5Ymw12UjyJP6Nsl-Cfa7hnUw-_JV75HmlQLoVs9OzHMSJmvVbSSZbmqeV46JmENwpmH7j2PWJoIZjKMHCWOdOLXg6eJdjQHS16MjB12mweBEOpYO9tCKmcshKjWLrTuqccaxt1f8nbKVnhOXmJ7Qw-UikYqCLZz51olquZ7lkumcDKyY9-SMqCT1JNRN_EjL-nPQ3hJL0g8dtwsEriZDMCmeGDdDdio5NGma6AY-50er6h4');
  //   headers.append('Content-Type', 'application/json');
  //   headers.append('X-Requested-With', 'XMLHttpRequest');

  //   let opts = new RequestOptions();
  //   opts.headers = headers; */
  //   /* CONSTRUCTING OPTIONS END */

  //   /*this.p2.postAll({ part: 1 }, opts).subscribe(resp => {
  //     //this.product = resp[0];
  //     console.log(resp);
  //   });*/

  //   this.p2.getAll().subscribe(resp => {
  //     this.product = resp[0];
  //     //console.log(resp);
  //   });
  // }

  // title = 'app';

  follower: any;
  constructor(private service: PartTwoService) { }
  ngOnInit(): void {
    this.service.getAll()
      .subscribe(follower => this.follower = follower[0]);
  }
}
