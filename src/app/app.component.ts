import { 
  Component,
  ViewChild,
  ComponentFactoryResolver,
  ViewContainerRef
} from '@angular/core';
import { DropdownComponent } from './dropdown/dropdown.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dynamic Dropdown Implementation App';

  @ViewChild("targetBike", {read: ViewContainerRef, static: false})
  targetBike: ViewContainerRef;
  @ViewChild("targetCar", {read: ViewContainerRef, static: false})
  targetCar: ViewContainerRef;
  @ViewChild("targetTruck", {read: ViewContainerRef, static: false})
  targetTruck: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  loadDropdownComponent(selectedItem: string) {
    if (selectedItem === 'bikes') {
      this.targetBike.clear();
      const factory = this.componentFactoryResolver.resolveComponentFactory(DropdownComponent);
      let componentRef = this.targetBike.createComponent(factory).instance;
      componentRef.selected = selectedItem;
    }
    if (selectedItem === 'cars') {
      this.targetCar.clear();
      const factory = this.componentFactoryResolver.resolveComponentFactory(DropdownComponent);
      let componentRef = this.targetCar.createComponent(factory).instance;
      componentRef.selected = selectedItem;
    }
    if (selectedItem === 'trucks') {
      this.targetTruck.clear();
      const factory = this.componentFactoryResolver.resolveComponentFactory(DropdownComponent);
      let componentRef = this.targetTruck.createComponent(factory).instance;
      componentRef.selected = selectedItem;
    }
  }
}
