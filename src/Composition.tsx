import {
  AbsoluteFill,
  CalculateMetadataFunction,
  Composition,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

type Props = {
  title: string;
  subtitle: string;
};

const calculateMetadata: CalculateMetadataFunction<Props> = () => {
  return {};
};

export const MyComposition = () => {
  return (
    <Composition
      id="AjusteDeTiempo"
      component={Intro}
      durationInFrames={180}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={{
        title: "Ajuste de Tiempo",
        subtitle: "Sincronización aguja–garfio · Máquinas Brother",
      }}
      calculateMetadata={calculateMetadata}
    />
  );
};

export const Intro: React.FC<Props> = ({ title, subtitle }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      name="Escena"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 28,
        backgroundColor: "#0a2647",
        backgroundImage: "linear-gradient(160deg, #0a2647 0%, #0057b8 100%)",
        fontFamily: "Segoe UI, Roboto, Helvetica, Arial, sans-serif",
        color: "#ffffff",
      }}
    >
      <Interactive.Div
        name="Garfio"
        style={{
          width: 220,
          height: 220,
          borderRadius: "50%",
          border: "10px solid rgba(255,255,255,0.18)",
          borderTopColor: "#ff8c00",
          rotate: interpolate(frame, [0, 5 * fps], ["0deg", "720deg"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          scale: interpolate(frame, [0, 1 * fps], [0.6, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.spring({ damping: 200 }),
            output: "perceptual-scale",
          }),
        }}
      />
      <Interactive.Div
        name="Aguja"
        style={{
          position: "absolute",
          top: 300,
          width: 8,
          height: 180,
          borderRadius: 4,
          backgroundColor: "#ff8c00",
          translate: interpolate(
            frame,
            [0, 0.75 * fps, 1.5 * fps, 2.25 * fps, 3 * fps],
            ["0px -60px", "0px 60px", "0px -60px", "0px 60px", "0px -60px"],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.45, 0, 0.55, 1),
            },
          ),
        }}
      />
      <Interactive.Div
        name="Título"
        style={{
          fontSize: 96,
          fontWeight: 700,
          letterSpacing: -1,
          marginTop: 40,
          opacity: interpolate(frame, [0.6 * fps, 1.6 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(
            frame,
            [0.6 * fps, 1.6 * fps],
            ["0px 40px", "0px 0px"],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            },
          ),
        }}
      >
        {title}
      </Interactive.Div>
      <Interactive.Div
        name="Subtítulo"
        style={{
          fontSize: 38,
          color: "#cfe3fb",
          opacity: interpolate(
            frame,
            [1.4 * fps, 2.2 * fps, 5 * fps, 6 * fps],
            [0, 1, 1, 0],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: [
                Easing.bezier(0.16, 1, 0.3, 1),
                Easing.linear,
                Easing.bezier(0.16, 1, 0.3, 1),
              ],
            },
          ),
        }}
      >
        {subtitle}
      </Interactive.Div>
    </AbsoluteFill>
  );
};
