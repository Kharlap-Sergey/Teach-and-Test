import SimpleCrypto from "simple-crypto-js"

export class LocalStorageWrapper{

  private static cryptr = new SimpleCrypto("secret");

  public static getItem(key: string){
    return this.cryptr.decrypt(localStorage.getItem(key));
  }

  public static setItem(key: string, value: string){
    const encrypted = this.cryptr.encrypt(value);
    localStorage.setItem(key, encrypted)
  }

  public static removeItem(key: string){
    localStorage.removeItem(key);
  }
}
