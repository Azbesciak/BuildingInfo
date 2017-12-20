import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment as env} from "../../../environments/environment"

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {
  }

  static toApi(url: string): string {
    return `${env.apiRoot}/${url}`
  }

}
