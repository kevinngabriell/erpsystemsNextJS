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

interface TaxDialogProps {
  triggerIcon: ReactNode;
  title: string;
  placeholders?: {
    tax?: string;
    taxCount?: string;
  };
  onSubmit?: () => void;
}

export default function TaxDialog({
    triggerIcon,
    title,
    placeholders,
    onSubmit,
}: TaxDialogProps) {
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
                                    <Field.Label>Tax</Field.Label>
                                    <Input placeholder={placeholders?.tax ?? "Masukkan nama pajak"} />
                                </Field.Root>

                                <Field.Root w={{base: "100%", md: "100%", lg: "100%"}}>
                                    <Field.Label>Tax Count</Field.Label>
                                    <Input placeholder={placeholders?.taxCount ?? "Masukkan jumlah pajak"}/>
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