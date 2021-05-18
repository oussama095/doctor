import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Transcription} from '../../model/transcription';

@Injectable({
  providedIn: 'root'
})
export class TranscriptionService {

  baseUrl = 'transcription/';

  constructor(private http: HttpClient) {
  }

  getTranscriptions(patientId: string): Promise<Transcription[]> {
    return this.http.get<Transcription[]>(this.baseUrl + patientId).toPromise().then((transcriptions) => transcriptions);
  }
}
