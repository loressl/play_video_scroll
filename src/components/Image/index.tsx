import './styles.css'

interface ImageProps {
    alt: string
    src: string
}

export const Image= ({alt, src}: ImageProps) => <img alt={alt} src={src} />