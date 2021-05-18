import {Medication} from './medication';

export interface Transcription {
  id: string;
  name: string;
  note: string;
  medications: Medication[];
}
