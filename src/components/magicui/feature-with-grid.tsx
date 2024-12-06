import { Star } from "lucide-react";
import React, { ReactElement } from "react";
import { useId } from "react";
import ANIM__FadeInOutOnScroll from "../anims/fadein.anim";

type Type__Feature = {
  id: number;
  icon: ReactElement;
  title: ReactElement;
  para: ReactElement;
};

export function FeatureWithGrid({
  features = defaultData,
}: {
  features?: Type__Feature[];
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 container">
      {features.map((feature, index) => (
        <ANIM__FadeInOutOnScroll
          key={feature.id}
          className="relative bg-gradient-to-b dark:from-neutral-900 to-white p-6 rounded-xl overflow-hidden border border-secondary/5 transition duration-300 hover:shadow-xl space-y-4"
        >
          <Grid size={20} />
          <p className="text-8xl font-bold text-black/20">{feature.id}</p>
          <p className="font-medium">{feature.title}</p>
          <p>{feature.para}</p>
        </ANIM__FadeInOutOnScroll>
      ))}
    </div>
  );
}

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any, index: number) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}-${index}-${Math.floor(Math.random() * 10000)}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

const defaultData: Type__Feature[] = [
  {
    id: 1,
    icon: <Star />,
    title: <>HIPAA and SOC2 Compliant</>,
    para: (
      <>
        Our applications are HIPAA and SOC2 compliant, your data is safe with
        us, always.
      </>
    ),
  },
  {
    id: 2,
    icon: <Star />,
    title: <>HIPAA and SOC2 Compliant</>,
    para: (
      <>
        Our applications are HIPAA and SOC2 compliant, your data is safe with
        us, always.
      </>
    ),
  },
  {
    id: 3,
    icon: <Star />,
    title: <>HIPAA and SOC2 Compliant</>,
    para: (
      <>
        Our applications are HIPAA and SOC2 compliant, your data is safe with
        us, always.
      </>
    ),
  },
  {
    id: 4,
    icon: <Star />,
    title: <>HIPAA and SOC2 Compliant</>,
    para: (
      <>
        Our applications are HIPAA and SOC2 compliant, your data is safe with
        us, always.
      </>
    ),
  },
  {
    id: 5,
    icon: <Star />,
    title: <>HIPAA and SOC2 Compliant</>,
    para: (
      <>
        Our applications are HIPAA and SOC2 compliant, your data is safe with
        us, always.
      </>
    ),
  },
  {
    id: 6,
    icon: <Star />,
    title: <>HIPAA and SOC2 Compliant</>,
    para: (
      <>
        Our applications are HIPAA and SOC2 compliant, your data is safe with
        us, always.
      </>
    ),
  },
];
