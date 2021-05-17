import {Appointment} from '../../../shared/model/appointment';
import {BlockerEvent, CalendarEvent, ExtendedProps} from '../model/CalendarEvent';

export function getCalendarEvent(appointments: Appointment[]): CalendarEvent[] {
  return appointments.map(appointment =>
    new CalendarEvent(appointment.title, appointment.start, appointment.end, getExtendedProps(appointment)));
}

export function getBlockersEvent(appointments: Appointment[]): BlockerEvent[] {
  const blockers: BlockerEvent[] = [];
  appointments.forEach(appointment => blockers.push({
    title: appointment.title,
    start: appointment.start,
    end: appointment.end,
    overlap: false,
    editable: false,
    backgroundColor: 'red'
  }));

  return blockers;

}

function getExtendedProps(appointment: Appointment): ExtendedProps {
  return new ExtendedProps(appointment.id, appointment.description);
}
