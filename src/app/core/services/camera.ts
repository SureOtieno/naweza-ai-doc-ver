import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CameraSdkService {

  constructor() {}

  async launchCamera(options: any): Promise<{ file: File | Blob }> {
    // 👇 Replace this with your real SDK call

    return new Promise((resolve, reject) => {
      const sdk = (window as any).YourCameraSDK;

      if (!sdk) {
        reject('Camera SDK not loaded');
        return;
      }

      sdk.openCamera(options, (result: any) => {
        if (result?.file) resolve({ file: result.file });
        else reject('Invalid SDK response');
      }, (err: any) => reject(err));
    });
  }
}
