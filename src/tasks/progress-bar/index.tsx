export type ProgressBarProps = {
    title: string
    total: number
    current: number
    compact?: boolean
    segments?: number
    hasCounter?: boolean
    hasBackButton?: boolean
    onBackButtonClick?: () => void
}

export function ProgressBarComponent(props: ProgressBarProps) {
    return <div></div>
}
