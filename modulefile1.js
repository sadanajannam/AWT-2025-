// Named exports
export const greeting = "Hello, World!";
export const a = 10;
export const b = 20;

// Named function export
export function greet(name) {
  console.log(`Hello, ${name}!`);
}

// Default export
export default function sum(x, y) {
  return x + y;
}
