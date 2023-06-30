import { GoalType } from "@/types/Goal"
import { Card, CardBody, CardFooter, Text, Image, Stack, Heading, Divider,ButtonGroup, Button } from '@chakra-ui/react'
function Goal(GoalProps: GoalType) {
  return (
    <>
      <Card maxW='sm'>
        <CardBody>
          <Image
            src='./default-goal-img.png'
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{GoalProps.title}</Heading>
            <Text>
              {GoalProps.description}
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              45%
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button colorScheme='brand.gray' variant='outline'>
              View
            </Button>
            <Button colorScheme='teal' variant='ghost'>
              Edit
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  )
}

export default Goal