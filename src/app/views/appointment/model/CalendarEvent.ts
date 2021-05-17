export class CalendarEvent {
  title: string;
  start: string;
  end: string;
  extendedProps: ExtendedProps;

  constructor(title: string, start: string, end: string, extendedProps: ExtendedProps) {
    this.title = title;
    this.start = start;
    this.end = end;
    this.extendedProps = extendedProps;
  }
}

export class ExtendedProps {
  id: number;
  description: string;

  constructor(id: number, description: string) {
    this.id = id;
    this.description = description;
  }

}

export interface BlockerEvent {
  title: string;
  start: string;
  end: string;
  overlap: boolean;
  editable: boolean;
  backgroundColor: string;

}

