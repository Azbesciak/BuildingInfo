import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment as env} from "../../../environments/environment"
import {Location} from "../../main/locations";

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {
  }

  getCube(location: Location) {
    return this.locationPost("cube", location)
  }

  getArea(location: Location) {
    return this.locationPost("area", location)
  }

  getLightPerArea(location: Location) {
    return this.locationPost("lightPerArea", location)
  }

  getHeatPerCube(location: Location) {
    return this.locationPost("heatPerCube", location)
  }

  getAlter(location: Location, limit: number) {
    return this.locationPost("alert", {loc: location, limit: limit})
  }

  private locationPost(url: string, body: any) {
    return this.http.post(toApi(url), body).toPromise();
  }
}

function toApi(url: string): string {
  return `${env.apiRoot}/${url}`
}
