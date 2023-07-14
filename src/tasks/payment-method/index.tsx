type PaymentMethods = 'applePay' | 'stripe' | 'paypal'

export type PaymentMethodProps = {
    defaultPaymentMethod: PaymentMethods
} & Actionable

export function PaymentMethodComponent(props: PaymentMethodProps) {
    return <div></div>
}
