import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { clsx } from "clsx";
import { useLatest } from "../../../hooks";

import {
  getDateFromInputValue,
  getInputValueFromDate,
  isInRange,
} from "../../../utils/data-picker";
import { DatePickerPopupContent } from "./DatePickerPopupContent ";

export interface IDatePickerProps {
  value: Date;
  onChange: (value: Date) => void;
  min?: Date;
  max?: Date;
}

export const DatePicker = ({ value, onChange, min, max }: IDatePickerProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [inputValue, setInputValue] = useState("");
  const [showPopup, setShowPopup] = useState<boolean>();

  useLayoutEffect(() => {
    setInputValue(getInputValueFromDate(value));
  }, [value]);

  const updateValueOnPopupCloseAction = () => {
    const date = getDateFromInputValue(inputValue);

    setShowPopup(false);

    if (!date) {
      // input value is invalid
      // reset it
      setInputValue(getInputValueFromDate(value));
      return;
    }

    const isDateInRange = isInRange(date, min, max);

    if (!isDateInRange) {
      return;
    }

    onChange(date);
  };

  const latestUpdateValueFromInput = useLatest(updateValueOnPopupCloseAction);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const onDocumentClick = (e: MouseEvent) => {
      const target = e.target;

      if (!(target instanceof Node)) {
        return;
      }

      if (element.contains(target)) {
        return;
      }

      latestUpdateValueFromInput.current();
    };

    document.addEventListener("click", onDocumentClick);

    return () => {
      document.removeEventListener("click", onDocumentClick);
    };
  }, [latestUpdateValueFromInput]);

  const handleChange = (value: Date) => {
    onChange(value);
    setShowPopup(false);
  };

  const onInputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value.trim());
  };

  const onInputClick = () => {
    setShowPopup(true);
  };

  const [inputValueDate, isValidInputValue] = useMemo(() => {
    const date = getDateFromInputValue(inputValue);

    if (!date) {
      return [undefined, false];
    }

    const isDateInRange = isInRange(date, min, max);

    return [date, isDateInRange]; 
  }, [inputValue, min, max]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "Enter") {
      return;
    }

    updateValueOnPopupCloseAction();
  };

  return (
    <div ref={elementRef} className='datePicker'>
      <input
        data-testid='date-picker-input'
        className={clsx(
          "DatePicker__input",
          !isValidInputValue && "DatePicker__input--invalid"
        )}
        value={inputValue}
        onChange={onInputValueChange}
        type='text'
        onClick={onInputClick}
        onKeyDown={onKeyDown}
      />

      {showPopup && (
        <div>
          <DatePickerPopupContent
            selectedValue={value}
            onChange={handleChange}
            min={min}
            max={max}
            inputValueDate={inputValueDate}
          />
        </div>
      )}
    </div>
  );
};
