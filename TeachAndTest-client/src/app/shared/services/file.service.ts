import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiRoutes } from '@app/shared/utils/api-routes';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor(private http: HttpClient) {}

  public upload(formData: FormData) {
    return this.http.post(
      ApiRoutes.File.Upload,
      formData
    );
  }

  public download(id: string) {
    return this.loadBlob(ApiRoutes.File.Download(id));
  }

  public downloadImage(id: string) {
    const url = ApiRoutes.File.DownloadImage(id);
    return this.loadBlob(url);
  }

  public readDataFromBlob(data: Blob): FileReader {
    let reader = new FileReader();
    if (data) {
      reader.readAsDataURL(data);
    }
    return reader;
  }

  private loadBlob(url: string) {
    console.log(`url`, url);
    return this.http.get(url, {
      responseType: 'blob',
    });
  }
}
