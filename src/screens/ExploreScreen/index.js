import React from "react"
import {
  Box,
  FlatList,
  Heading,
  AspectRatio,
  Image,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
  Center,
  Stack,
  Popover,
  AlertDialog,
  Button,
	useToast,
  NativeBaseProvider,
} from "native-base"
import { TouchableOpacity } from "react-native"
const data = require('../../API/explore.json')
import Icon from 'react-native-vector-icons/FontAwesome';

export const Example = () => {
	const [isOpen, setIsOpen] = React.useState(false)
	const onClose = () => setIsOpen(false)
	const cancelRef = React.useRef(null)
	const toast = useToast()


	const renderItem = ({ item }) => (
		<Box
				w={"48%"}
				m="1"
				overflow="hidden"
		>
				<Box>
						<Popover
								trigger={(triggerProps) => {
								return (
										<TouchableOpacity {...triggerProps}>
												<AspectRatio w="100%" ratio={16 / 9}>
														<Image
																rounded="lg"
																source={{
																		uri: "https://www.holidify.com/images/foodImages/8.jpg",
																}}
																alt="image"
																/>
												</AspectRatio>
										</TouchableOpacity>
								)
								}}
						>
								<Popover.Content accessibilityLabel="" w="56">
								<Popover.Arrow />
								<Popover.Body>
									<VStack p={2}>
											<TouchableOpacity style={{marginBottom: 18}} onPress={()=>{}}>
													<HStack space={3}>
															<Icon
																name="ban"
																size={20}
															/>
															<Text>Not Interested</Text>
													</HStack>
											</TouchableOpacity>
											<TouchableOpacity onPress={()=>{setIsOpen(true)}}>
													<HStack space={3}>
															<Icon
																name="exclamation-triangle"
																size={20}
															/>
															<Text>Report</Text>
													</HStack>
											</TouchableOpacity>
									</VStack>
								</Popover.Body>
								</Popover.Content>
						</Popover>
				</Box>
				<Stack p="1" space={3}>
						<Text fontWeight="600" fontSize="14">
								{(item.description.length>40) ? item.description.substring(0, 40) + "..." : item.description}
						</Text>
						<HStack space={1} justifyContent="space-between">
								<Avatar
										size="20px"
										source={{
										uri: item.avatarUrl,
										}}
								/>
								<Text
										_dark={{
												color: "warmGray.50",
										}}
										color="coolGray.600"
										>
										{item.fullName}
								</Text>
								<Spacer />
								<Icon
									name="heart"
									size={20}
								/>
								<Text
										fontSize="xs"
										_dark={{
										color: "warmGray.50",
										}}
										color="coolGray.800"
										alignSelf="flex-start"
								>
										5K
								</Text>
						</HStack>
				</Stack>
	</Box>
)
  return (
    <Box
      w={{
        base: "100%",
      }}
			pt={16}
			pb={12}
    >
      <FlatList
        data={data}
        numColumns={2} 
        removeClippedSubviews
        maxToRenderPerBatch={4}
        initialNumToRender={4}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
			<AlertDialog
					leastDestructiveRef={cancelRef}
					isOpen={isOpen}
					onClose={onClose}
			>
					<AlertDialog.Content>
					<AlertDialog.Body p={6}>
							<Center _text={{color: "coolGray.800",fontWeight: "600"}}>You have an unfinished draft,</Center>
							<Center _text={{color: "coolGray.800",fontWeight: "600"}}>continue to edit?</Center>
							<Center mt={3}>
								<Button.Group space={2}>
								<Button
										variant="unstyled"
										_text={{color: "coolGray.500"}}
										onPress={onClose}
										ref={cancelRef}
								>
										Cancel
								</Button>
								<Button colorScheme="info" onPress={()=>{
									onClose();
									toast.show({
										render: () => {
											return (
												<Box bg="black" opacity={0.8} w="300" px="5" py="3" rounded="50" mb={5}>
													<HStack space={3}>
															<Icon
																name="check-circle"
																size={20}
															/>
															<Text color="white">Successfully reported</Text>
													</HStack>
												</Box>
											)
										},
									})
								}}>
										Continue
								</Button>
								</Button.Group>
							</Center>
					</AlertDialog.Body>
					</AlertDialog.Content>
			</AlertDialog>
    </Box>
  )
}

export default function ExploreScreen() {
  return (
        <Example />
  )
}
