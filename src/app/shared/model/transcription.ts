import {Medication} from './medication';

export interface Transcription {
  id: string;
  note: string;
  medications: Medication[];
}
