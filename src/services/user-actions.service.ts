import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { BackendDetails } from 'src/services/backend-details.service';
import { UserDetails } from './user-details.service';


@Injectable({providedIn: 'root'})
export class UserActions {

    constructor(private http: HttpClient, private backendConfigObj: BackendDetails, private userServObj: UserDetails) {}

    fetchList(searchTerm){
        return this.http.get(this.backendConfigObj.searchApi(this.userServObj.uuid), {
            params: new HttpParams().set('username',searchTerm)
        });
    }

    followAUser(id:number){
        let args = {
            "following_id": id,
        }
        return this.http.post(this.backendConfigObj.followUserApi(this.userServObj.uuid), args ,{
            headers: new HttpHeaders().set('Authorization', ('Bearer ' + this.userServObj.jwtToken))
        });
    }

    unfollowAUser(id: number){
        // cant send data with delete so. this is the way am doing it.
        let args = {
            "following_id": id,
        }
        const options = {
            headers: new HttpHeaders().set('Authorization', ('Bearer ' + this.userServObj.jwtToken)),
            body: args
        }
        return this.http.delete(this.backendConfigObj.followUserApi(this.userServObj.uuid),options);
    }
}