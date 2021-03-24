import { Injectable } from '@angular/core';
import { PortalInterface } from './portal.interface';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root',
})
export class PortalService {
  private subscribers: {
    [key: string]: PortalInterface;
  } = {};

  constructor() {}

  public subscribe(
    subscriber: PortalInterface,
    name?: string
  ): string {
    if (!name) {
      name = Guid.create().toString();
    }

    this.subscribers[name] = subscriber;

    return name;
  }

  public unsubscribe(name: string) {
    delete this.subscribers[name];
  }

  public show(component: any, portalName?: string) {
    for (let name in this.subscribers) {
      if (!portalName || portalName == name) {
        this.subscribers[name].show(component);
      }
    }
  }
}
