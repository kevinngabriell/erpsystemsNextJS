import SidebarWithHeader from "@/components/ui/SidebarWithHeader";
import { Button, Card, Flex, Heading } from "@chakra-ui/react";

export default function Warehouse(){
    return(
        <SidebarWithHeader>
            <Flex gap={2} display={"flex"} mb={"2"} mt={"2"}>
                <Heading mb={6} width={"100%"}>Warehouse Module</Heading>
                <Button>Atur Barang</Button>
            </Flex>          

            <Card.Root>
                <Card.Body>
                    
                </Card.Body>
            </Card.Root>  
        </SidebarWithHeader>
    );
}