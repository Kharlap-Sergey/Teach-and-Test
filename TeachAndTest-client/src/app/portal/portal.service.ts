import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PortalInterface } from './portal.interface';
import { Guid } from 'guid-typescript';

type subscriberModel = {
  subscriber: PortalInterface;
  name: string;
};

@Injectable({
  providedIn: 'root',
})
export class PortalService {
  private subscribers: subscriberModel[];

  constructor() {
    this.subscribers = [];
  }

  public Subscribe(
    subscriber: PortalInterface,
    name?: string
  ) {
    if (!name) {
      name = Guid.create().toString();
    }

    this.subscribers.push({
      subscriber,
      name,
    });
  }

  public show() {
    for(let subscriber of this.subscribers){
      subscriber.subscriber.show(subscriber.name);
    }
  }
}
