import { HStack, Text, TextProps } from '@chakra-ui/react'

type LabeledTextProps = TextProps & {
  label: string
  value: string
}

const LabeledText = ({ label, value }: LabeledTextProps) => {
  return (
    <HStack align="start" gap={1}>
      <Text
        as="span"
        w="24"
        flexShrink={0}
        fontSize="sm"
        fontWeight="medium"
        color="gray.500"
      >
        {label}
      </Text>
      <Text as="span">{value}</Text>
    </HStack>
  )
}

export default LabeledText
