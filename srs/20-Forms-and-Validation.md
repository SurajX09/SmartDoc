# Forms and Validation

---

# 1. Overview

This document defines the forms and validation requirements for the SmartDoc Single Page Application (SPA).

The current version of SmartDoc does not include a traditional contact form. Users communicate directly through WhatsApp using Call-to-Action (CTA) buttons.

This document also defines validation standards for any future forms added to the application.

---

# 2. Current User Interaction

The primary interaction method is:

- WhatsApp Contact Button

When clicked, the button shall:

- Open WhatsApp.
- Redirect the user to the predefined business number.
- Work on both mobile and desktop devices.

---

# 3. Future Contact Form

If a contact form is introduced in a future release, it may include the following fields:

| Field | Required | Validation |
|--------|----------|------------|
| Full Name | Yes | Minimum 2 characters |
| Mobile Number | Yes | Valid phone number |
| Email Address | Optional | Valid email format |
| Service Required | Yes | Dropdown selection |
| Message | Optional | Maximum 500 characters |

---

# 4. Validation Rules

The system shall validate user input before submission.

### Name

- Cannot be empty.
- Minimum 2 characters.
- Maximum 100 characters.

---

### Mobile Number

- Cannot be empty.
- Numbers only.
- Must contain a valid phone number.

---

### Email Address

- Optional field.
- Must follow standard email format.

Example:

```
example@email.com
```

---

### Service Selection

- User must select one service.

---

### Message

- Maximum 500 characters.
- Remove unnecessary leading and trailing spaces.

---

# 5. Error Messages

Validation errors should display clear and user-friendly messages.

Examples:

- Please enter your name.
- Please enter a valid mobile number.
- Please select a service.
- Please enter a valid email address.

---

# 6. Success Feedback

After successful validation:

- Open WhatsApp (Current Version)
- Future versions may display a confirmation message after successful submission.

---

# 7. Accessibility Requirements

Forms shall support:

- Keyboard navigation.
- Visible focus indicators.
- Screen reader compatibility.
- Proper labels for all fields.

---

# 8. Security Requirements

If forms are introduced in the future:

- Validate all input on the client side.
- Sanitize user input.
- Prevent malicious input.
- Use HTTPS for all submissions.

---

# 9. Form Design Guidelines

Forms should:

- Be mobile-friendly.
- Use consistent spacing.
- Display labels clearly.
- Highlight validation errors.
- Provide immediate user feedback.

---

# 10. Current Version Summary

SmartDoc v1.0 does not use a traditional contact form.

The primary communication method is direct WhatsApp interaction through Call-to-Action buttons placed throughout the application.

---

## File Information

**File Name:** `20-Forms-and-Validation.md`

**Version:** 2.0

**Status:** Completed

**Last Updated:** 27 July 2026