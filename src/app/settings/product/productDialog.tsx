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

interface ProductDialogProps {
  triggerIcon: ReactNode;
  title: string;
  placeholders?: {
    KodeProduk?: string;
    NamaProduk?: string;
    DeskripsiProduk?: string;
  };
  onSubmit?: () => void;
}

export default function ProductDialog({
    triggerIcon,
    title,
    placeholders,
    onSubmit,
}: ProductDialogProps) {
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
                            <SimpleGrid columns={{ base: 1, md: 1, lg: 1 }} gap="20px">
                                <Field.Root w={{base: "100%", md: "100%", lg: "100%"}}>
                                    <Field.Label>Kode Produk</Field.Label>
                                    <Input placeholder={placeholders?.KodeProduk ?? "Masukkan kode produk"} />
                                </Field.Root>

                                <Field.Root w={{base: "100%", md: "100%", lg: "100%"}}>
                                    <Field.Label>Nama Produk</Field.Label>
                                    <Input placeholder={placeholders?.NamaProduk ?? "Masukkan nama produk"}/>
                                </Field.Root>

                                <Field.Root w={{base: "100%", md: "100%", lg: "100%"}}>
                                    <Field.Label>Deskripsi Produk</Field.Label>
                                    <Input placeholder={placeholders?.DeskripsiProduk ?? "Masukkan deskripsi produk"}/>
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