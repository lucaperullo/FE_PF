import { Player } from "@lottiefiles/react-lottie-player"

export default function AnimationPlayer({
  animation,
  loop,
  autoplay,
}: {
  animation: string
  loop?: boolean
  autoplay?: boolean
}) {
  return (
    <Player
      autoplay={autoplay || true}
      loop={loop || true}
      src={animation}
      style={{ height: "300px", width: "300px" }}
    />
  )
}
