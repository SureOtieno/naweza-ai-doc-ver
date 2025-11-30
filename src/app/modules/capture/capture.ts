import { Component, ViewChild, ElementRef, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import {CameraService} from '../../core/services/capture';

@Component({
  selector: 'app-capture',
  imports: [],
  templateUrl: './capture.html',
  styleUrl: './capture.scss'
})
export class CaptureComponent implements OnInit, OnDestroy {

  // Get references to the HTML elements
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvasElement') canvasElement!: ElementRef<HTMLCanvasElement>;

  @Output() imageCaptured = new EventEmitter<string>(); // Emits base64 image

  private mediaStream: MediaStream | null = null;

  constructor(private cameraService: CameraService) {}

  async ngOnInit() {
    try {
      this.mediaStream = await this.cameraService.getCameraStream();

      // Attach stream to video element
      this.videoElement.nativeElement.srcObject = this.mediaStream;
      this.videoElement.nativeElement.play();

    } catch (e) {
      alert((e as Error).message);
    }
  }

  captureImage(): void {
    if (!this.mediaStream) return;

    const video = this.videoElement.nativeElement;
    const canvas = this.canvasElement.nativeElement;

    // Set canvas dimensions to match the video feed
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext('2d');
    if (context) {
      // Draw the current frame from the video onto the canvas
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Convert the canvas content to a base64 image string
      const imageData = canvas.toDataURL('image/jpeg', 0.9); // Quality 0.9

      this.imageCaptured.emit(imageData); // Send image to parent for upload
      this.stopCamera();
    }
  }

  stopCamera(): void {
    if (this.mediaStream) {
      this.cameraService.stopCameraStream(this.mediaStream);
      this.mediaStream = null;
    }
  }

  ngOnDestroy(): void {
    this.stopCamera(); // Ensure camera is turned off when leaving the component
  }
}
