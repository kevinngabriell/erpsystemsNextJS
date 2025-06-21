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

interface BankAccountDialogProps {
  triggerIcon: ReactNode;
  title: string;
  placeholders?: {
    nomorRekening?: string;
    bank?: string;
    cabang?: string;
  };
  onSubmit?: () => void;
}

export default function BankAccountDialog({
    triggerIcon,
    title,
    placeholders,
    onSubmit,
}: BankAccountDialogProps) {
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
                                    <Field.Label>Nomor Rekening</Field.Label>
                                    <Input placeholder={placeholders?.nomorRekening ?? "Masukkan nomor rekening"} />
                                </Field.Root>

                                <Field.Root w={{base: "100%", md: "100%", lg: "100%"}}>
                                    <Field.Label>Bank</Field.Label>
                                    <Input placeholder={placeholders?.bank ?? "Masukkan nama bank"}/>
                                </Field.Root>

                                <Field.Root w={{base: "100%", md: "100%", lg: "100%"}}>
                                    <Field.Label>Cabang</Field.Label>
                                    <Input placeholder={placeholders?.cabang ?? "Masukkan cabang bank terdaftar"}/>
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