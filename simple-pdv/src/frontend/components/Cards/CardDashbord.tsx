import type { CardInfo } from "../../interfaces/CardInfo";
import {Box, Card, Flex, Text} from "@radix-ui/themes"


export default function CardDashboard({titulo, valor}: CardInfo){
    return (
        <Box width={"240px"} height={"240px"}>
            <Card size={"3"} m={"5"}  className="shadowBox" style={{backgroundColor: "#00ff80"}}>
                <Flex align={"center"} direction={"column"}>
                    <Box style={{textAlign: "center"}}>
                        <Text weight={"bold"} size={"5"}>{titulo}</Text>
                    </Box>
                    <Box>
                        <Text>{valor}</Text>
                    </Box>
                </Flex>
            </Card>
        </Box>
    )
}