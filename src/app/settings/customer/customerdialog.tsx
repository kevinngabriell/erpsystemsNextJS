"use client";
import Loading from "@/components/loading";
import { checkAuthOrRedirect, DecodedAuthToken, getAuthInfo } from "@/lib/auth/auth";
import { Customer, getDetailCustomer } from "@/lib/settings/customer";
import {
  Dialog,
  Portal,
  Field,
  Input,
  Button,
  SimpleGrid,
  CloseButton,
  Textarea,
} from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";

interface CustomerDialogProps {
  triggerIcon: ReactNode;
  title: string;
  customer_id: string;
  placeholders?: {
    customerName?: string;
    phoneNumber?: string;
    address?: string;
    picName?: string;
    picContact?: string;
    customerTOP?: string;
  };
  onSubmit?: () => void;
}

export default function CustomerDialog({
    triggerIcon,
    title,
    customer_id,
    placeholders,
    onSubmit,
}: CustomerDialogProps) {

    const [auth, setAuth] = useState<DecodedAuthToken | null>(null);
    const [customerData, setCustomerData] = useState<Customer | null>(null);
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!isOpen) return;

        const init = async () => {
            setLoading(true);

            const valid = await checkAuthOrRedirect();
            if (!valid) return;

            const info = getAuthInfo();
            setAuth(info);

            try {
                const data = await getDetailCustomer(customer_id);
                setCustomerData(data);
            } catch (err) {
                setCustomerData(null);
            } finally {
                setLoading(false);
            }
        };

        init();
    }, [isOpen]);    

    if(loading) return <Loading/>

    return(
        <Dialog.Root open={isOpen} onOpenChange={(details) => setIsOpen(details.open)}>
            <Dialog.Trigger asChild>{triggerIcon}</Dialog.Trigger>
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content>
                        <Dialog.Header>
                            <Dialog.Title>{title}</Dialog.Title>
                        </Dialog.Header>

                        <Dialog.Body>
                            <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} gap="20px">
                                <Field.Root w={{base: "100%", md: "100%", lg: "100%"}}>
                                    <Field.Label>Nama</Field.Label>
                                    <Input 
                                        value={customerData?.customer_name ?? ""}
                                        placeholder={"Masukkan nama konsumen"}
                                    />
                                </Field.Root>

                                <Field.Root w={{base: "100%", md: "100%", lg: "100%"}}>
                                    <Field.Label>Nomor Telepon</Field.Label>
                                    <Input 
                                        value={customerData?.customer_phone ?? ""}
                                        placeholder={"Masukkan nomor telepon"}
                                    />
                                </Field.Root>

                                <Field.Root w={{base: "100%", md: "100%", lg: "100%"}}>
                                    <Field.Label>Alamat</Field.Label>
                                    <Textarea 
                                        value={customerData?.customer_address ?? ""}
                                        placeholder={"Masukkan alamat"}
                                    />
                                </Field.Root> 

                                <Field.Root w={{base: "100%", md: "100%", lg: "100%"}}>
                                    <Field.Label>Nama PIC</Field.Label>
                                    <Input 
                                        value={customerData?.customer_pic ?? ""}
                                        placeholder={"Masukkan nama pic"}
                                    />
                                </Field.Root>   

                                <Field.Root w={{base: "100%", md: "100%", lg: "100%"}}>
                                    <Field.Label>Kontak PIC</Field.Label>
                                    <Input 
                                        value={customerData?.customer_contact_pic ?? ""}
                                        placeholder={"Masukkan nomor telepon PIC"}
                                    />
                                </Field.Root> 

                                <Field.Root w={{base: "100%", md: "100%", lg: "100%"}}>
                                    <Field.Label>TOP</Field.Label>
                                    <Input 
                                        type="number"
                                        value={customerData?.customer_top ?? ""}
                                        placeholder={"Masukkan jumlah TOP"}
                                    />
                                </Field.Root>                              
                            </SimpleGrid>
                        </Dialog.Body>

                        <Dialog.Footer>
                            <Dialog.ActionTrigger asChild>
                                <Button variant="outline">Batal</Button>
                            </Dialog.ActionTrigger>
                            <Button onClick={onSubmit}>Simpan</Button>
                        </Dialog.Footer>

                        <Dialog.CloseTrigger asChild>
                            <CloseButton size="sm" />
                        </Dialog.CloseTrigger>

                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    );
}