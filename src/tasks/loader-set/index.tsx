import { LoaderProps } from "../loader"

export type LoaderSetProps = {
    loaders: LoaderProps[]
    onLoaderDone: (index: number) => void
    onDone: () => void
}

export function LoaderSetComponent(props: LoaderSetProps) {
    return <div></div>
}
