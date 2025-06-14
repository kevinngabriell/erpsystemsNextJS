"use client";
import { Button, Flex, Heading } from "@chakra-ui/react";
import SidebarWithHeader from "@/components/ui/SidebarWithHeader";

export default function Purchase(){

    return(
        <SidebarWithHeader>
            <Flex gap={2} display={"flex"} mb={"2"} mt={"2"}>
                <Heading mb={6} width={"100%"}>Purchase Module</Heading>
                <Button>Create New Purchase</Button>
            </Flex>        
            
                


        </SidebarWithHeader>
        // settings

    );
}