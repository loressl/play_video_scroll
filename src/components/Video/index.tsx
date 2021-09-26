import './styles.css';

interface VideoProps {
    id: string
    src: string
    type: string
    autoPlay: boolean
    loop: boolean
}

export const Video = (props: VideoProps) =>
    <video
        id={props.id}
        autoPlay={props.autoPlay}
        loop={props.loop}
        muted
    >
        <source
            src={props.src}
            type={props.type}
        />
    </video>
