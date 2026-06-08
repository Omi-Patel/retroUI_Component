// Component imports
import TearOffCalendar from '../../components/Calendars/TearOffCalendar';
import TearOffCalendarSrc from '../../components/Calendars/TearOffCalendar.jsx?raw';
import DeskCalendar from '../../components/Calendars/DeskCalendar';
import DeskCalendarSrc from '../../components/Calendars/DeskCalendar.jsx?raw';
import MonthPicker from '../../components/Calendars/MonthPicker';
import MonthPickerSrc from '../../components/Calendars/MonthPicker.jsx?raw';
import MiniDatePicker from '../../components/Calendars/MiniDatePicker';
import MiniDatePickerSrc from '../../components/Calendars/MiniDatePicker.jsx?raw';
import EventCalendar from '../../components/Calendars/EventCalendar';
import EventCalendarSrc from '../../components/Calendars/EventCalendar.jsx?raw';

export const calendarComponents = [
  { name: 'TearOffCalendar', component: TearOffCalendar, code: TearOffCalendarSrc },
  { name: 'DeskCalendar', component: DeskCalendar, code: DeskCalendarSrc },
  { name: 'MonthPicker', component: MonthPicker, code: MonthPickerSrc },
  { name: 'MiniDatePicker', component: MiniDatePicker, code: MiniDatePickerSrc },
  { name: 'EventCalendar', component: EventCalendar, code: EventCalendarSrc },
];

export default calendarComponents;
