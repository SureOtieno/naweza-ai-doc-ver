import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Injectable({ providedIn: 'root' })
export class CameraService {

  constructor() { }

  /**
   * Requests access to the user's camera and returns the MediaStream.
   */
  public getCameraStream(): Promise<MediaStream> {
    const constraints = {
      video: {
        facingMode: 'environment' as const, // Prefer back camera on mobile
        width: 1280,
        height: 720
      }
    };

    // 🚨 Standard browser API call to launch camera feed
    return navigator.mediaDevices.getUserMedia(constraints)
      .catch(error => {
        console.error('Camera access failed:', error);
        throw new Error('Could not access camera. Please check permissions.');
      });
  }

  /**
   * Stops the video track on the stream to turn off the camera light.
   */
  public stopCameraStream(stream: MediaStream): void {
    stream.getTracks().forEach(track => {
      track.stop();
    });
  }
}
