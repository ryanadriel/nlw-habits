import * as Progress from '@radix-ui/react-progress';

interface ProgressBarProps {
  progress: number
}

export function ProgressBar(props: ProgressBarProps) {

  const progresStyles = {
    width: `${props.progress}%`
  };
  

  return (
    <Progress.Root
      className="ProgressRoot h-3 rounded-xl bg-zinc-700 w-full mt-4"
    >
      <Progress.Indicator
        className="ProgressIndicator  h-3 rounded-xl bg-violet-600"
        style={progresStyles}
      />
    </Progress.Root>
  )
}