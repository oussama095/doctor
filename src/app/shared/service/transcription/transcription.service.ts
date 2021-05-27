import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Transcription} from '../../model/transcription';

@Injectable({
  providedIn: 'root'
})
export class TranscriptionService {
  // @ts-ignore
  patientId: string = localStorage.getItem('patientId').toString();
  baseUrl = 'transcription/';

  constructor(private http: HttpClient) {
  }

  getTranscriptions(patientId?: string): Promise<Transcription[]> {
    if (!patientId) {
      patientId = this.patientId;
    }
    return this.http.get<Transcription[]>(this.baseUrl + patientId).toPromise().then((transcriptions) => transcriptions);
  }
}
