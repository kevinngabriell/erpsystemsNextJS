"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Box, Button, Field, Flex, Heading, Input, InputGroup, Text,} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { LogOut, LayoutDashboard, Boxes } from "lucide-react";
import SidebarWithHeader from "@/components/ui/SidebarWithHeader";

export default function Dashboard(){
    const router = useRouter();

    const items = [
        {
            title: "Dashboard",
            url: "/home",
            icon: LayoutDashboard,
            isActive: true,
        },
        {
            title: "Sales",
            url: "/sales",
            icon: LayoutDashboard,
            isActive: false,
        },
        {
            title: "Purchase",
            url: "/purchase",
            icon: LayoutDashboard,
            isActive: false,
        },
        {
            title: "Finance",
            url: "/finance",
            icon: LayoutDashboard,
            isActive: false,
        },
        {
            title: "Warehouse",
            url: "/warehouse",
            icon: LayoutDashboard,
            isActive: false,
        },
        {
            title: "HR",
            url: "/hr",
            icon: LayoutDashboard,
            isActive: false,
        },
        {
            title: "Analytics",
            url: "/analytics",
            icon: LayoutDashboard,
            isActive: false,
        },
        {
            title: "Document",
            url: "/document",
            icon: LayoutDashboard,
            isActive: false,
        },
        {
            title: "Settings",
            url: "/settings",
            icon: LayoutDashboard,
            isActive: false,
        },
    ]

    function sideBarOnClick(url: string) {
        router.push(url);
    }

    const handleLogout = () => {
        // implement logout logic here
    };

    return(
        <SidebarWithHeader children={undefined}/>

    );
}