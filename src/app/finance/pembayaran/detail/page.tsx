"use client";
import SidebarWithHeader from "@/components/ui/SidebarWithHeader";
import { Button, Card, Field, Flex, Heading, Input, SimpleGrid, Text, Textarea } from "@chakra-ui/react";
import { useParams } from "next/navigation";

export default function PembayaranDetail (){
    const params = useParams();
    const transactionID = params.transactionID;

    return(
        <SidebarWithHeader>
            {transactionID === "" || transactionID === null ? <Heading>Detail Pembayaran</Heading> : <Heading>Pendataan Pembayaran</Heading>}
            <Card.Root mt={4}>
                <Card.Body>
                    <SimpleGrid columns={{base : 1, md: 2, lg: 3}} gap={8}>
                        <Field.Root>
                            <Field.Label>Paid From</Field.Label>
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>Voucher No</Field.Label>
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>Cheque No</Field.Label>
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>Date</Field.Label>
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>Memo</Field.Label>
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>Payee</Field.Label>
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>Amount</Field.Label>
                        </Field.Root>
                    </SimpleGrid>

                    <Text mt={6} mb={6}>Detail Pembayaran</Text>

                    <SimpleGrid columns={{base: 1, md:2, lg:3}} gap={8}>
                        <Field.Root>
                            <Field.Label>Account No.</Field.Label>
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>Account Name</Field.Label>
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>Amount</Field.Label>
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>Memo</Field.Label>
                        </Field.Root>
                    </SimpleGrid>
                </Card.Body>
            </Card.Root>

            <Flex gap="4" justify="flex-end" mt={6}>
                <Button>Submit & New</Button>
                <Button>Submit & Close</Button>
            </Flex>
        </SidebarWithHeader>
    );
}