"use client";

import * as React from "react";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { formatDate, formatDateDisplay } from "@/app/helpers/helpers";
import { useTranslation } from "@/app/hooks/use-translation";
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
  label = "",
  value = "",
  onChange,
  min,
  max,
  disabled,
}: PopoverCalendarProps) {
  const { t } = useTranslation();

  const [open, setOpen] = React.useState(false);

  const selectedDate =
    typeof value === "string" && value.length > 0 ? new Date(value) : undefined;
  const minDate = min ?? undefined;
  const maxDate = max ?? undefined;

  const fromYear = minDate ? minDate.getFullYear() : new Date().getFullYear();
  const toYear = maxDate
    ? maxDate.getFullYear()
    : new Date().getFullYear() + 100;

  return (
    <div className="flex flex-col gap-3">
      {label && (
        <Label htmlFor="date" className="px-1">
          {label}
        </Label>
      )}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="w-full justify-between font-normal bg-transparent"
            disabled={disabled}
          >
            {selectedDate
              ? formatDateDisplay(selectedDate)
              : t("calendar_select_date")}
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
                onChange?.(formatDate(date)); // always store/send as yyyy-mm-dd
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
