import React, { useRef, useState } from "react";

function SmartOtp({ onComplete }) {
  const digitCount = 4; // Total number of OTP boxes
  const [values, setValues] = useState(Array(digitCount).fill("")); // Holds each digit
  const inputRefs = useRef([]); // Refs to control focus on inputs

  // 🔄 Move focus to a specific input box
  const moveTo = (position) => {
    if (inputRefs.current[position]) {
      inputRefs.current[position].focus();
    }
  };

  // 🧠 Handle typing a digit
  const handleDigitEntry = (e, idx) => {
    const val = e.target.value;
    if (!/^[0-9]$/.test(val)) return; // Ignore non-numeric

    const updated = [...values];
    updated[idx] = val;
    setValues(updated);

    // Auto-move to next input
    if (idx < digitCount - 1) moveTo(idx + 1);

    // Trigger callback when all digits are filled
    if (updated.every((v) => v !== "")) {
      onComplete?.(updated.join(""));
    }
  };

  // ⬅️ Handle backspace and navigation
  const handleBackspace = (e, idx) => {
    if (e.key === "Backspace" && values[idx] === "") {
      moveTo(idx - 1); // Move left if empty
    }
  };

  // 📋 Handle full OTP paste
  const handleBulkPaste = (e) => {
    const pasted = e.clipboardData.getData("Text").replace(/\D/g, ""); // Digits only
    if (pasted.length === digitCount) {
      const next = pasted.split("");
      setValues(next);
      onComplete?.(pasted);
    }
  };
  // 🧱 Render input fields with Bootstrap 5 styling
  return (
    <div
      className="d-flex gap-2 justify-content-center"
      onPaste={handleBulkPaste}
    >
      {values.map((digit, idx) => (
        <input
          key={idx}
          ref={(el) => (inputRefs.current[idx] = el)}
          type="text"
          inputMode="numeric"
          maxLength="1"
          className="form-control text-center fw-bold"
          style={{ width: "3rem", fontSize: "1.25rem" }}
          value={digit}
          onChange={(e) => handleDigitEntry(e, idx)}
          onKeyDown={(e) => handleBackspace(e, idx)}
        />
      ))}
    </div>
  );
}

export default SmartOtp;
