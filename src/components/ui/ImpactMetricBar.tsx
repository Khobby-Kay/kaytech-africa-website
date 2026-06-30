import { cn } from "@/lib/utils";

export type ImpactMetric = {
  label: string;
  before: string;
  after: string;
  /** Relative bar scale 0–100 (visual only — from approved before/after ranges). */
  beforeScale?: number;
  afterScale?: number;
  period?: string;
};

type ImpactMetricBarProps = {
  metric: ImpactMetric;
  variant?: "light" | "dark";
  className?: string;
};

export function ImpactMetricBar({
  metric,
  variant = "light",
  className,
}: ImpactMetricBarProps) {
  const beforeWidth = metric.beforeScale ?? 25;
  const afterWidth = metric.afterScale ?? 100;

  const track =
    variant === "dark" ? "bg-white/15" : "bg-surface-soft";
  const beforeBar =
    variant === "dark" ? "bg-white/35" : "bg-hairline";
  const afterBar = variant === "dark" ? "bg-accent" : "bg-primary";
  const labelClass =
    variant === "dark" ? "text-on-primary/70" : "text-muted";
  const valueClass = variant === "dark" ? "text-on-primary" : "text-ink";

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-baseline justify-between gap-2">
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-wider",
            labelClass,
          )}
        >
          {metric.label}
        </p>
        {metric.period ? (
          <p className={cn("text-[10px]", labelClass)}>{metric.period}</p>
        ) : null}
      </div>

      <div className="space-y-2">
        <div>
          <div className="mb-1 flex justify-between text-xs">
            <span className={labelClass}>Before</span>
            <span className={cn("font-semibold", valueClass)}>{metric.before}</span>
          </div>
          <div className={cn("h-2 overflow-hidden rounded-pill", track)}>
            <div
              className={cn("h-full rounded-pill transition-all", beforeBar)}
              style={{ width: `${beforeWidth}%` }}
            />
          </div>
        </div>
        <div>
          <div className="mb-1 flex justify-between text-xs">
            <span className={labelClass}>After</span>
            <span className={cn("font-semibold", valueClass)}>{metric.after}</span>
          </div>
          <div className={cn("h-2 overflow-hidden rounded-pill", track)}>
            <div
              className={cn("h-full rounded-pill transition-all", afterBar)}
              style={{ width: `${afterWidth}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
