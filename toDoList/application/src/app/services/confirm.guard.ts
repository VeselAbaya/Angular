import {Injectable} from '@angular/core';
import {CanDeactivate} from '@angular/router';
import {AddPageComponent} from '../components/add-page/add-page.component';

@Injectable()
export class ConfirmGuard implements CanDeactivate<AddPageComponent> {
  canDeactivate(component: AddPageComponent): boolean {
    if (!component.submitted && !component.isEmpty()) {
      if (confirm('Do you want to submit your changes?')) {
        component.handleSubmit(component.addForms);
      }
    }

    return true;
  }
}
