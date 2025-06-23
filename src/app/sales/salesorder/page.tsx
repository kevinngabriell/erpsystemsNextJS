"use client";
import SidebarWithHeader from "@/components/ui/SidebarWithHeader";
import { Card, Field, Heading, Input, SimpleGrid, Text, Textarea } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import React, { useState } from "react";

export default function SalesOrder(){
    const params = useParams();
    const salesOrderId = params.salesOrderId;
    const [startDate, setStartDate] = useState(new Date());

    const [open, setOpen] = React.useState(false)
    const [date, setDate] = React.useState<Date | undefined>(undefined);
    return(
        <SidebarWithHeader>
            {salesOrderId === "" || salesOrderId === null ? <Heading>Sales Order</Heading> : <Heading>New Sales Order</Heading>}
            <Card.Root>
                <SimpleGrid columns={{base: 1, md: 2, lg: 3}} gap="40px" mt={7} ml={4} mr={4} mb={7}>
                    <Field.Root>
                        <Field.Label>Order Number</Field.Label>
                        <Input placeholder="Outline"/>
                    </Field.Root>
                    <Field.Root>
                        <Field.Label>Date</Field.Label>
                    </Field.Root>
                    <Field.Root>
                        <Field.Label>PPN/ No. PPN</Field.Label>
                        <Input/>
                    </Field.Root>
                    <Field.Root>
                        <Field.Label>Customer</Field.Label>
                        <Input/>
                    </Field.Root>
                    <Field.Root>
                        <Field.Label>Address</Field.Label>
                        <Textarea/>
                    </Field.Root>
                    <Field.Root>
                        <Field.Label>Customer TOP</Field.Label>
                        <Input/>
                    </Field.Root>
                    <Field.Root>
                        <Field.Label>Dikirim Ke</Field.Label>
                        <Input/>
                    </Field.Root>
                    <Field.Root>
                        <Field.Label>Dikirim Tgl</Field.Label>
                        <Input/>
                    </Field.Root>
                </SimpleGrid>
            </Card.Root>
        </SidebarWithHeader>
    );
}