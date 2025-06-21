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

interface AccountCodeDialogProps {
  triggerIcon: ReactNode;
  title: string;
  placeholders?: {
    kodeAkun?: string;
    namaAkun?: string;
    aliasAkun?: string;
  };
  onSubmit?: () => void;
}

export default function AccountCodeDialog({
  triggerIcon,
  title,
  placeholders,
  onSubmit,
}: AccountCodeDialogProps) {
  return (
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
                <Field.Root>
                  <Field.Label>Kode Akun</Field.Label>
                  <Input placeholder={placeholders?.kodeAkun ?? "Masukkan kode akun"} />
                </Field.Root>

                <Field.Root>
                  <Field.Label>Nama Kode Akun</Field.Label>
                  <Input placeholder={placeholders?.namaAkun ?? "Masukkan nama kode akun"} />
                </Field.Root>

                <Field.Root>
                  <Field.Label>Nama Kode Akun Alias</Field.Label>
                  <Input placeholder={placeholders?.aliasAkun ?? "Masukkan nama kode akun alias"} />
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