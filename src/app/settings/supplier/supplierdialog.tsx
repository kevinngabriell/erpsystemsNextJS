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

interface SupplierDialogProps {
  triggerIcon: ReactNode;
  title: string;
  placeholders?: {
    namaSupplier?: string;
    nomorSupplier?: string;
    alamatSupplier?: string;
    asalSupplier?: string;
    picSupplier?: string;
    nomorpicSupplier?: string;
    matauangSupplier?: string;
    termSupplier?: string;
    informasibanSupplier?: string;
  };
  onSubmit?: () => void;
}

export default function SupplierDialog({
    triggerIcon,
    title,
    placeholders,
    onSubmit,
}: SupplierDialogProps) {
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
                                    <Field.Label>Nama Supplier</Field.Label>
                                    <Input placeholder={placeholders?.namaSupplier ?? "Masukkan nama supplier"} />
                                </Field.Root>

                                <Field.Root w={{base: "100%", md: "100%", lg: "100%"}}>
                                    <Field.Label>Kontak Supplier</Field.Label>
                                    <Input placeholder={placeholders?.nomorSupplier ?? "Masukkan kontak supplier"}/>
                                </Field.Root>

                                <Field.Root w={{base: "100%", md: "100%", lg: "100%"}}>
                                    <Field.Label>Alamat Supplier</Field.Label>
                                    <Input placeholder={placeholders?.alamatSupplier ?? "Masukkan alamat supplier"}/>
                                </Field.Root>     

                                <Field.Root w={{base: "100%", md: "100%", lg: "100%"}}>
                                    <Field.Label>Asal Supplier</Field.Label>
                                    <Input placeholder={placeholders?.asalSupplier ?? "Masukkan asal supplier"}/>
                                </Field.Root>   

                                <Field.Root w={{base: "100%", md: "100%", lg: "100%"}}>
                                    <Field.Label>Nama PIC Supplier</Field.Label>
                                    <Input placeholder={placeholders?.picSupplier ?? "Masukkan nama PIC supplier"}/>
                                </Field.Root>   

                                <Field.Root w={{base: "100%", md: "100%", lg: "100%"}}>
                                    <Field.Label>Kontak PIC Supplier</Field.Label>
                                    <Input placeholder={placeholders?.nomorpicSupplier ?? "Masukkan nomor PIC supplier"}/>
                                </Field.Root>  

                                <Field.Root w={{base: "100%", md: "100%", lg: "100%"}}>
                                    <Field.Label>Mata Uang</Field.Label>
                                    <Input placeholder={placeholders?.matauangSupplier ?? "Masukkan mata uang"}/>
                                </Field.Root>    

                                <Field.Root w={{base: "100%", md: "100%", lg: "100%"}}>
                                    <Field.Label>Term Supplier</Field.Label>
                                    <Input placeholder={placeholders?.termSupplier ?? "Masukkan term supplier"}/>
                                </Field.Root>   

                                <Field.Root w={{base: "100%", md: "100%", lg: "100%"}}>
                                    <Field.Label>Informasi Bank Supplier</Field.Label>
                                    <Input placeholder={placeholders?.informasibanSupplier ?? "Masukkan informasi bank supplier"}/>
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