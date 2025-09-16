"use client";

import * as React from "react";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { formatDate } from "@/app/helpers/helpers";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type PopoverCalendarProps = {
  label?: string;
  value?: string;
  onChange?: (date: string) => void;
  min?: Date;
  max?: Date;
  disabled?: boolean;
};

export function PopoverCalendar({
  label = "Date of birth",
  value,
  onChange,
  min,
  max,
  disabled,
}: PopoverCalendarProps) {
  const [open, setOpen] = React.useState(false);

  const selectedDate = value ? new Date(value) : undefined;
  const minDate = min ?? undefined;
  const maxDate = max ?? undefined;

  const fromYear = minDate ? minDate.getFullYear() : new Date().getFullYear();
  const toYear = maxDate
    ? maxDate.getFullYear()
    : new Date().getFullYear() + 100;

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="date" className="px-1">
        {label}
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="w-full justify-between font-normal bg-transparent"
            disabled={disabled}
          >
            {selectedDate ? formatDate(selectedDate) : "Select date"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={selectedDate}
            captionLayout="dropdown"
            fromYear={fromYear}
            toYear={toYear}
            onSelect={(date) => {
              if (
                date &&
                (!minDate || date >= minDate) &&
                (!maxDate || date <= maxDate)
              ) {
                onChange?.(formatDate(date));
                setOpen(false);
              }
            }}
            disabled={(date) =>
              (minDate ? date < minDate : false) ||
              (maxDate ? date > maxDate : false)
            }
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
