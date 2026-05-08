export const RAZORPAY_PAYMENT_LINK = 'https://razorpay.me/@sumitsantoshasalkar';

export function openRazorpayPayment() {
  const paymentWindow = window.open(RAZORPAY_PAYMENT_LINK, '_blank', 'noopener,noreferrer');

  if (!paymentWindow) {
    window.location.href = RAZORPAY_PAYMENT_LINK;
  }
}
