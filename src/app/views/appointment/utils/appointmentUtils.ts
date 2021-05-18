import {Appointment} from '../../../shared/model/appointment';
import {BlockerEvent, CalendarEvent, ExtendedProps} from '../model/CalendarEvent';

export function getCalendarEvent(appointments: Appointment[]): CalendarEvent[] {
  return appointments.map(appointment =>
    new CalendarEvent(appointment.title, appointment.start, appointment.end, getExtendedProps(appointment)));
}

export function getBlockersEvent(appointments: Appointment[], toEditEvent?: Appointment): BlockerEvent[] {
  const blockers: BlockerEvent[] = [];
  appointments.forEach(appointment => {
    if (!equals(appointment, toEditEvent)) {
      blockers.push({
        title: appointment.title,
        start: appointment.start,
        end: appointment.end,
        overlap: false,
        editable: false,
        backgroundColor: 'red',
        durationEditable: false
      });
    } else {
      blockers.push({
        id: 'newEvent',
        title: appointment.title,
        start: appointment.start,
        end: appointment.end,
        overlap: false,
        editable: true,
        backgroundColor: 'green',
        durationEditable: false

      });
    }
  });
  return blockers;

}

function equals(appointment: Appointment, toEditAppointment?: Appointment): boolean {
  return appointment.title === toEditAppointment?.title
    && appointment.start === toEditAppointment?.start
    && appointment.end === toEditAppointment?.end;
}

function getExtendedProps(appointment: Appointment): ExtendedProps {
  return new ExtendedProps(appointment.id, appointment.description);
}
