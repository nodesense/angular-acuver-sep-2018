// save-alert.guard.ts
import { Injectable } from '@angular/core';
import { CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs';
import { IDataSave } from '../models/idata-save';

@Injectable({
  providedIn: 'root'
})
export class SaveAlertGuard implements CanDeactivate<IDataSave> {
  canDeactivate(target: IDataSave) {
    console.log('save alert guard');

    if (target.isSaved()) {
      return true;
    }

    return window.confirm('do you want to leave page?');
  }
}
