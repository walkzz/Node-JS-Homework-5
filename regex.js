// match a string that starts with a capital letter and is followed by lowercase letters:
let regex1 = /^[A-Z][a-z]+$/;

// match a string that contains only digits:
let regex2 = /^\d+$/;

// match a valid email address:
let regex3 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// match a date in the format dd-mm-yyyy:
let regex4 = /^\d{2}-\d{2}-\d{4}$/;

// match a string containing only alphanumeric characters (letters and numbers):
let regex5 = /^[a-zA-Z0-9]+$/;

// match a string that contains exactly 5 digits:
let regex6 = /^\d{5}$/;

// match a valid MK phone number:
let regex7 = /^\+389\d{9}$/;

// match a hexadecimal color code (# followed by 3 or 6 hexadecimal digits):
let regex8 = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

// match a password that is at least 8 characters long and contains at least one uppercase letter, 
// one lowercase letter, and one digit:
let regex9 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

// match a valid email address that contains "hotmail.com"
let regex10 = /^[a-zA-Z0-9._%+-]+@hotmail\.com$/;