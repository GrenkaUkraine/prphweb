import Text from "@/components/ui/Text";

interface TagProps {
  title: string,
  size?: 'sm' | 'md',
}

export default function Tag({ title, size = 'md' }: TagProps) {
  const paddingStyles = {
    sm: "py-0.5 px-1.5",
    md: "py-1 px-2",
  };

  return (
    <span className={`bg-content-primary text-surface inline-flex items-center ${paddingStyles[size]}`}>
      <Text variant="metadata" className="uppercase">
        {title}
      </Text>
    </span>
  )
}