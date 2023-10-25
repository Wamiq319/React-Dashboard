import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "fullcalendar";

import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../Components/header";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.statStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };
  const handleEventClick = (selected) => {
    if (window.confirm("Are you sure you want to delete the event")) {
      selected.event.remove();
    }
  };

  return (
    <Box m="20px">
      <Header title="CALENDAR" subtitle="Full Calendar interactive Page" />
      <Box display="flex" justifyContent="space-between">
        {/* CALENDAR SIDEBAR  */}
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((Event) => {
              <ListItem
                key={Event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRdius: "2px",
                }}
              >
                <ListItemText
                  primary={Event.title}
                  secondary={
                    <Typography>
                      {formatDate(Event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>;
            })}
          </List>
        </Box>
        {/* CALENDAR  */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugings={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridday,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true} 
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventset={(events) => setCurrentEvents(events)}
            initialEvents={[
              { id: "123", title: "All-day event", date: "2023-10-12" },
              { id: "125", title: "Timed event", date: "2023-10-13" },


            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};
export default Calendar;
