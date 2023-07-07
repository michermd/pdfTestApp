import { Component } from '@angular/core';
import { saveAs } from 'file-saver';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  fileToUpload: File | null = null;
  fileUrl: string | null = null;

  constructor(private sanitizer: DomSanitizer) { }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.fileToUpload = file;
    this.fileUrl = URL.createObjectURL(file);
  }

  saveFile() {
    if (this.fileToUpload) {
      const fileName = this.fileToUpload.name;
      saveAs(this.fileToUpload, fileName);
    }
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
