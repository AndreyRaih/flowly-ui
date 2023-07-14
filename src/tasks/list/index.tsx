type ListIcon = 'app' | 'shirt' | 'wear' | 'comment' | 'bag'

type ListItem = {
    icon: ListIcon,
    text: string
}

export type ListProps = {
    title?: string
    items: ListItem[]
}

export function ListComponent(props: ListProps) {
    return <div></div>
}
