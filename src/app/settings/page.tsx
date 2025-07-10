"use client";

import UpgradeRequiredDialog from "@/components/dialog/UpgradeRequiredDialog";
import Loading from "@/components/loading";
import SidebarWithHeader from "@/components/ui/SidebarWithHeader";
import { checkAuthOrRedirect, DecodedAuthToken, getAuthInfo } from "@/lib/auth/auth";
import { Avatar, Card, Heading, SimpleGrid } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Settings(){
    const [loading, setLoading] = useState(false);
    const [auth, setAuth] = useState<DecodedAuthToken | null>(null);

    useEffect(() => {
        const init = async () => {
            setLoading(true)
        
            const valid = await checkAuthOrRedirect(); // tunggu auth check selesai
            if (!valid) return; // langsung return kalau token invalid (udah redirect juga)
        
            const info = getAuthInfo(); // ✅ ambil token decoded
            setAuth(info);
            
            setLoading(false);
        };
        
        init();
    }, [])

    if (loading) return <Loading/>;

    return(
        <SidebarWithHeader username={auth?.username ?? "-"}>
            <Heading mb={6}>ERP Settings</Heading>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap="20px">
                <SettingCard 
                    title="Users" 
                    description={"This menu will help you to manage your user well. Use this menu to create, search, reset, and delete user."} 
                    link={"settings/users"} 
                    _package={auth?.package?.toString() ?? ""}
                />
                <SettingCard 
                    title="Product" 
                    description={"This menu will help you to manage your product well. Use this menu to create, search, reset, and delete product."} 
                    link={"settings/product"} 
                    _package={auth?.package?.toString() ?? ""}
                />
                <SettingCard 
                    title="Customer" 
                    description={"This menu will help you to manage your customer well. Use this menu to create, search, reset, and delete customer."} 
                    link={"settings/customer"} 
                    _package={auth?.package?.toString() ?? ""}
                />
                <SettingCard 
                    title="Finance" 
                    description={"This menu will help you to manage your account code, bank account, and finance category."} 
                    link={"settings/finance"} 
                    _package={auth?.package?.toString() ?? ""}
                />
            </SimpleGrid>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap="20px" mt={10}>
                <SettingCard 
                    title="Company" 
                    description={"This menu will help you to manage your company well. Use this menu to update your company data and company target."} 
                    link={"settings/company"} 
                    _package={auth?.package?.toString() ?? ""}
                />
                <SettingCard 
                    title="Supplier" 
                    description={"This menu will help you to manage your supplier well. Use this menu to create, search, reset, and delete supplier."} 
                    link={"settings/supplier"} 
                    _package={auth?.package?.toString() ?? ""}
                />
                <SettingCard 
                    title="Term" 
                    description={"This menu will help you to manage your term well. Use this menu to create, search, reset, and delete term."} 
                    link={"settings/term"} 
                    _package={auth?.package?.toString() ?? ""}
                />
                <SettingCard 
                    title="Origin" 
                    description={"This menu will help you to find the origin country and the area. This menu also provide free trade area."} 
                    link={"settings/origin"} 
                    _package={auth?.package?.toString() ?? ""}
                />
            </SimpleGrid>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap="20px" mt={10}>
                <SettingCard 
                    title="Payment" 
                    description={"This menu will help you to manage your payment well. Use this menu to create, search, reset, and delete payment."} 
                    link={"settings/payment"} 
                    _package={auth?.package?.toString() ?? ""}
                />
                <SettingCard 
                    title="Currency" 
                    description={"This menu will help you to manage your currency well. Use this menu to create, search, reset, and delete currency."} 
                    link={"settings/currency"} 
                    _package={auth?.package?.toString() ?? ""}
                />
                <SettingCard 
                    title="Tax" 
                    description={"This menu will help you to manage your tax settings well. Use this menu to create, search, reset, and delete tex."} 
                    link={"settings/tax"} 
                    _package={auth?.package?.toString() ?? ""}
                />
                {/* <SettingCard title={""} description={""} link={""}/>
                <SettingCard title={""} description={""} link={""}/> */}
            </SimpleGrid>

        </SidebarWithHeader>
    );
}

function SettingCard({title, description, link, _package} : {title: string, description: string, link: string, _package: string}){
    const router = useRouter();
    const [showUpgradeDialog, setShowUpgradeDialog] = useState(false);

    const handleSettingMenuOnClick = () => {
        if(title === "Users" && _package !== "sysadmin"){
            setShowUpgradeDialog(true);
        } else {
            router.push(link);
        }
    }   

    return(
        <>
            <Card.Root onClick={handleSettingMenuOnClick}>
                <Card.Body>
                    <Avatar.Root textAlign="center" alignItems="center">

                    </Avatar.Root>
                    <Card.Title mb={2} textAlign="center" alignItems="center">{title}</Card.Title>
                    <Card.Description textAlign="center" alignItems="center">{description}</Card.Description>
                </Card.Body>
            </Card.Root>

            <UpgradeRequiredDialog
                isOpen={showUpgradeDialog}
                onClose={() => setShowUpgradeDialog(false)}
                currentPackage={_package ?? ""}
                allowedPackages={["sysadmin"]}
            />
        </>
    );
}