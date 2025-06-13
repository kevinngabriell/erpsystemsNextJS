"use client";
import { Button, Flex, Heading } from "@chakra-ui/react";
import SidebarWithHeader from "@/components/ui/SidebarWithHeader";

export default function CustomerSettings(){

    return(
        <SidebarWithHeader>

            <Flex gap={2} display={"flex"} mb={"2"} mt={"2"}>
                <Heading mb={6} width={"100%"}>Customer ERP Settings</Heading>
                <Button>Create New Customer</Button>
            </Flex>               
            
        </SidebarWithHeader>
        // settings

    );
}