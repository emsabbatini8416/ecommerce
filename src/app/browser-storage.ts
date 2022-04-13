export function loadCart() {
  try {
    const serializedState = localStorage.getItem('cart');
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
}
  
export async function saveCart(cartState: any) {
  try {
    const serializedState = JSON.stringify(cartState);
    localStorage.setItem('cart', serializedState);
  } catch (e) {
    console.log(e)
  }
}