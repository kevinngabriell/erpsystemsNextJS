"use client";

import SidebarWithHeader from "@/components/ui/SidebarWithHeader";
import { Avatar, Card, Center, Heading, SimpleGrid } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Settings(){
    return(
        <SidebarWithHeader>
            <Heading mb={6}>ERP Settings</Heading>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap="20px">
                <SettingCard title="Users" description={"This menu will help you to manage your user well. Use this menu to create, search, reset, and delete user."} link={"settings/users"}/>
                <SettingCard title="Product" description={"This menu will help you to manage your product well. Use this menu to create, search, reset, and delete product."} link={"settings/product"}/>
                <SettingCard title="Customer" description={"This menu will help you to manage your customer well. Use this menu to create, search, reset, and delete customer."} link={"settings/customer"}/>
                <SettingCard title="Finance" description={"This menu will help you to manage your account code, bank account, and finance category."} link={"settings/finance"}/>
            </SimpleGrid>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap="20px" mt={10}>
                <SettingCard title="Company" description={"This menu will help you to manage your company well. Use this menu to update your company data and company target."} link={"settings/company"}/>
                <SettingCard title="Supplier" description={"This menu will help you to manage your supplier well. Use this menu to create, search, reset, and delete supplier."} link={"settings/supplier"}/>
                <SettingCard title="Term" description={"This menu will help you to manage your term well. Use this menu to create, search, reset, and delete term."} link={"settings/term"}/>
                <SettingCard title="Origin" description={"This menu will help you to find the origin country and the area. This menu also provide free trade area."} link={"settings/origin"}/>
            </SimpleGrid>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap="20px" mt={10}>
                <SettingCard title="Payment" description={"This menu will help you to manage your payment well. Use this menu to create, search, reset, and delete payment."} link={"settings/payment"}/>
                <SettingCard title="Curreny" description={"This menu will help you to manage your currency well. Use this menu to create, search, reset, and delete currency."} link={"settings/currency"}/>
                {/* <SettingCard title={""} description={""} link={""}/>
                <SettingCard title={""} description={""} link={""}/> */}
            </SimpleGrid>

        </SidebarWithHeader>
    );
}

function SettingCard({title, description, link} : {title: string, description: string, link: string}){
    const router = useRouter();

    return(
        <Card.Root onClick={() => router.push(link)}>
            <Card.Body>
                <Avatar.Root textAlign="center" alignItems="center">

                </Avatar.Root>
                <Card.Title mb={2} textAlign="center" alignItems="center">{title}</Card.Title>
                <Card.Description textAlign="center" alignItems="center">{description}</Card.Description>
            </Card.Body>
        </Card.Root>
    );
}