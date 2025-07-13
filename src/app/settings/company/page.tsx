"use client";
import { Button, Card, Field, Flex, Heading, Input, Tabs, Textarea } from "@chakra-ui/react";
import SidebarWithHeader from "@/components/ui/SidebarWithHeader";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";
import CompanyTargetDialog from "./companytargetdialog";
import { useEffect, useState } from "react";
import { checkAuthOrRedirect, DecodedAuthToken, getAuthInfo } from "@/lib/auth/auth";
import { Customer, getAllCustomer } from "@/lib/settings/customer";
import Loading from "@/components/loading";

export default function CompanySettings(){
    const [loading, setLoading] = useState(false);
    const [auth, setAuth] = useState<DecodedAuthToken | null>(null);
    const [listCustomerData, setListCustomerData] = useState<Customer[]>([]);

    useEffect(() => {
        const init = async () => {
            setLoading(true)
    
            const valid = await checkAuthOrRedirect(); 
            if (!valid) return; 
        
            const info = getAuthInfo(); // ✅ ambil token decoded
            setAuth(info);
    
            try {
                const data = await getAllCustomer();
                setListCustomerData(data);
            } catch (err) {
                setListCustomerData([]);
            } finally {
                setLoading(false);
            }
        };
        
            init();
    }, []);

    const chartData = [
        { year: 2021, target: 5000, fill: "var(--color-safari)" },
        { year: 2022, target: 10000, fill: "var(--color-safari)" },
        { year: 2023, target: 5000, fill: "var(--color-safari)" },
        { year: 2024, target: 10000, fill: "var(--color-safari)" },
        { year: 2025, target: 5000, fill: "var(--color-safari)" },
        { year: 2026, target: 10000, fill: "var(--color-safari)" },
        { year: 2027, target: 5000, fill: "var(--color-safari)" },
        { year: 2028, target: 10000, fill: "var(--color-safari)" },
    ]

    const chartConfig = {
        visitors: {
            label: "Visitors",
        },
        safari: {
            label: "Safari",
            color: "var(--chart-2)",
        },
     } satisfies ChartConfig

      if(loading) return <Loading/>;

    return(
        <SidebarWithHeader username={auth?.username ?? "-"}>
            <Flex gap={2} display={"flex"} mb={"2"} mt={"2"}>
                <Heading mb={6} width={"100%"}>Company Settings</Heading>
                <CompanyTargetDialog triggerIcon={<Button>Create New Company Target</Button>} title="New Target"/>
            </Flex>

            <Card.Root>
                <Card.Body>
                    <Tabs.Root defaultValue="company-information">
                        <Tabs.List>
                            <Tabs.Trigger value="company-information">
                                Company Information
                            </Tabs.Trigger>

                            <Tabs.Trigger value="company-target">
                                Company Target
                            </Tabs.Trigger>
                        </Tabs.List>

                        <Tabs.Content value="company-information">
                            <Flex gap={8} display={"flex"} mb={"2"} mt={"2"} direction={{ base: "column", md: "row" }}>
                                <Field.Root>
                                    <Field.Label>
                                        Company Name
                                    </Field.Label>
                                    <Input placeholder="Input your company name"/>
                                </Field.Root>

                                <Field.Root>
                                    <Field.Label>
                                        Phone Number
                                    </Field.Label>
                                    <Input placeholder="Input your company phone number"/>
                                </Field.Root>
                            </Flex>

                            <Flex gap={8} display={"flex"} mb={"2"} mt={"8"} direction={{ base: "column", md: "row" }}>
                                <Field.Root>
                                    <Field.Label>
                                        Website
                                    </Field.Label>
                                    <Input placeholder="Input your company name"/>
                                </Field.Root>

                                <Field.Root>
                                    <Field.Label>
                                        Email
                                    </Field.Label>
                                    <Input placeholder="Input your company phone number"/>
                                </Field.Root>
                            </Flex>

                            <Flex gap={8} display={"flex"} mb={"2"} mt={"8"} direction={{ base: "column", md: "row" }}>
                                <Field.Root>
                                    <Field.Label>
                                        Address
                                    </Field.Label>
                                    <Textarea placeholder="Input your company name"/>
                                </Field.Root>

                                <Field.Root>
                                    <Field.Label>
                                        Industry
                                    </Field.Label>
                                    <Input placeholder="Input your company phone number"/>
                                </Field.Root>
                            </Flex>

                            <Flex justify="end" mt={6}>
                                <Button>Update</Button>
                            </Flex>

                        </Tabs.Content>

                        <Tabs.Content value="company-target">
                            <Flex wrap="wrap" gap={4}>
                                {chartData.map((item) => (
                                    <Card.Root key={item.year}>
                                    <Card.Header>
                                        <Heading size="sm">Year: {item.year}</Heading>
                                    </Card.Header>
                                    <Card.Body>
                                        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
                                            <RadialBarChart data={chartData}
                                                startAngle={0}
                                                endAngle={250}
                                                innerRadius={80}
                                                outerRadius={110}
                                            >
                                                <PolarGrid
                                                    gridType="circle"
                                                    radialLines={false}
                                                    stroke="none"
                                                    className="first:fill-muted last:fill-background"
                                                    polarRadius={[86, 74]}
                                                    />
                                                    <RadialBar dataKey="target" background cornerRadius={10} />
                                                    <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                                                    <Label
                                                        content={({ viewBox }) => {
                                                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                                            return (
                                                            <text
                                                                x={viewBox.cx}
                                                                y={viewBox.cy}
                                                                textAnchor="middle"
                                                                dominantBaseline="middle"
                                                            >
                                                                <tspan
                                                                x={viewBox.cx}
                                                                y={viewBox.cy}
                                                                className="fill-foreground text-4xl font-bold"
                                                                >
                                                                {chartData[0].target}
                                                                </tspan>
                                                                <tspan
                                                                x={viewBox.cx}
                                                                y={(viewBox.cy || 0) + 24}
                                                                className="fill-muted-foreground"
                                                                >
                                                                Visitors
                                                                </tspan>
                                                            </text>
                                                            )
                                                        }
                                                        }}
                                                    />
                                                    </PolarRadiusAxis>

                                            </RadialBarChart>
                                        </ChartContainer>
                                        {/* <ResponsiveContainer width="100%" height={200}>
                                        <BarChart data={[item]}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="year" />
                                            <YAxis />
                                            <Tooltip />
                                            <Bar dataKey="target" fill={item.fill} />
                                        </BarChart>
                                        </ResponsiveContainer> */}
                                    </Card.Body>
                                    </Card.Root>
                                ))}
                                </Flex>

                        </Tabs.Content>
                    </Tabs.Root>
                </Card.Body>
            </Card.Root>

        </SidebarWithHeader>
        // settings

    );
}