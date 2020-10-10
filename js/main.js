let carousel; // Config singleton for carousel

Math.bound = (num, min, max) => Math.max(Math.min(num, max), min);
Math.cycle = (num, border) => Math.abs((num >= 0 ? num : num - Math.floor(num / border) * border) % border);