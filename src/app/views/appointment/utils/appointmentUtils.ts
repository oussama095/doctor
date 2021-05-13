import {Appointment} from '../../../shared/model/appointment';
import {CalendarEvent, ExtendedProps} from '../model/CalendarEvent';

export function getCalendarEvent(appointments: Appointment[]): CalendarEvent[] {
  return appointments.map(appointment =>
    new CalendarEvent(appointment.title, appointment.start, appointment.end, getExtendedProps(appointment)));
}

function getExtendedProps(appointment: Appointment): ExtendedProps {
  return new ExtendedProps(appointment.id, appointment.description);
}
