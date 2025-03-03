"use client";

import React, { useEffect, useRef } from "react";
import { DayPilot } from "@daypilot/daypilot-lite-react";
import styled from "styled-components";

const CalendarWrapper = styled.div`
  font-family: "Arial", sans-serif;
  background-color: #f4f6f9;
  height: 100%;
`;

const StyledDayPilotCalendar = styled.div`
  .DayPilot-Calendar {
    background-color: #f4f6f9;
  }

  .DayPilot-Event {
    border-radius: 5px;
    background-color: #3498db;
    color: white;
    padding: 8px;
    font-size: 14px;
  }
`;

const Calendar: React.FC = () => {
  const calendarRef = useRef<any>(null);

  const events = [
    {
      id: 1,
      text: "Meeting",
      start: "2025-03-10T10:00:00",
      end: "2025-03-10T12:00:00",
    },
    {
      id: 2,
      text: "Project Deadline",
      start: "2025-03-15T09:00:00",
      end: "2025-03-15T17:00:00",
    },
    {
      id: 3,
      text: "Team Outing",
      start: "2025-03-20T11:00:00",
      end: "2025-03-20T14:00:00",
    },
  ];

  const handleEventClick = (args: any) => {
    alert(`Event clicked: ${args.e.text()}`);
  };

  useEffect(() => {
    if (calendarRef.current) {
      const calendar = new DayPilot.Calendar(calendarRef.current, {
        startDate: "2025-03-01",
        viewType: "Week",
        events: events,
        onEventClick: handleEventClick,
      });

      calendar.init();
    }
  }, [events]);

  return (
    <CalendarWrapper>
      {/* Calendar container */}
      <StyledDayPilotCalendar ref={calendarRef} />
    </CalendarWrapper>
  );
};

export default Calendar;
