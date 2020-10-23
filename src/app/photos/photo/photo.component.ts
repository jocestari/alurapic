import { Component, Input } from "@angular/core";
import { environment } from '../../../environments/environment'

const API = environment.apiUrl;
const CLOUD  = `${API}/imgs/`;
@Component({
    selector: 'ap-photo',
    templateUrl: 'photo.component.html',
    styleUrls: ['photo.component.css']
})
export class PhotoComponent {

    private _url = '';
    
   @Input() description = '';
    
   @Input() set url(url: string) {
    if(!url.startsWith('data')) {
        this._url = CLOUD + url;
    } else {
        this._url = url;
    }
   }

get url() {
    return this._url;
}
}