"use client";
import SidebarWithHeader from "@/components/ui/SidebarWithHeader";
import { Button, Card, Field, Flex, Heading, Input, SimpleGrid, Text, Textarea } from "@chakra-ui/react";
import { useParams } from "next/navigation";

export default function PenerimaanDetail (){
    const params = useParams();
    const transactionID = params.transactionID;

    return(
        <SidebarWithHeader>
            {transactionID === "" || transactionID === null ? <Heading>Detail Penerimaan</Heading> : <Heading>Pendataan Penerimaan</Heading>}
            <Card.Root mt={4}>
                <Card.Body>
                    <SimpleGrid columns={{base : 1, md: 2, lg: 3}} gap={8}>
                        <Field.Root>
                            <Field.Label>Deposit To</Field.Label>
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>Voucher No</Field.Label>
                            <Input></Input>
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>Date</Field.Label>
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>Memo</Field.Label>
                            <Textarea></Textarea>
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>Amount</Field.Label>
                            <Input></Input>
                        </Field.Root>
                    </SimpleGrid>

                    <Text mt={6} mb={6}>Detail Penerimaan</Text>

                    <SimpleGrid columns={{base: 1, md:2, lg:3}} gap={8}>
                        <Field.Root>
                            <Field.Label>Account No.</Field.Label>
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>Account Name</Field.Label>
                            <Input></Input>
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>Amount</Field.Label>
                            <Input></Input>
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>Memo</Field.Label>
                            <Textarea></Textarea>
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