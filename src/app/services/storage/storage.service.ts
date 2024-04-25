import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  public set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public async get(key: string): Promise<any> {
    const value = localStorage.getItem(key);
    if (!value) return null;
    return await JSON.parse(value);
  }

  public async remove(key: string) {
    localStorage.removeItem(key);
  }

  public clear() {
    localStorage.clear();
  }
}
