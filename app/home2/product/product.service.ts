import { Injectable } from '@angular/core';
import { Http,Response,Headers ,RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService {
    private apiUrl="http://localhost:8080/product/";
    
    constructor(private _http:Http) {
        
     }
    GetAllProduct():Observable<any[]>{
        return this._http.get(this.apiUrl)
        .map((response)=>response.json());
        //.catch(this.handleError);
    }
}