import React from "react";
import { Button } from "@mui/material";
import { format, addMinutes } from "date-fns";

const TimeSlots = () => {
  const startHour = 12; // بداية الدوام 12 ظهرا
  const endHour = 23; // نهاية الدوام 11 مساءً

  // تحويل الأوقات إلى الشكل HH:mm
  const timeFormat = "HH:mm";

  // البداية من الساعة 12 ظهرا
  let startTime = new Date();
  startTime.setHours(startHour, 0, 0, 0);

  // نهاية الدوام الساعة 11 مساء
  let endTime = new Date();
  endTime.setHours(endHour, 0, 0, 0);

  // إنشاء مجموعة للأوقات
  let timeSlots = [];

  while (startTime < endTime) {
    timeSlots.push(format(startTime, timeFormat));
    startTime = addMinutes(startTime, 45); // تقسيم الوقت إلى فتحات زمنية كل 45 دقيقة
  }

  return (
    <div>
      {timeSlots.map((time, index) => (
        <Button key={index} variant="outlined" style={{ margin: "5px" }}>
          {time}
        </Button>
      ))}
    </div>
  );
};

export default TimeSlots;
