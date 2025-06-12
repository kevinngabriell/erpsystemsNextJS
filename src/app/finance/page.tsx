"use client";
import { Box, Button, Field, Flex, Heading, Input, InputGroup, Text,} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { LogOut, LayoutDashboard, Boxes } from "lucide-react";
import SidebarWithHeader from "@/components/ui/SidebarWithHeader";

export default function Finance(){
    const router = useRouter();

    return(
        <SidebarWithHeader>
            <Heading mb={6}>Finance</Heading>
        </SidebarWithHeader>
        // settings

    );
}