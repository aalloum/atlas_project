import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {fuseAnimations} from "../../../../../@fuse/animations";
import {Cabinet} from "./cabinet";
import {Subject} from "rxjs";
import {CabinetService} from "./cabinet.service";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class CabinetComponent implements OnInit, OnDestroy {

    cabinet: Cabinet;

    // Private
    private _unsubscribeAll: Subject<any>;

  constructor(private cabinetService: CabinetService) {
      // Set the defaults
      this.cabinet = new Cabinet();

      // Set the private defaults
      this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
      // Subscribe to update order on changes
      this.cabinetService.onCabinetChanged
          .pipe(takeUntil(this._unsubscribeAll))
          .subscribe(cabinet => {
              this.cabinet = new Cabinet(cabinet);
          });
  }

    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

}
