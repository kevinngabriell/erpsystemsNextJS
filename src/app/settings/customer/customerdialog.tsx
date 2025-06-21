"use client";
import {
  Dialog,
  Portal,
  Field,
  Input,
  Button,
  SimpleGrid,
  CloseButton,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface CustomerDialogProps {
  triggerIcon: ReactNode;
  title: string;
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
    placeholders,
    onSubmit,
}: CustomerDialogProps) {
    return(
        <Dialog.Root>
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
                                    <Input placeholder={placeholders?.customerName ?? "Masukkan nama konsumen"} />
                                </Field.Root>

                                <Field.Root w={{base: "100%", md: "100%", lg: "100%"}}>
                                    <Field.Label>Nomor Telepon</Field.Label>
                                    <Input placeholder={placeholders?.phoneNumber ?? "Masukkan nomor telepon"}/>
                                </Field.Root>

                                <Field.Root w={{base: "100%", md: "100%", lg: "100%"}}>
                                    <Field.Label>Alamat</Field.Label>
                                    <Input placeholder={placeholders?.address ?? "Masukkan alamat"}/>
                                </Field.Root> 

                                <Field.Root w={{base: "100%", md: "100%", lg: "100%"}}>
                                    <Field.Label>Nama PIC</Field.Label>
                                    <Input placeholder={placeholders?.picName ?? "Masukkan nama pic"}/>
                                </Field.Root>   

                                <Field.Root w={{base: "100%", md: "100%", lg: "100%"}}>
                                    <Field.Label>Kontak PIC</Field.Label>
                                    <Input placeholder={placeholders?.picContact ?? "Masukkan nomor telepon PIC"}/>
                                </Field.Root> 

                                <Field.Root w={{base: "100%", md: "100%", lg: "100%"}}>
                                    <Field.Label>TOP</Field.Label>
                                    <Input placeholder={placeholders?.customerTOP ?? "Masukkan jumlah TOP"}/>
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