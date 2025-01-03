import { Button } from '@/components/ui/button';

export default function MapController({
  onMove,
}: {
  onMove: (direction: { x: number; y: number }) => void;
}) {
  return (
    <div className="grid grid-cols-4 gap-4 w-full">
      <Button
        size="lg"
        variant="secondary"
        onClick={() => onMove({ x: 0, y: -1 })}
      >
        <span role="img" aria-label="up">
          ⬆️
        </span>
      </Button>
      <Button
        size="lg"
        variant="secondary"
        onClick={() => onMove({ x: -1, y: 0 })}
      >
        <span role="img" aria-label="left">
          ⬅️
        </span>
      </Button>
      <Button
        size="lg"
        variant="secondary"
        onClick={() => onMove({ x: 0, y: 1 })}
      >
        <span role="img" aria-label="down">
          ⬇️
        </span>
      </Button>
      <Button
        size="lg"
        variant="secondary"
        onClick={() => onMove({ x: 1, y: 0 })}
      >
        <span role="img" aria-label="right">
          ➡️
        </span>
      </Button>
    </div>
  );
}
