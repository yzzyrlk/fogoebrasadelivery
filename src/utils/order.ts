export function generateOrderId(): string {
  const date = new Date();
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  return `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}-${random}`;
}