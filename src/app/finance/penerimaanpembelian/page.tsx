import SidebarWithHeader from "@/components/ui/SidebarWithHeader";
import { Button, Card, Field, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";

export default function PenerimaanPembelian(){
    return(
        <SidebarWithHeader>
            <Heading mb={6}>Penerimaan Pembelian</Heading>

            <Card.Root mt={4}>
                <Card.Body>
                    <SimpleGrid columns={{base : 1, md: 2, lg: 3}} gap={8}>
                        <Field.Root>
                            <Field.Label>Vendor</Field.Label>
                        </Field.Root>     

                        <Field.Root>
                            <Field.Label>Penerima</Field.Label>
                        </Field.Root> 

                        <Field.Root>
                            <Field.Label>Form No.</Field.Label>
                        </Field.Root> 

                        <Field.Root>
                            <Field.Label>Payment Date</Field.Label>
                        </Field.Root> 

                        <Field.Root>
                            <Field.Label>Bank</Field.Label>
                        </Field.Root> 

                        <Field.Root>
                            <Field.Label>Rate</Field.Label>
                        </Field.Root>   

                        <Field.Root>
                            <Field.Label>Cheque No.</Field.Label>
                        </Field.Root>   

                        <Field.Root>
                            <Field.Label>Cheque Date</Field.Label>
                        </Field.Root> 

                        <Field.Root>
                            <Field.Label>Memo</Field.Label>
                        </Field.Root>                                                
                    </SimpleGrid>

                    <Text>The supplier has not issued any invoice yet.</Text>

                    <Flex justify="flex-end">
                        <Button>Submit</Button>
                    </Flex>
                </Card.Body>
            </Card.Root>
        </SidebarWithHeader>
    );
}