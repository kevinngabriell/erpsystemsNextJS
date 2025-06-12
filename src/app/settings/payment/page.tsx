"use client";
import { Box, Button, Field, Flex, Heading, Input, InputGroup, Text,} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { LogOut, LayoutDashboard, Boxes } from "lucide-react";
import SidebarWithHeader from "@/components/ui/SidebarWithHeader";

export default function PaymentSettings(){
    const router = useRouter();

    return(
        <SidebarWithHeader>
            <Heading mb={6}>Payment ERP Settings</Heading>
        </SidebarWithHeader>
        // settings

    );
}